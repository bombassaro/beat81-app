import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Avatar from '../Avatar'
import styles from './styles';

const Profile = (props) => {
	const { data } = props
  return (
    <View style={styles.body}>
  		<View style={styles.col}>
    		<Avatar img={data.img} />
      </View>
  		<View style={{...styles.col, ...styles.main}}>
      	<Text style={styles.title}>{data.name}</Text>
      	<Text style={styles.lead}>Checked-in at 11:00 AM</Text>
      </View>
    </View>
  )
};
export default Profile;