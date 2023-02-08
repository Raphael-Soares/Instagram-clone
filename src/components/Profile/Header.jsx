import {StyleSheet, Text, View, StatusBar} from "react-native";
import React from "react";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 24;

import {AntDesign} from "@expo/vector-icons";

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>instagram.user</Text>
            <View style={styles.icon}>
                <AntDesign name="down" size={14} color="black" />
            </View>
        </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight + 14,
        paddingBottom: 14,
        paddingHorizontal: 14,

        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    icon: {
        marginTop: 6,
        marginLeft: 6,
    },
});
