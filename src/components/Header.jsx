import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
const statusbarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 22;

function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Instagram</Text>
            </View>

            <View style={styles.iconRow}>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="message1" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    container: {
        paddingTop: statusbarHeight + 16,
        paddingHorizontal: 16,
        paddingBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconRow: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
