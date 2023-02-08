import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import Header from "../components/Profile/Header";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileBio from "../components/Profile/ProfileBio";
import Footer from "../components/Footer";
import ProfileTabs from "../components/Profile/ProfileTabs";
import PostsGrid from "../components/Profile/PostsGrid";

function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            <ProfileHeader />
            <ProfileBio />
            <ProfileTabs />
            <PostsGrid />

            <Footer navigation={navigation} />
        </View>
    );
}

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
