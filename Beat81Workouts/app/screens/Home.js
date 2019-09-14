import React from 'react'
import {
  Button,
  View,
  Text,
} from 'react-native';
import Container from '../components/Container'
import styles from '../components/Container/styles'

class HomeScreen extends React.Component {
  render() {
    const functions = {
      goto: (route) => this.props.navigation.navigate(route)
    }
    const btnGoToHome = {
      title: `WORKOUT`,
      style: styles.sectionTitle,
      onPress: () => functions.goto('Workout')
    }
    return (
      <Container>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>HOME</Text>
            <Button {...btnGoToHome} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen