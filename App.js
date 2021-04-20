import React from 'react';

import { View, StyleSheet } from 'react-native';
import Restaurants from './src/screens/Restaurants';
import Food from './src/screens/Food';

const App = () => {
  return (
    <View style={styles.container}>
      <Restaurants />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default App;
