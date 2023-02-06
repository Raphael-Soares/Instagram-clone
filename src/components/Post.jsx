import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";

function Post({post}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image style={styles.userImage} source={{uri: post.image}} />
                    <Text style={styles.name}>{post.name}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 16,
                    }}
                >
                    <Feather name="more-vertical" size={18} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                style={styles.post}
                source={{
                    uri: post.image,
                }}
            ></Image>
            <View style={styles.footer}>
                <View style={styles.actions}>
                    <View style={styles.controls}>
                        <TouchableOpacity>
                            <Feather name="heart" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="message-circle" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Feather name="bookmark" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", paddingVertical: 16}}>
                        {post.likes} likes
                    </Text>
                </View>
                <View>
                    <Text style={styles.caption}>
                        <Text style={styles.name}>{post.name}</Text> {post.caption}
                    </Text>
                </View>
                <View>
                    <Text style={{color: "gray", fontSize: 12}}>{post.posted}</Text>
                </View>
            </View>
        </View>
    );
}

export default Post;
const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    post: {
        width: "100%",
        height: 400,
    },
    footer: {
        padding: 16,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    controls: {
        flexDirection: "row",
        alignItems: "center",
        width: 100,
        justifyContent: "space-between",
    },

    caption: {
        fontSize: 14,
    },
});
