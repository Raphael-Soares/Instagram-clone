import {StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList} from "react-native";
import React from "react";
import Story from "./Story";

function Stories({stories}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Story story={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default Stories;
const styles = StyleSheet.create({
    container: {
        paddingBottom: 16,
        border: 1,
        borderColor: "#e9e9e9",
        borderBottomWidth: 1,
    },
});
