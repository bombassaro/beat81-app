const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;
const _ = require("lodash")

const { 
  dataAttend,
  dataEvents, 
  dataImages, 
  members, 
  nextDays,
  returnUserImage,
} = require("./data")

const store = {
  attendance: dataAttend,
  days: nextDays,
  events: dataEvents,
	members: members
}

const checkin = (event, member) => {
  const { attendance } = store
  const item = {
    event: event,
    name: member,
    date: new Date()
  }
  const isUnshift = _.find(attendance, {
    event: event,
    name: member
  })
  isUnshift ?
    _.remove(store.attendance, { event: item.event, name: item.name }) :
      store.attendance.push(item)
}

const newMember = (firstname) => {
  const item = {
    name: firstname,
    img: returnUserImage(0)
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
        name: each.name,
        date: each.date,
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