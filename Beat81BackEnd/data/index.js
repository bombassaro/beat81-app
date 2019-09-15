const coachImages = {
  path: `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_200,w_200/v1566828122/trainers/profile_picture/`,
  items: [
    `7c0264fb-7688-4384-bf8a-0f06262a0b78`,
    `05348874-7b2b-4225-b5ac-342ee3fd3317`,
    `0b412be7-9cdf-491f-b524-0f0d987951b2`,
    `994901d5-92da-4ab6-b9dd-f74f21f708b6`
  ]
}
const dataImages = {
  items: [
    `https://www.beat81.com/static/images/profile_picture_placeholder_large.png`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1553538364/users/avatar/a26002a2-b534-4ae7-979c-df6647760eb6`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1553538364/users/avatar/4747f32e-208d-459b-8320-58dadc6aff86`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1568184374/users/avatar/2a5acaaf-10d4-4dbe-8990-c5e1850229eb`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1550945647/users/avatar/b905b4ea-c35a-4e8f-bb46-1ad4d0aace4b`,
    `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_50,w_50/v1567542048/users/avatar/b86ad29f-e998-4ef5-84d5-1cc99d9eabf7`
  ]
}
const returnCoachImage = (idx) => {
  return `${coachImages.path}${coachImages.items[idx]}`
}
const returnUserImage = (idx) => {
  return `${dataImages.items[idx]}`
}

const members = [{
  name: `Dre R.`,
  img: returnUserImage(1)
},{
  name: `Nancy W.`,
  img: returnUserImage(2)
},{
  name: `Paula C.`,
  img: returnUserImage(3)
},{
  name: `Serud A`,
  img: returnUserImage(4)
},{
  name: `Karol M`,
  img: returnUserImage(5)
}]

const dataAttend = [{
  event: 0,
  name: members[2].name,
  date: "2019-09-15T07:50:21.739Z"
},{
  event: 0,
  name: members[1].name,
  date: "2019-09-15T07:50:21.739Z"
},{
  event: 1,
  name: members[0].name,
  date: "2019-09-15T07:50:21.739Z"
}]

const dataEvents = [{
  id: 0,
  day: `September 14`,
  title: `10:00 AM // Sharpatipark`,
  lead: `Alessio // HIT 2-4`,
  img: returnCoachImage(0)
},{
  id: 1,
  day: `September 14`,
  title: `11:00 AM // Sharpatipark`,
  lead: `Jennifer // SAST 7-8`,
  img: returnCoachImage(1)
},{
  id: 2,
  day: `September 14`,
  title: `12:00 AM // Oosterpark`,
  lead: `Nicolas // HIT 7-4`,
  img: returnCoachImage(2)
},{
  id: 3,
  day: `September 15`,
  title: `13:00 AM // Sharpatipark`,
  lead: `Solly // HIT 17-1`,
  img: returnCoachImage(3)
}]

const nextDays = [
  `September 14`,
  `September 15`,
]
// const selectedEvent = (idx) => dataEvents[idx]

module.exports = {
  dataAttend,
  dataEvents,
  dataImages,
  members,
  nextDays,
  returnUserImage
}