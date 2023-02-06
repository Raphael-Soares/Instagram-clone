import {StyleSheet, Text, View, Image} from "react-native";

import {LinearGradient} from "expo-linear-gradient";
import React from "react";

function Story({story}) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ff0000", "#cf00ea", "#ffa600"]} style={styles.border}>
                <View style={styles.center}>
                    <Image source={{uri: story.image}} style={styles.image} />
                </View>
            </LinearGradient>
            <Text style={styles.name}>{story.name}</Text>
        </View>
    );
}

export default Story;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        alignItems: "center",
    },
    border: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,

        width: 75,
        height: 75,
    },
    center: {
        borderRadius: 35,
        width: 70,
        height: 70,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        borderRadius: 65 / 2,
        width: 65,
        height: 65,
    },
    name: {
        fontSize: 12,
    },
});
