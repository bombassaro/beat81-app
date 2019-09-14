import * as types from '../reducer';

const selectEvent = (dispatch, eventId) => {
	dispatch({ 
		type: types.SELECT_EVENT, 
		payload: { selected: eventId }
	});
}

export default selectEvent;