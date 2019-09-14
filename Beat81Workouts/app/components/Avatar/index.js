import React from 'react';
import { Image, View } from 'react-native'
import { dataImages } from '../../data'
import styles from './styles';

const Avatar = (props) => {
	const { img } = props
	const imgSource = {uri:`${dataImages.path}${img}`}
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