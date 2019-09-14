const dataImages = {
  path: `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_200,w_200/v1566828122/trainers/profile_picture/`,
  items: [
    `7c0264fb-7688-4384-bf8a-0f06262a0b78`,
    `05348874-7b2b-4225-b5ac-342ee3fd3317`,
    `0b412be7-9cdf-491f-b524-0f0d987951b2`,
    `994901d5-92da-4ab6-b9dd-f74f21f708b6`
  ]
}

const nextDays = [
  `September 14`,
  `September 15`,
]

const dataEvents = [{
  id: 0,
  day: `September 14`,
  title: `10:00 AM // Sharpatipark`,
  lead: `Nicolas // HIT 2-4`,
  img: dataImages.items[3]
},{
  id: 1,
  day: `September 14`,
  title: `11:00 AM // Sharpatipark`,
  lead: `Nicolas // SAST 7-8`,
  img: dataImages.items[3]
},{
  id: 2,
  day: `September 14`,
  title: `12:00 AM // Oosterpark`,
  lead: `Tweede // HIT 7-4`,
  img: dataImages.items[1]
},{
  id: 3,
  day: `September 15`,
  title: `13:00 AM // Sharpatipark`,
  lead: `Fernando // HIT 17-1`,
  img: dataImages.items[0]
}]

const members = [{
  name: `Leonardo C`,
  img: dataImages.items[3]
},{
  name: `Paula S`,
  img: dataImages.items[3]
},{
  name: `Betina D`,
  img: dataImages.items[1]
},{
  name: `Marcus A`,
  img: dataImages.items[2]
}]

const selectedEvent = (idx) => dataEvents[idx]

module.exports = {
  dataEvents,
  dataImages,
  members,
  nextDays,
  selectedEvent
}