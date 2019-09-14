import React from 'react'
import {
  Button,
  View,
  Text,
} from 'react-native';
import Container from '../components/Container'
import styles from '../components/Container/styles'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Workout` };
  };
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
            <Text style={styles.sectionTitle}>WORKOUT</Text>
            <Button {...buttonCheckin} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen