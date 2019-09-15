import React from 'react';
import { Image, View } from 'react-native'
import styles from './styles';

const path = `https://res.cloudinary.com/meet2move/image/upload/c_fill,h_200,w_200/v1566828122/trainers/profile_picture/`

const Avatar = (props) => {
	const { img } = props
	const imgSource = {uri:`${path}${img}`}
  return (
    <View style={styles.body}>
    	<Image 
  			style={styles.image} 
        source={imgSource}
        />
    </View>
  )
};
export default Avatar;