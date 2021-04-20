import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const deviceSIze = Dimensions.get('window')

const listTab = [
    {
        id: 1,
        status: 'DELIVERY'
    },
    {
        id: 2,
        status: 'DINING'
    },
    {
        id: 3,
        status: 'REVIEWS'
    }
]

const Food = () => {
    const [status, setStatus] = useState('DELIVERY')
    const setStatusFilter = status => {
        setStatus(status)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.iconContainerLeft}>
                    <Entypo name="chevron-small-left" style={styles.icon} />
                </View>
                <View style={styles.iconContainerRight} >
                    <SimpleLineIcons name="camera" style={styles.icon2} />
                    <SimpleLineIcons name="flag" style={styles.icon2} />
                    <SimpleLineIcons name="control-forward" style={styles.icon2} />
                </View>
            </View>
            <View style={styles.restaurantDetailsContainer}>
                <View style={styles.restaurantDetailsContainerLeft}>
                    <Text style={styles.restaurantName}>Big Bite Bakers</Text>
                    <Text style={styles.dealsIn}>Bakery, Fast Food</Text>
                    <Text style={styles.restaurantAddress}>Ranchi, Jharkhand</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                        <Image style={styles.maxSafetyImage} source={require('../../assets/images/e50eb01feab6bd50e50430f34b4645ac1613542991.webp')} />
                        <Text style={{ position: 'absolute', bottom: 0, left: 55, fontSize: 12, color: '#777' }}>more</Text>
                    </View>
                </View>
                <View style={styles.restaurantDetailsContainerRight}>
                    <View style={[styles.ratingAndPhotoContainer, { backgroundColor: '#257E3E' }]} >
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>4.1 <MaterialIcons name="star" style={styles.ratingIcon} /> Delivery</Text>

                    </View>
                    <View style={{ marginBottom: 8 }} />
                    <ImageBackground source={require('../../assets/images/4.jpg')} imageStyle={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }} style={styles.ratingAndPhotoContainer}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', marginHorizontal: 10 }}>11 Photos</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.filtrContainer}>
                {listTab.map(e => (
                    <TouchableOpacity onPress={() => setStatusFilter(e.status)} style={[styles.filterButton, status === e.status && styles.filterButtonActive]}>
                        <Text style={[styles.filterText, status === e.status && styles.filterTextActive]}>{e.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.additionalInfoContainer}>
                    <View style={styles.additionalInfoTab}>
                        <View style={styles.iconContainer}>
                            <Image style={{ margin: 8, width: 18, height: 18 }} source={require('../../assets/images/scooter.png')} />
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10, letterSpacing: 2 }}>MODE</Text>
                                <MaterialIcons name='arrow-drop-down' style={styles.icon3} />
                            </View>
                            <Text style={{ fontSize: 11 }}>delivery</Text>
                        </View>
                    </View>
                    <View style={styles.additionalInfoTab}>
                        <View style={styles.iconContainer}>
                            <Image style={{ margin: 8, width: 18, height: 18 }} source={require('../../assets/images/clock.png')} />
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10, letterSpacing: 2 }}>TIME</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>26 mins</Text>
                        </View>
                    </View>
                    <View style={styles.additionalInfoTab}>
                        <View style={styles.iconContainer}>
                            <Image style={{ margin: 8, width: 18, height: 18 }} source={require('../../assets/images/percentage.png')} />
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10, letterSpacing: 2 }}>OFFERS</Text>
                                <MaterialIcons name='arrow-drop-down' style={styles.icon3} />
                            </View>
                            <Text style={{ fontSize: 11 }}>view all (3)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#f5f5f5', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                <View style={[styles.menuAndFilterButtons, { flex: 2 }]}>
                    <Text style={{ fontSize: 20, marginLeft: 12, fontWeight: 'bold' }}>Menu</Text>
                </View>
                <View style={[styles.menuAndFilterButtons, { justifyContent: 'flex-end', flexDirection: 'row', flex: 3 }]}>
                    <TouchableOpacity style={styles.vegNonVegFilter}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 18, height: 18, marginRight: 3 }} source={require('../../assets/images/icon-veg.png')} />
                            <Text style={{ fontSize: 12 }}>Veg</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vegNonVegFilter}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 18, height: 18, marginRight: 3 }} source={require('../../assets/images/icon-nonveg.png')} />
                            <Text style={{ fontSize: 12 }}>Egg</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.vegNonVegFilter, { width: 100 }]}>
                        <View style={{ flexDirection: 'row', marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="search" style={{ fontSize: 20, color: '#E23744', marginRight: 3 }} />
                            <TextInput placeholder="Search" placeholderTextColor='#ccc' style={{ flex: 1, height: '100%', padding: 0, color: '#000', fontSize: 16 }} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, }}>
                <ScrollView style={{ marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold' }}>Best in Cake</Text>
                        <MaterialIcons name='arrow-drop-up' style={{ fontSize: 32, color: '#111111', alignSelf: 'flex-start', }} />
                    </View>
                    <View style={[styles.foodContainer, { marginBottom: 25 }]}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={styles.foodContainer}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#f0f0f0', marginTop: 25 }} />
                    <View style={[styles.foodContainer, { marginBottom: 25 }]}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={styles.foodContainer}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold' }}>Main Course</Text>
                        <MaterialIcons name='arrow-drop-up' style={{ fontSize: 32, color: '#111111', alignSelf: 'flex-start', }} />
                    </View>
                    <View style={[styles.foodContainer, { marginBottom: 25 }]}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={styles.foodContainer}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#f0f0f0', marginTop: 25 }} />
                    <View style={[styles.foodContainer, { marginBottom: 25 }]}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                    <View style={styles.foodContainer}>
                        <View style={[styles.foodDetails, { flex: 1 }]}>
                            <Image source={require('../../assets/images/icon-veg.png')} style={{ width: 18, height: 18 }} />
                        </View>
                        <View style={[styles.foodDetails, { flex: 12, backgroundColor: '#fff' }]}>
                            <Text style={{ fontSize: 16, }}>Truffle Chocolate Cream Cake</Text>
                            <Text>₹300</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gold', borderRadius: 4, paddingHorizontal: 3 }}>
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: 'gold', marginRight: 1 }} />
                                    <Ionicons name='ios-star' style={{ fontSize: 10, color: '#ccc', marginRight: 1 }} />
                                    <Text style={{ fontSize: 11, color: '#777', marginRight: 1 }}>125</Text>
                                </View>
                                <Text style={{ fontSize: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 4, paddingLeft: 4, paddingRight: 3, marginLeft: 4, color: 'orange' }}>Bestseller</Text>
                            </View>
                        </View>
                        <View style={[styles.foodDetails, { flex: 4, alignItems: 'center' }]}>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E23744', borderRadius: 7, paddingVertical: 5, width: 80 }}>
                                <Text style={{ fontWeight: 'bold', color: '#E23744' }}>ADD</Text>
                                <Ionicons name='ios-add' style={{ fontSize: 20, color: '#E23744', marginLeft: 5, marginRight: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 11 }}>customizable</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ width: 100, height: 40, backgroundColor: "#000", position: 'absolute', right: 13, bottom: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Feather name="menu" style={{ fontSize: 20, color: '#fff' }} />
                <Text style={{ color: '#fff', fontSize: 18, marginLeft: 5 }}>Menu</Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gold'
    },
    headerContainer: {
        // flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    iconContainerLeft: {
        flex: 1,
    },
    iconContainerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        fontSize: 30,
        // margin: 10,
        marginVertical: 5,
        color: '#333333'
    },
    icon2: {
        fontSize: 18,
        marginHorizontal: 13,
        marginVertical: 10,
        color: '#333333'
    },
    icon3: {
        fontSize: 16,
        color: '#333333'
    },
    restaurantDetailsContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5
    },
    maxSafetyImage: {
        width: deviceSIze.width / 8,
        height: deviceSIze.height / 45,
    },
    restaurantName: {
        fontSize: 24,
        marginVertical: 2,
        fontWeight: '600'
    },
    dealsIn: {
        fontSize: 13,
        marginVertical: 2,
        color: '#555'
    },
    restaurantAddress: {
        marginVertical: 2,
        color: '#888',
        fontSize: 12,

    },
    restaurantDetailsContainerRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    ratingAndPhotoContainer: {
        width: 80,
        height: 50,
        // backgroundColor: 'green',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filtrContainer: {
        // flex: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 10
    },
    filterButton: {
        alignItems: 'center',
        flex: 1,
        height: 50,
        justifyContent: 'space-around',
        borderRadius: 10,
        // backgroundColor: 'red',
    },
    filterButtonActive: {
        backgroundColor: '#000000'
    },
    filterText: {
        color: '#aaa',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    filterTextActive: {
        color: '#fff',
    },
    dataContainer: {
        // flex: 1,
        // backgroundColor: 'gold',
    },
    additionalInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    additionalInfoTab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    iconContainer: {
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: -1,
            height: 1
        },
        elevation: 6,
        shadowOpacity: 0.21,
        shadowRadius: 2,
    },
    vegNonVegFilter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 30,
        borderRadius: 20,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: -1,
            height: 1
        },
        elevation: 2,
        shadowOpacity: 0.21,
        shadowRadius: 2,
        backgroundColor: '#fff',
        marginRight: 8
    },
    foodContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30
        // backgroundColor: 'green'
    },
    foodDetails: {

    }
})

export default Food;
