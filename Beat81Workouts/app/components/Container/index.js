import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './styles';

const Container = (props) => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <React.Fragment>
            {props.children}
          </React.Fragment>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};
export default Container;