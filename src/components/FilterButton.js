import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FilterButton = ({ icon, ...otherProps }) => {
  return (
    <TouchableOpacity style={styles.filterDiv}>
      <View style={styles.container}>
        <Text style={styles.text}>{otherProps.title}</Text>
        {icon && <MaterialIcons name={icon} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    marginRight: 6,
  },
  filterDiv: {
    // width: 65,
    // height: 30,
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#bbb',
    marginRight: 7,
  },
  text: {
    fontFamily: 'roboto-regular',
    color: 'rgba(73,72,72,1)',
    fontSize: 12,
    marginLeft: 6,
    padding: 5,
  },
  icon: {
    color: 'rgba(82,82,82,1)',
    fontSize: 13,
    marginTop: 3,
  },
});

export default FilterButton;
