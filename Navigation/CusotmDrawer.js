import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import {connect} from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { MainLayout } from "../screens";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants";