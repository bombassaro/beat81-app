import React from 'react'
import {
  Button,
  View,
  Text,
} from 'react-native';
import Container from '../components/Container'
import styles from '../components/Container/styles'

import { goToRoute } from '../utils/navigation'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Home` };
  };
  render() {
    const functions = {
      goto: (route) => goToRoute(this.props, route)
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
            <Button {...buttonWorkout} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen