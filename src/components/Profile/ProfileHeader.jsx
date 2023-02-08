import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import ProfileInfo from "./ProfileInfo";

function ProfileHeader() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.pfp}
                source={{
                    uri: "https://picsum.photos/1000",
                }}
            />
            <ProfileInfo />
        </View>
    );
}

export default ProfileHeader;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    pfp: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
});
