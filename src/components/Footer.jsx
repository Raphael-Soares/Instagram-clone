import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";

import {AntDesign} from "@expo/vector-icons";

function Footer() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}>
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

export default Footer;
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderColor: "lightgray",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
