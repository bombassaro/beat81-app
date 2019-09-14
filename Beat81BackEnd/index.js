const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

const { dataEvents, dataImages, members, nextDays } = require("./data")

const store = {
  days: nextDays,
  events: dataEvents,
	members: members
}

const newMember = (firstname) => {
  const item = {
    name: firstname,
    img: dataImages.items[0]
  }
  store.members.push(item)
}

const orderList = (list) => {
  return list.sort((a, b) => 
      a.name.localeCompare(b.name))
}

io.on("connection", socket => {
  
  console.log("a user connected :D");

  socket.on("events/list", () => {
    socket.emit("events/list", {
      days: store.days,
      events: store.events, 
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