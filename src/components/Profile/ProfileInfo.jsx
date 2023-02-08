import {StyleSheet, Text, View} from "react-native";
import React from "react";

function ProfileInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.userNumbers}>
                <Text style={styles.number}>10</Text>
                <Text>Posts</Text>
            </View>
            <View style={styles.userNumbers}>
                <Text style={styles.number}>10</Text>
                <Text>Followers</Text>
            </View>
            <View style={styles.userNumbers}>
                <Text style={styles.number}>10</Text>
                <Text>Folowing</Text>
            </View>
        </View>
    );
}

export default ProfileInfo;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    userNumbers: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 14,
    },

    number: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
