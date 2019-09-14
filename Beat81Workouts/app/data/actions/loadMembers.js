import * as types from '../reducer';

const loadEvents = (socket, dispatch) => {
  socket.emit("members/list")
  socket.on("members/list", payload => {
  	dispatch({ 
  		type: types.MEMBERS_LOAD, 
  		payload: payload
  	});
  });
}

export default loadEvents;