import {StyleSheet, Text, View, ScrollView, FlatList} from "react-native";
import {useEffect, useState} from "react";

import axios from "axios";

import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Footer from "../components/Footer";

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stories = [
    {
        id: "1",
        image: "https://picsum.photos/200/300",
        name: "John Doe",
    },
    {
        id: "2",
        image: "https://picsum.photos/201/300",
        name: "Mary Key",
    },
    {
        id: "3",
        image: "https://picsum.photos/202/300",
        name: "Maria Eduarda",
    },
    {
        id: "4",
        image: "https://picsum.photos/203/300",
        name: "Corinthians",
    },
    {
        id: "5",
        image: "https://picsum.photos/204/300",
        name: "São Paulo",
    },
    {
        id: "6",
        image: "https://picsum.photos/205/300",
        name: "Palmeiras",
    },
];

const posts = [
    {
        id: "1",
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: "2",
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: "3",
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
];

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <FlatList
                data={posts}
                keyExtactor={(post) => post.id}
                renderItem={({item}) => <Post post={item} />}
                ListHeaderComponent={<Stories stories={stories} />}
                listeHeaderComponentStyle={{marginBottom: 0}}
            ></FlatList>
            <Footer navigation={navigation} />
        </View>
    );
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
