import {StyleSheet, Text, View} from "react-native";
import React from "react";

import Header from "../components/Header";
import Stories from "../components/Stories";

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

function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories stories={stories} />
            <View>
                <Text>Home</Text>
            </View>
        </View>
    );
}

export default Home;
const styles = StyleSheet.create({
    container: {},
});
