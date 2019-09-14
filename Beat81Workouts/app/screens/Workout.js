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

import { dataProfile } from '../data'
import { selectedEvent } from '../data'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Workout` };
  }
  renderAttendance() {
    return _.map(dataProfile, (item, key) => {
      return (
        <Profile
          {...this.props}
          data={item}
          key={key} />
      )
    })
  }
  render() {
    const functions = {
      goto: (route) => this.props.navigation.navigate(route)
    }
    const buttonCheckin = {
      title: `CHECK-IN`,
      style: styles.sectionTitle,
      onPress: () => functions.goto('Checkin')
    }
    return (
      <Container>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Section 
              {...this.props}
              title={selectedEvent(0).day} />
            <Event 
              {...this.props}
              data={selectedEvent(0)} />
            <Section 
              {...this.props}
              title={`Participants (3 check-ins)`} />
            { this.renderAttendance() }
            <Button {...buttonCheckin} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen