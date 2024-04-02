import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, VStack } from "@gluestack-ui/themed";

import AccountScreen from "../screens/Accountscreen";
import BookScreen from "../screens/BookScreen";
import DetailScreen from "../screens/DetailScreen";
import SettingScreen from "../screens/SettingScreen";

import active_bookmark from "../../src/img/icon_bookmark_actived.png"
import inactive_bookmark from "../../src/img/icon_bookmark.png"

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, Pressable, Image } from "react-native";

import MyTheme from "../theme";
import Header from "../conponents/Header";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <MyDrawer />
        </NavigationContainer>
    )
}

const DrawerAccountConcent = (props) => {
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{ paddingTop: 0 }}
        >
            <VStack pl={20} pt={130}>
                <MaterialCommunityIcons name="account-circle" size={50} />
                <Text style={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}>Wally</Text>
            </VStack>
            <Divider my="$2" />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );


}

const MyDrawer = () => {
    const { colors } = useTheme();
    return (
        <Drawer.Navigator
            initialRouteName="Homestack"
            screenOptions={{
                drawerActiveBackgroundColor: colors.primary100,
                drawerActiveTintColor: colors.primary700,
                drawerInactiveTintColor: colors.light500,
                drawerStyle: { width: 250 },
                drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
            }}
            drawerContent={props => <DrawerAccountConcent{...props} />}
        >
            <Drawer.Screen
                name="HomeStack"
                component={MyTabs}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({ color }) => {
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    },
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    drawerLabel: "Account",
                    drawerIcon: ({ color }) => {
                        <MaterialCommunityIcons name="account-circle" color={color} size={24} />
                    },
                }}
            />
            <Drawer.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    drawerLabel: "Setting",
                    drawerIcon: ({ color }) => {
                        <MaterialCommunityIcons name="cog" color={color} size={24} />
                    },
                }}
            />
        </Drawer.Navigator>
    );
}


const MyTabs = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Homestack"
            screenOptions={{
                tabBarActiveTintColor: colors.light400,
                tabBarInactiveTintColor: colors.primary700
            }}
        >
            <Tab.Screen
                name="Homestack"
                component={Homestack}
                options={{
                    headerShown: false,
                    title: "Home",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 80
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                    headerShown: false,
                    title: "Wishlist",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 50
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="My books"
                component={MyBooks}
                options={{
                    headerShown: false,
                    title: "My books",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 50
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Wishlist = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar />
                <Header />
                <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={() => navigation.openDrawer()}
                    style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
                />
                <Text style={{ textAlign: "center", lineHeight: 100 }}>
                    This is Wishlist page.
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const MyBooks = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <StatusBar />
                <Header />
                <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={() => navigation.openDrawer()}
                    style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
                />
                <Text style={{ textAlign: "center", lineHeight: 100 }}>
                    This is MyBooks page.
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const Homestack = ({ navigation }) => {
    const [PressState, setPressState] = useState(false);
    let mark = PressState ? active_bookmark : inactive_bookmark;
    return (
        <Stack.Navigator
            screenOptions={{
            headerShadowVisible: false
          }}
        >
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    title: "",
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={24}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name={'magnify'}
                            size={24}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={
                    ({ navigation }) => (
                        {
                            title: "",
                            headerLeft: () => (
                                <Pressable onPress={() => navigation.goBack()}>
                                    <MaterialCommunityIcons
                                        name={'chevron-left'}
                                        size={24}
                                    />
                                </Pressable>
                            ),
                            headerRight: () => (
                                <Pressable onPress={() => setPressState(!PressState)}>
                                    <Image source={mark} />
                                </Pressable>
                            )
                        }

                    )
                }
            />
        </Stack.Navigator>
    );
}


export default Navigation