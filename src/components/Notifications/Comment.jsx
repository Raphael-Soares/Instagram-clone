import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";

function Comment({item}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={{
                        uri: item.pfp,
                    }}
                    style={styles.pfp}
                />

                <Text style={styles.text}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.content}>commented: {item.text}</Text>

                    <Text style={styles.time}>{item.time}</Text>
                </Text>
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

export default Comment;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
    },

    subContainer: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
    },
    text: {
        flexDirection: "row",

        flex: 1,
    },

    username: {
        fontWeight: "bold",
    },
    content: {
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
