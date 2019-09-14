/**
 * BEAT81 // Coding task
 * @bombassaro
 * 2019.09.14
 */

import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CheckinScreen from './app/screens/Checkin'
import WorkoutScreen from './app/screens/Workout'
import WorkoutsScreen from './app/screens/Workouts'

const AppNavigator = createStackNavigator(
  {
    Checkin: CheckinScreen,
    Workout: WorkoutScreen,
    Workouts: WorkoutsScreen,
  },
  {
    initialRouteName: 'Workouts',
  }
);

export default createAppContainer(AppNavigator);