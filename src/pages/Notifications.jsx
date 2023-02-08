import {StyleSheet, Text, View, Button, FlatList} from "react-native";
import React from "react";
import Header from "../components/Notifications/Header";

import Like from "../components/Notifications/Like";
import Follower from "../components/Notifications/Follower";
import Comment from "../components/Notifications/Comment";

const notifications = [
    {
        id: 1,
        username: "São Paulo",
        pfp: "https://picsum.photos/200/300",
        text: "liked your post",
        time: "1h",
        type: "like",
    },
    {
        id: 2,
        username: "Corinthians",
        pfp: "https://picsum.photos/200/300",
        text: "started following you",
        time: "2h",
        type: "follow",
    },
    {
        id: 3,
        username: "Palemiras",
        pfp: "https://picsum.photos/200/300",
        text: "Tenho ligação ao facismo italiano!",
        time: "3h",
        type: "comment",
    },
];

function Notifications({navigation}) {
    return (
        <View>
            <Header navigation={navigation} />

            <FlatList
                data={notifications}
                keyExtractor={(comment) => comment.id}
                renderItem={({item}) => {
                    if (item.type === "like") {
                        return <Like item={item} />;
                    } else if (item.type === "follow") {
                        return <Follower item={item} />;
                    } else if (item.type === "comment") {
                        return <Comment item={item} />;
                    }
                }}
            />
        </View>
    );
}

export default Notifications;
const styles = StyleSheet.create({});
