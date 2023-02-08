import {StyleSheet, Text, View, FlatList, Image, Dimensions} from "react-native";
import React from "react";

const {width} = Dimensions.get("window");

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const posts = [
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
];
function PostsGrid() {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(post) => post.id}
                renderItem={({item}) => <Image style={styles.image} source={{uri: item.image}} />}
                numColumns={3}
                key={3}
            />
        </View>
    );
}

export default PostsGrid;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: width / 3,
        height: width / 3,
        marginRight: 1,
    },
});
