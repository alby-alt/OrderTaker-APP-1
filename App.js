import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from './navigation/CustomDrawer';

import SplashScreen from 'react-native-splash-screen'

import Screen1 from './screens/drawer/Screen1';
import Screen2 from './screens/drawer/Screen2';
import Screen3 from './screens/drawer/Screen3';

import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp
} from './screens'
import MainLayout from "./screens/MainLayout";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
  );
}
const App = () => {
    
    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="MainLayout"
                    component={MyDrawer}
                />

                {/* <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                /> */}

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App