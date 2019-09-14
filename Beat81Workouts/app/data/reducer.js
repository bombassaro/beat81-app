import React from 'react'

export const LOADING = 'LOADING';
export const FINISHED = 'FINISHED';

export const EVENTS_LOAD = 'EVENTS/LOAD';
export const MEMBERS_LOAD = 'MEMBERS/LOAD';
export const SELECT_EVENT = 'SELECT/EVENT';

export const initialState = {
  loading: true, 
  loaded: false,
  days: [],
  events: [],
  members: [],
  selected: false
}
export function reducer(state, action){
  const { type, payload } = action
  switch(type) {
    case LOADING: 
      return {
        ...state, 
        loading: true, 
        loaded: false,
      }
    case FINISHED: 
      return {
        ...state, 
        loading: false,
        loaded: true,
      }
    case EVENTS_LOAD: 
      return {
        ...state,
        days: payload.days,
        events: payload.events
      }
    case MEMBERS_LOAD: 
      return {
        ...state,
        members: payload.members
      }
    case SELECT_EVENT: 
      return {
        ...state,
        selected: payload.selected
      }
    default:
      return state;
  }
};