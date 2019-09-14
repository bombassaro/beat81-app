import * as types from '../reducer';

const submit = (socket, dispatch, firstname) => {
  socket.emit("members/new", firstname)
  // dispatch...
}

export default submit;