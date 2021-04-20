import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from "react-native-vector-icons/Entypo";

function Footer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.rect15}>
                <View style={styles.rect16}>
                    <FeatherIcon name="shopping-bag" style={styles.icon6} />
                    <Text style={styles.order}>Order</Text>
                </View>
                <View style={styles.rect17} >
                    <EntypoIcon name="basecamp" style={styles.icon7} />
                    <Text style={styles.goOut}>Go Out</Text>
                </View>
                <View style={styles.rect18}>
                    <EntypoIcon name="archive" style={styles.icon8} />
                    <Text style={styles.donate}>Donate</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: 60,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: -1,
            height: -1
        },
        elevation: 9,
        shadowOpacity: 0.1,
        shadowRadius: 7,
        flexDirection: "row",
    },
    rect15: {
        backgroundColor: "#E6E6E6",
        flexDirection: "row",
        flex: 1,
        width: '100%',
        // justifyContent: 'space-between'
    },
    rect16: {
        // flex: 0.33,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderColor: "rgba(175,30,30,1)",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    rect17: {
        // flex: 0.33,
        backgroundColor: "rgba(255,255,255,1)"
    },
    rect18: {
        // flex: 0.34,
        backgroundColor: "rgba(255,255,255,1)"
    },
    icon6: {
        top: 9,
        left: 50,
        position: "absolute",
        color: "rgba(47,47,47,1)",
        fontSize: 30,
    },
    order: {
        top: 38,
        left: 49,
        position: "absolute",
        fontFamily: "alata-regular",
        color: "rgba(20,20,20,1)",
        fontSize: 12
    },
    icon7: {
        top: 9,
        left: 180,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 30,
    },
    goOut: {
        top: 38,
        left: 175,
        position: "absolute",
        fontFamily: "alata-regular",
        color: "rgba(102,102,102,1)",
        fontSize: 12
    },
    icon8: {
        top: 9,
        left: 305,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 30,
    },
    donate: {
        top: 38,
        left: 295,
        position: "absolute",
        fontFamily: "alata-regular",
        color: "rgba(102,102,102,1)",
        fontSize: 12
    }
});

export default Footer;
