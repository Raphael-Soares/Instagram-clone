import {StyleSheet, Text, View, Pressable, Image, Dimensions} from "react-native";
import React from "react";

const {width} = Dimensions.get("window");

function Post({item, setShowModal, handleShowModal}) {
    return (
        <Pressable onPressOut={() => setShowModal(false)} onPressIn={() => handleShowModal(item)}>
            <Image style={styles.image} source={{uri: item.image}} />
        </Pressable>
    );
}

export default Post;
const styles = StyleSheet.create({
    image: {
        width: width / 3,
        height: width / 3,
        marginRight: 2,
        marginTop: 2,
    },
});
