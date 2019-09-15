import React from 'react'
import _ from 'lodash'
import {
  Button,
  View,
  Text,
} from 'react-native';

import Container from '../components/Container'
import Event from '../components/Event'
import Profile from '../components/Profile'
import Section from '../components/Section'
import styles from '../components/Container/styles'

import { Content } from '../data/provider'

import checkin from '../data/actions/checkin'
import selectEvent from '../data/actions/selectEvent'

const WorkoutScreen = (props) => {

  const { dispatch, state, socket } = React.useContext(Content);
  const { events, members, selected } = state
  const eventData = events[selected]
  const { attendees } = eventData

  const goToEvent = (eventId) => {
    selectEvent(dispatch, eventId)
    props.navigation.navigate(`Workout`)
  }

  const doCheckin = (firstname) => {
    checkin(socket, dispatch, selected, firstname)
  }

  const renderAttendance = () => {
    return _.map(attendees, (item, key) => {
      const member = _.find(members, { name: item.name })
      const _item = {
        ...item,
        img: member && member.img
      }
      return (
        <Profile
          {...props}
          checkin={doCheckin}
          data={_item}
          key={key} />
      )
    })
  }
  const buttonCheckin = {
    title: `CHECK-IN`,
    style: styles.sectionTitle,
    onPress: () => props.navigation.navigate(`Checkin`)
  }
  return (
    <Container>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Section 
            {...props}
            title={eventData.day} />
          <Event 
            {...props}
            goToEvent={goToEvent}
            data={eventData} />
          <Section 
            {...props}
            title={`Participants (${attendees.length} check-ins)`} />
          { renderAttendance() }
          <Button {...buttonCheckin} />
        </View>
      </View>
    </Container>
  )
}
WorkoutScreen.navigationOptions = ({ navigation }) => {
  return { title: `Workout` };
}
export default WorkoutScreen
