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
    return { title: `Check-in` };
  };
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
            <Text style={styles.sectionTitle}>Check-in</Text>
            <Button {...buttonClose} />
          </View>
        </View>
      </Container>

    )
  }
}

export default HomeScreen