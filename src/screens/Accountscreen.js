import React from 'react';
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../conponents/Header"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AccountScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={() => navigation.openDrawer()}
                    style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
                />
                <Text style={{ textAlign: "center" }}>
                    This is Account page.
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AccountScreen;