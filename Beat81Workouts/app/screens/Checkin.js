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

import { dataProfile } from '../data'
import { selectedEvent } from '../data'

class CheckinScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Check-in` };
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
      goto: (route) => this.props.navigation.navigate(route),
      goback: () => this.props.navigation.goBack()
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
              {...this.props}
              title={selectedEvent(0).day} />
            <Event 
              {...this.props}
              data={selectedEvent(0)} />
            <Section title={`Add new member`} />
            <Input />
            <Section title={`Members`} />
            { this.renderAttendance() }
            <Button {...buttonClose} />
          </View>
        </View>
      </Container>

    )
  }
}

export default CheckinScreen