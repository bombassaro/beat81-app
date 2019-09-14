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

import { selectedEvent } from '../data'

const WorkoutScreen = (props) => {

  const { state } = React.useContext(Content);
  const { events, members, selected } = state
  const eventData = events[selected]

  const renderAttendance = () => {
    return _.map(members, (item, key) => {
      return (
        <Profile
          {...props}
          data={item}
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
            data={eventData} />
          <Section 
            {...props}
            title={`Participants (3 check-ins)`} />
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
