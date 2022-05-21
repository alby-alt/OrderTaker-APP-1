import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from "./navigation/CustomDrawer";

import SplashScreen from 'react-native-splash-screen'

// import { Home } from "./screens/Home";

import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    Home,
    CartTab,
    Form
} from './screens'

// import CartTab from "./screens/Cart/CartTab.js";
import MainLayout from "./screens/MainLayout";

// import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; 
import rootReducer from "./screens/stores/rootReducer";
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
const  store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    
    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
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
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />                
                <Stack.Screen 
                    name="CartTab"
                    component={CartTab}
                />
                {/* <Stack.Screen
                    name="MainLayout"
                    component={CustomDrawer}
                /> */}
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />
                <Stack.Screen 
                    name="SignUp"
                    component={SignUp}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}



export default App;