import {StyleSheet, Text, View} from "react-native";
import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Notifications from "./src/pages/Notifications";
import Profile from "./src/pages/Profile";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animation: "fade",
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
const styles = StyleSheet.create({});
