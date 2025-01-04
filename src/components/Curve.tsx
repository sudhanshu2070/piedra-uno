import React from 'react';
import { View, StyleSheet } from 'react-native';

const Curve: React.FC = () => {
  return <View style={styles.curve} />;
};

const styles = StyleSheet.create({
  curve: {
    height: 100,
    backgroundColor: '#f0f0f0', // Light gray color
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Curve;