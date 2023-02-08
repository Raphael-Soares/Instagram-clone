import {StyleSheet, Text, View, Pressable} from "react-native";
import {useState} from "react";

import {MaterialIcons} from "@expo/vector-icons";

function ProfileTabs() {
    const [activeTab, setActiveTab] = useState("posts");
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    setActiveTab("posts");
                }}
                style={activeTab === "posts" ? styles.selected : styles.tab}
            >
                <MaterialIcons name="grid-on" size={24} color="black" />
            </Pressable>
            <Pressable
                onPress={() => {
                    setActiveTab("tags");
                }}
                style={activeTab === "tags" ? styles.selected : styles.tab}
            >
                <MaterialIcons name="person-pin" size={24} color="black" />
            </Pressable>
        </View>
    );
}

export default ProfileTabs;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    tab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 14,
    },
    selected: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 14,

        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
});
