/**
 * BEAT81 // Coding task
 * @bombassaro
 * 2019.09.14
 */

import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './app/screens/Home'
import WorkoutScreen from './app/screens/Workout'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: WorkoutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);