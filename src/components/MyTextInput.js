import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function MyTextInput(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <EvilIcons name="search" style={styles.icon} />
          <TextInput
            placeholder="Restaurant name, cuisine, or a dish..."
            placeholderTextColor="#ccc"
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 45,
  },
  rect2: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 2,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    color: '#DE2727',
    fontSize: 27,
    marginTop: 10,
  },
  textInput: {
    fontFamily: 'Metropolis-Regular',
    color: '#121212',
    alignItems: 'center',
    width: 298,
    marginLeft: 5,
    fontSize: 16,
  },
  iconRow: {
    height: 42,
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
  },
});

export default MyTextInput;
