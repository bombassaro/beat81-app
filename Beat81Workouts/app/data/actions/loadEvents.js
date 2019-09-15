import * as types from '../reducer';

const loadEvents = (socket, dispatch) => {
  socket.emit("events/list")
  socket.on("events/list", payload => {
  	dispatch({ 
  		type: types.EVENTS_LOAD, 
  		payload: payload
  	});
  });
}

export default loadEvents;