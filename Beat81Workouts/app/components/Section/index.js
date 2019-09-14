import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';

const Section = (props) => {
	const { data } = props
  return (
    <View style={styles.wrap}>
      <View style={styles.section}>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
      <View style={styles.body}>
        {props.children}
      </View>
    </View>
  )
};
export default Section;