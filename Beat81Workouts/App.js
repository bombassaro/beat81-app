/**
 * BEAT81 // Coding task
 * @bombassaro
 * 2019.09.14
 */
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Provider from './app/data/provider'

import CheckinScreen from './app/screens/Checkin'
import WorkoutScreen from './app/screens/Workout'
import WorkoutsScreen from './app/screens/Workouts'

const AppNavigator = createStackNavigator({
  Checkin: CheckinScreen,
  Workout: WorkoutScreen,
  Workouts: WorkoutsScreen,
}, {
  initialRouteName: 'Workouts',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
    	<Provider>
    		<AppContainer />
  		</Provider>
		)
  }
}