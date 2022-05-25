import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from 'react-native-splash-screen'

// import { Home } from "./screens/Home";

import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    Home,
    MerchantDetails,
    TypesAndPricing,
    ServicesProvided,
    TermsAndCondition,
    Success,
    MainLayout,
    VerifyOrder,
    Notification,
    Menu,
    TrackDriver,
    OrderDetails,
    MyAccount
} from './screens'

import CartTab from "./screens/Cart/CartTab.js";

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
                    name="SignUp"
                    component={SignUp}
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
         {/* Setup */}
         <Stack.Screen
                    name="MerchantDetails"
                    component={MerchantDetails}
                />
                <Stack.Screen
                    name="ServicesProvided"
                    component={ServicesProvided}
                />
                <Stack.Screen
                    name="TypesAndPricing"
                    component={TypesAndPricing}
                />
                  <Stack.Screen
                    name="Success"
                    component={Success}
                />
                <Stack.Screen
                    name="TermsAndCondition"
                    component={TermsAndCondition}
                />
                 {/* <Stack.Screen
                    name="Home"
                    component={MainLayout}
                /> */}
                    <Stack.Screen
                    name="OrderDetails"
                    component={OrderDetails}
                    />
                     <Stack.Screen
                    name="VerifyOrder"
                    component={VerifyOrder}
                    />
                     <Stack.Screen
                    name="Menu"
                    component={Menu}
                    />
                     <Stack.Screen
                    name="MyAccount"
                    component={MyAccount}
                    />
                    <Stack.Screen
                    name="TrackDriver"
                    component={TrackDriver}
                    />            
                
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}



export default App;