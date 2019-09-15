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

import { Content } from '../data/provider'
import selectEvent from '../data/actions/selectEvent'

const WorkoutsScreen = (props) => {
  
  const { state, dispatch } = React.useContext(Content);
  const { days, events } = state

  if(days.length === 0) {
    return ( 
      <Container>
        <View>
          <Text>Content.Provider not found.</Text>
          <Text>Check socket connection.</Text>
        </View>
      </Container>
    )
  }

  goToEvent = (eventId) => {
    selectEvent(dispatch, eventId)
    props.navigation.navigate(`Workout`)
  }

  renderEvents = (day) => {
    const filtered = _.filter(events, { day })
    return _.map(filtered, (item, key) => {
      return (
        <Event 
          {...props}
          goToEvent={goToEvent}
          data={item} 
          key={key} />
      )
    })
  }
  renderSections = () => {
    return _.map(days, (item, key) => {
      return (
        <Section 
          {...props}
          title={item} 
          key={key}>
          { renderEvents(item) }
        </Section>
      )
    })
  }
  const buttonWorkout = {
    title: `WORKOUT`,
    style: styles.sectionTitle,
    onPress: () => props.navigation.navigate('Workout')
  }
  return (
    <Container>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          { renderSections() }
        </View>
      </View>
    </Container>

  )
}
WorkoutsScreen.navigationOptions = ({ navigation }) => {
  return { title: `Home` };
}
export default WorkoutsScreen