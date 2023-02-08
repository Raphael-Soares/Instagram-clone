import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

function Header({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color="black"
                    onPress={() => navigation.navigate("Home")}
                />
            </TouchableOpacity>
            <Text style={styles.title}>Notifications</Text>
        </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight + 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderColor: "lightgray",
        borderBottomWidth: 1,

        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },
});
