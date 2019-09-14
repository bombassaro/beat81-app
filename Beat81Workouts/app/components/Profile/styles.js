import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  lead: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 12,
    fontStyle: 'italic',
  },
  main: {
    paddingLeft: 20,
  },
  wrap: {}
});

export default styles;