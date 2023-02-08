import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";

function Like({item}) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: item.pfp,
                    }}
                    style={styles.pfp}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.text}>{item.text}</Text>

                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>

            <Image
                source={{
                    uri: item.pfp,
                }}
                style={styles.postPreview}
            />
        </View>
    );
}

export default Like;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textContainer: {
        flexDirection: "row",
    },

    username: {
        fontWeight: "bold",
    },
    text: {
        marginHorizontal: 3,
    },
    time: {
        color: "grey",
    },
    pfp: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    postPreview: {
        width: 50,
        height: 50,
    },
});
