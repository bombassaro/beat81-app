import React from 'react'
import _ from 'lodash'
import {
  Button,
  View,
  Text,
} from 'react-native';

import Container from '../components/Container'
import Event from '../components/Event'
import Input from '../components/Input'
import Profile from '../components/Profile'
import Section from '../components/Section'

import styles from '../components/Container/styles'

import { dataProfile, dataImages } from '../data'
import { selectedEvent } from '../data'

import { Content } from '../data/provider'

import checkin from '../data/actions/submit'
import submit from '../data/actions/submit'

const CheckinScreen = (props) => {
  
  const { state, socket, dispatch } = React.useContext(Content);
  
  const [firstname, setFirstname] = React.useState("")

  addNewAttendee = () => {
    submit(socket, dispatch, firstname)
    setFirstname("")
  }
  doCheckin = (firstname) => {
    const { selected } = state
    console.log(selected, firstname)
    checkin(socket, dispatch, selected, firstname)
  }
  renderInputAttendee = () => {
    return (
      <Input 
        autoCorrect={false}
        value={firstname}
        onSubmitEditing={() => addNewAttendee()} 
        onChangeText={firstname => setFirstname(firstname)} />
    )
  }
  renderAttendees = () => {
    const { members } = state
    return _.map(members, (item, key) => {
      return (
        <Profile
          {...props}
          checkin={doCheckin}
          data={item}
          key={key} />
      )
    })
  }
  const functions = {
    goto: (route) => props.navigation.navigate(route),
    goback: () => props.navigation.goBack(),
  }
  const buttonClose = {
    title: `CLOSE`,
    style: styles.sectionTitle,
    onPress: () => functions.goback()
  }
  return (
    <Container>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Section 
            {...props}
            title={selectedEvent(0).day} />
          <Event 
            {...props}
            data={selectedEvent(0)} />
          <Section title={`Add new member`} />
          { renderInputAttendee() }
          <Section title={`Members`} />
          { renderAttendees() }
          <Button {...buttonClose} />
        </View>
      </View>
    </Container>
  )
}
CheckinScreen.navigationOptions = ({ navigation }) => {
  return { title: `Check-in` };
}
export default CheckinScreen