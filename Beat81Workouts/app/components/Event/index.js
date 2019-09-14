import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../Avatar'
import styles from './styles';

const Event = (props) => {
	const { data } = props
  return (
    <TouchableOpacity 
    	onPress={() => props.goToEvent(data.id)}
    	style={styles.body}>
  		<View style={{...styles.col, ...styles.main}}>
      	<Text style={styles.title}>{data.title}</Text>
      	<Text>{data.lead}</Text>
      </View>
  		<View style={styles.col}>
    		<Avatar img={data.img} />
      </View>
    </TouchableOpacity>
  )
};
export default Event;