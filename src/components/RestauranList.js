import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function RestaurantList({ item }) {
  const img = '3.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ImageBackground
          source={item.image}
          resizeMode="stretch"
          style={styles.foodImageBackground}
          imageStyle={styles.image_imageStyle}>
          <View style={styles.bookmarkContainer}>
            <MaterialIcons name="bookmark-border" style={styles.bookmarkIcon} />
          </View>
          <View style={styles.offerAndTimeContainer}>
            <ImageBackground
              style={styles.offerImageBackground}
              imageStyle={styles.offerImageBackgroundImageStyle}
              source={require('../../assets/images/Gradient_PSElraZ.png')}>
              <Text style={styles.discountPercentageText}>
                {item.discountPercentage}% off
              </Text>
              <Text style={styles.upTo}>Upto ₹{item.discountLimit}</Text>
            </ImageBackground>
            <View style={styles.rect9}>
              <Text style={styles.deliveryTimeText}>{item.deliveryTime}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{ top: 100 }}>
          <View style={styles.restaurantDetailsContainer}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.loremIpsum4}>{item.ratings}</Text>
              <MaterialIcons name="star" style={styles.ratingIcon} />
            </View>
          </View>
          <View style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>{item.foodCategory}</Text>
            <Text style={styles.budgetText}>₹{item.budget}</Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoSubContainer}>
              <View style={styles.tradingIconContainer}>
                <MaterialIcons name="trending-up" style={styles.tradingIcon} />
              </View>
              <Text style={styles.loremIpsum7}>
                {item.personCount}+ people ordered from here since lockdown
              </Text>
            </View>
            <Image
              source={require('../../assets/images/e50eb01feab6bd50e50430f34b4645ac1613542991.webp')}
              resizeMode="contain"
              style={styles.image2}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 269,
    marginBottom: 37,
  },
  subContainer: {
    // top: 103,
    left: 0,
    height: 269,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 4,
    right: 0
  },
  restaurantName: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 15,
    height: 18,
    width: 178,
    marginTop: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  additionalInfoSubContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    width: 38,
    height: 19,
    backgroundColor: "rgba(46,146,66,1)",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: 'center',
  },
  loremIpsum4: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
  },
  ratingIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginLeft: 1,
    marginTop: 3,
  },
  restaurantDetailsContainer: {
    height: 21,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodTypeText: {
    fontFamily: "roboto-regular",
    color: "rgba(88,88,88,1)",
    fontSize: 12,
    height: 14,
    width: 198,
  },
  budgetText: {
    fontFamily: "roboto-500",
    color: "rgba(127,123,123,1)",
    fontSize: 13,
    height: 15,
    width: 74,
    marginLeft: 45
  },
  foodTypeContainer: {
    height: 15,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 11,
  },
  hr: {
    width: 337,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 9,
    marginLeft: 11
  },
  tradingIconContainer: {
    width: 16,
    height: 16,
    backgroundColor: "#6f80bc",
    borderRadius: 50,
    marginRight: 2,
  },
  tradingIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 2,
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "rgba(123,123,123,1)",
    fontSize: 11,
    height: 13,
    width: 253,
    marginLeft: 3,
    marginTop: 1
  },
  additionalInfoContainer: {
    height: 15,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 11,
    marginRight: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodImageBackground: {
    top: 0,
    left: 0,
    height: 173,
    position: "absolute",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    right: 0,
    overflow: "hidden",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image_imageStyle: {},
  bookmarkContainer: {
    width: 24,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    // marginTop: 14,
    marginRight: 15
  },
  bookmarkIcon: {
    color: "rgba(3,3,3,1)",
    fontSize: 19,
    marginTop: 3,
    marginLeft: 3
  },
  offerImageBackground: {
    width: 74,
    height: 34,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: "hidden",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  offerImageBackgroundImageStyle: {},
  discountPercentageText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    width: 59,
    height: 13,
    marginTop: 3,
    marginLeft: 15
  },
  upTo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    letterSpacing: 0,
    width: 53,
    height: 13,
    marginTop: 2,
    marginLeft: 15
  },
  rect9: {
    width: 53,
    height: 18,
    backgroundColor: "rgba(230,230,230,0.8)",
    borderRadius: 4,
    marginLeft: 220,
    marginTop: 16,
  },
  deliveryTimeText: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 2,
    marginLeft: 7,
  },
  offerAndTimeContainer: {
    height: 34,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 89,
    marginRight: 11
  },
  image2: {
    width: 39,
    height: 39,
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
    // position: "absolute"
  },
  rect7Stack: {
    height: 269
  }
});

export default RestaurantList;
