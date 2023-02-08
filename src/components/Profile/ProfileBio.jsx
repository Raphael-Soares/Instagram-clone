import {StyleSheet, Text, View, Pressable} from "react-native";
import React from "react";

import {AntDesign} from "@expo/vector-icons";

function ProfileBio() {
    return (
        <View
            style={{
                flexDirection: "column",
            }}
        >
            <Text style={styles.name}>Person name</Text>
            <Text style={styles.bio}>
                Você usaria o instagram 2 desenvolvido por raphael soares? voce usaria?
            </Text>

            <View style={styles.controls}>
                <Pressable style={styles.buttonFollow}>
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                <Pressable style={styles.buttonMessage}>
                    <Text style={{color: "black", fontWeight: "bold"}}>Message</Text>
                </Pressable>
                <Pressable style={styles.buttonAdd}>
                    <AntDesign name="adduser" size={20} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

export default ProfileBio;
const styles = StyleSheet.create({
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 14,
    },

    name: {
        // fontSize: 16,
        fontWeight: "500",
        marginTop: 6,
        marginHorizontal: 14,
    },
    bio: {
        marginHorizontal: 14,
        marginTop: 6,
    },

    buttonFollow: {
        backgroundColor: "#0095f6",
        height: 30,
        width: 100,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",

        flex: 1,
    },
    buttonMessage: {
        backgroundColor: "#eeeeee",
        height: 30,
        width: 100,

        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 6,
        flex: 1,
    },
    buttonAdd: {
        backgroundColor: "#eeeee",
        height: 30,
        paddingHorizontal: 6,

        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
