import {StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList} from "react-native";
import React from "react";
import Story from "./Story";

function Stories({stories}) {
    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <FlatList
                data={stories}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Story story={item} />}
                horizontal={true}
            />
        </ScrollView>
    );
}

export default Stories;
const styles = StyleSheet.create({
    container: {
        height: 100,
    },
});
