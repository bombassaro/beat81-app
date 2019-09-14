const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;
const _ = require("lodash")

const { 
  dataEvents, 
  dataImages, 
  members, 
  nextDays
} = require("./data")

const store = {
  attendance: [{
    event: 0,
    name: members[2].name
  },{
    event: 0,
    name: members[1].name
  },{
    event: 1,
    name: members[0].name
  }],
  days: nextDays,
  events: dataEvents,
	members: members
}

const checkin = (event, member) => {
  const item = {
    event: event,
    name: member,
  }
  store.attendance.push(item)
}

const newMember = (firstname) => {
  const item = {
    name: firstname,
    img: dataImages.items[0]
  }
  store.members.push(item)
}

const mountEvents = () => {
  const { attendance, events } = store
  const result = []
  _.map(events, (event, k) => {
    const filtered = _.filter(attendance, { event: event.id })
    const attendees = []
    _.map(filtered, (each, k) => {
      const name = { 
        name: each.name 
      }
      attendees.push(name)
    })
    const item = {
      ...event,
      attendees: orderList(attendees)
    }
    result.push(item)
  })
  return result
}

const orderList = (list) => {
  return list.sort((a, b) => 
    a.name.localeCompare(b.name))
}

io.on("connection", socket => {
  
  socket.on("checkin", (event, member) => {
    checkin(event, member)
    io.emit("events/list", {
      days: store.days,
      events: mountEvents(), 
    })
  })
  socket.on("events/list", () => {
    socket.emit("events/list", {
      days: store.days,
      events: mountEvents(), 
    })
  })
  socket.on("members/list", () => {
    socket.emit("members/list", {
      members: orderList(store.members), 
    })
  })
  socket.on("members/new", (firstname) => {
    newMember(firstname)
    io.emit("members/list", {
      members: orderList(store.members), 
    })
  })

});

server.listen(port, () => console.log("server running on port:" + port));