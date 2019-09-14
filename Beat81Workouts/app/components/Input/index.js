import React from 'react';
import { TextInput, View } from 'react-native'
import styles from './styles';

const Input = (props) => {
  return (
    <View style={styles.body}>
    	<TextInput 
    		{...props}
  			style={styles.input} />
    </View>
  )
};
export default Input;