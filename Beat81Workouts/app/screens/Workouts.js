import React from 'react'
import _ from 'lodash'
import {
  Button,
  View,
  Text,
} from 'react-native';
import Container from '../components/Container'
import styles from '../components/Container/styles'
import Event from '../components/Event'
import Section from '../components/Section'

import { nextDays, dataEvents } from '../data'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Home` };
  };
  renderEvents(day) {
    const filtered = _.filter(dataEvents, { day })
    return _.map(filtered, (item, key) => {
      return (
        <Event 
          {...this.props}
          data={item} 
          key={key} />
      )
    })
  }
  renderSections() {
    return _.map(nextDays, (item, key) => {
      return (
        <Section 
          {...this.props}
          title={item} 
          key={key}>
          { this.renderEvents(item) }
        </Section>
      )
    })
  }
  render() {
    const functions = {
      goto: (route) => this.props.navigation.navigate(route)
    }
    const buttonWorkout = {
      title: `WORKOUT`,
      style: styles.sectionTitle,
      onPress: () => functions.goto('Workout')
    }
    return (
      <Container>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            { this.renderSections() }
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen