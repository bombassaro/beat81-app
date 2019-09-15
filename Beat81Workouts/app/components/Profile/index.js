import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../Avatar'
import styles from './styles';

const Profile = (props) => {
	const { data } = props
  
  const d = !data.date ? `` : new Date(data.date)
  
  const checkedin = !d ? d : 
    `Checked-in at ${d.getHours()}:${(`0`+d.getMinutes()).slice(-2)}`

  return (
    <TouchableOpacity 
      onPress={() => props.checkin(data.name)}
      style={styles.body}>
  		<View style={styles.col}>
    		<Avatar img={data.img} />
      </View>
  		<View style={{...styles.col, ...styles.main}}>
      	<Text style={styles.title}>{data.name}</Text>
      	<Text style={styles.lead}>{checkedin}</Text>
      </View>
    </TouchableOpacity>
  )
};
export default Profile;