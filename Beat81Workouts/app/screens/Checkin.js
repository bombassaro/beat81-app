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

import { Content } from '../data/provider'

import checkin from '../data/actions/checkin'
import submit from '../data/actions/submit'
import selectEvent from '../data/actions/selectEvent'

const CheckinScreen = (props) => {
  
  const { state, socket, dispatch } = React.useContext(Content);
  const { events, selected } = state
  const selectedData = _.find(events, { id: selected })
  const { attendees } = selectedData
  const [firstname, setFirstname] = React.useState("")

  const goToEvent = (eventId) => {
    selectEvent(dispatch, eventId)
    props.navigation.navigate(`Workout`)
  }

  addNewAttendee = () => {
    if(!firstname || firstname === "") return false
    const { members } = state
    const hasMember = _.find(members, { name: firstname})
    if(hasMember) return false
    submit(socket, dispatch, firstname)
    setFirstname("")
  }
  doCheckin = (firstname) => {
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
      const checked = _.find(attendees, { name: item.name })
      const member = {
        ...item,
        date: checked ? checked.date : ``
      }
      return (
        <Profile
          {...props}
          checkin={doCheckin}
          data={member}
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
            title={selectedData.day} />
          <Event 
            {...props}
            goToEvent={goToEvent}
            data={selectedData} />
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