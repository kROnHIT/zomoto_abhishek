import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text, Dimensions } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import FilterButton from '../components/FilterButton';
import RestaurantList from '../components/RestauranList';
import Footer from '../components/Footer'

const data = [
  {
    id: 1,
    name: 'Food Bazar',
    image: require('../../assets/images/1.webp'),
    discountPercentage: 20,
    discountLimit: 200,
    deliveryTime: '35 mins',
    foodCategory: 'Chinese, Continental, North Indian',
    ratings: 4,
    budget: '300 for one',
    personCount: 5175,
  },
  {
    id: 2,
    name: 'Paratha Point',
    image: require('../../assets/images/2.jpg'),
    discountPercentage: 40,
    discountLimit: 100,
    deliveryTime: '50 mins',
    foodCategory: 'Chinese, Continental, North Indian',
    ratings: 3.5,
    budget: '200 for one',
    personCount: 2100,
  },
  {
    id: 3,
    name: 'Kaveri Lalpur',
    image: require('../../assets/images/3.jpg'),
    discountPercentage: 30,
    discountLimit: 100,
    deliveryTime: '30 mins',
    foodCategory: 'Chinese, Continental, North Indian, South Indian, Italian',
    ratings: 4.5,
    budget: '200 for one',
    personCount: 4520,
  },
  {
    id: 4,
    name: 'Kaveri Lalpur',
    image: require('../../assets/images/3.jpg'),
    discountPercentage: 30,
    discountLimit: 100,
    deliveryTime: '30 mins',
    foodCategory: 'Chinese, Continental, North Indian, South Indian, Italian',
    ratings: 4.5,
    budget: '200 for one',
    personCount: 4520,
  },
];

const filterData = [
  {
    id: 1,
    title: 'Hello',
  },
  {
    id: 2,
    title: 'Hello',
  },
  {
    id: 3,
    title: 'Hello',
  },
  {
    id: 4,
    title: 'Hello',
  },
  {
    id: 5,
    title: 'Hello',
  },
  {
    id: 6,
    title: 'Hello',
  }
]

function Restaurants(props) {
  return (
    <View>
      <View style={styles.container}>
        <MyTextInput />
        <ScrollView horizontal={true} style={styles.filterContainer}>
          <FilterButton title="Cuisine" icon="arrow-drop-down" />
          <FilterButton title="Rating: 4.0+" />
          <FilterButton title="MAX Safety" />
          <FilterButton title="MAX Safety" />
          <FilterButton title="MAX Safety" />
          <FilterButton title="MAX Safety" />
        </ScrollView>
        {/* <FlatList
        data={filterData}
        renderItem={({ item }) => <FilterButton title={item.title} />}
        keyExtractor={filterData => filterData.id}
        style={styles.filterContainer}
        horizontal={true}
      /> */}
        <ScrollView style={styles.restaurantListContainer}>
          {/* <FlatList
          data={data}
          renderItem={RestaurantList}
          keyExtractor={data => data.id.toString()}
        /> */}
          <RestaurantList
            item={{
              id: 1,
              name: 'Food Bazar',
              image: require('../../assets/images/1.webp'),
              discountPercentage: 20,
              discountLimit: 200,
              deliveryTime: '35 mins',
              foodCategory: 'Chinese, Continental, North Indian',
              ratings: 4,
              budget: '300 for one',
              personCount: 5175,
            }}
          />
          <RestaurantList
            item={{
              id: 2,
              name: 'Paratha Point',
              image: require('../../assets/images/2.jpg'),
              discountPercentage: 40,
              discountLimit: 100,
              deliveryTime: '50 mins',
              foodCategory: 'Chinese, Continental, North Indian',
              ratings: 3.5,
              budget: '200 for one',
              personCount: 2100,
            }}
          />
          <RestaurantList
            item={{
              id: 3,
              name: 'Kaveri Lalpur',
              image: require('../../assets/images/3.jpg'),
              discountPercentage: 30,
              discountLimit: 100,
              deliveryTime: '30 mins',
              foodCategory: 'Chinese, Continental, North Indian, South Indian, Italian',
              ratings: 4.5,
              budget: '200 for one',
              personCount: 4520,
            }}
          />
          <RestaurantList
            item={{
              id: 4,
              name: 'Kaveri Lalpur',
              image: require('../../assets/images/3.jpg'),
              discountPercentage: 30,
              discountLimit: 100,
              deliveryTime: '30 mins',
              foodCategory: 'Chinese, Continental, North Indian, South Indian, Italian',
              ratings: 4.5,
              budget: '200 for one',
              personCount: 4520,
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  filterContainer: {
    width: 360,
    height: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  restaurantListContainer: {
    marginTop: 20,
    height: '82%'
  },
  footerContainer: {
    height: 20,
    position: 'relative',
    bottom: 0
  }
});

export default Restaurants;
