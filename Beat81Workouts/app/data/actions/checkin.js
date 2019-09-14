import * as types from '../reducer';

const checkin = (socket, dispatch, eventId, firstname) => {
  socket.emit("checkin", eventId, firstname)
  // dispatch...
}

export default checkin;