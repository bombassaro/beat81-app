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
  render() {
    const functions = {
      goto: (route) => goToRoute(this.props, route)
    }
    const btnGoToHome = {
      title: `HOME`,
      style: styles.sectionTitle,
      onPress: () => functions.goto('Home')
    }
    return (
      <Container>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>WORKOUT</Text>
            <Button {...btnGoToHome} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen