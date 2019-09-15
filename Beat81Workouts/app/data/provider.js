import React from 'react';
import io from "socket.io-client"

import {
  Button,
  View,
  Text,
} from 'react-native';

import { reducer, initialState } from './reducer'

import loadEvents from './actions/loadEvents'
import loadMembers from './actions/loadMembers'

export const Content = React.createContext("");

const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [loaded, setLoaded] = React.useState(false)

  let API_URL = 
    Platform.OS === `android` ? 
      `http://10.0.2.2:3000` : 
        `http://localhost:3000`

  // API_URL = `xprog....` // xprog-server

  const socket = io(API_URL)

  const value = { state, socket, dispatch };

  if(!loaded) {
    setLoaded(true)
    loadEvents(socket, dispatch)
    loadMembers(socket, dispatch)
  }

  return (
    <Content.Provider value={value}>
      {props.children}
    </Content.Provider>
  )
}

export default Provider