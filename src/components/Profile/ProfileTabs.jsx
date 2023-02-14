import {StyleSheet, Text, View, Pressable} from "react-native";
import {useState} from "react";

import {MaterialIcons} from "@expo/vector-icons";

function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("posts");
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress={() => {
                        setActiveTab("posts");
                    }}
                    style={styles.tab}
                >
                    <MaterialIcons name="grid-on" size={24} color="black" />
                </Pressable>
                <Pressable
                    onPress={() => {
                        setActiveTab("tags");
                    }}
                    style={styles.tab}
                >
                    <MaterialIcons name="person-pin" size={24} color="black" />
                </Pressable>
            </View>
            <View style={activeTab === "posts" ? styles.bar1 : styles.bar2}></View>
        </View>
    );
}

export default ProfileTabs;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    tab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 14,
    },
    bar1: {
        height: 2,
        backgroundColor: "#000",
        width: "50%",
        marginLeft: 0,
    },
    bar2: {
        height: 2,
        backgroundColor: "#000",
        width: "50%",
        marginLeft: "50%",
    },
});
