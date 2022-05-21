import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, { 
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../screens/stores/tab/tabActions";
import {
    Home,
    Notification,
} from "../screens";
import CartTab from "../screens/Cart/CartTab";
import {
    Header
} from "../components"
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData,
} from "../constants";

const TabButton = ({label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle}) => {
    return (
        <TouchableWithoutFeedback
        onPress={onPress}
        >
            <Animated.View
                style={[
                {
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                outerContainerStyle
            ]}
            >
                <Animated.View
                    style={[
                    {
                        flexDirection: 'row',
                        width: '80%',
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25
                    },
                    innerContainerStyle
                ]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.white :
                            COLORS.gray
                        }}
                    />
                        {isFocused &&
                            <Text
                                numberOfLines={1}
                                style={{
                                    marginLeft: SIZES.base,
                                    colors: COLORS.gray,
                                    ...FONTS.h3
                                }}
                            >
                                {label}   
                             </Text>
                        }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}
const MainLayout = ({ drawerAnimationStyle, navigation,     
selectedTab, setSelectedTab }) => {
    const [progress, setProgress] = useState(new Animated.Value(0))

const flatListRef = useRef()
const tabRef = useRef()
const homeTabFlex = useSharedValue(1)
const homeTabColor = useSharedValue(COLORS.white)
const accountTabFlex = useSharedValue(1)
const accountTabColor = useSharedValue(COLORS.white)
const notificationTabFlex = useSharedValue(1)
const notificationTabColor = useSharedValue(COLORS.white)
const [selectedMenuId, setSelectedMenuId] = useState(0);
const [myList, setMyList] = useState([]);
const [isOnline, setIsOnline] = useState(false);





function handleChangeHomeMenu(menuId) {
    //Find the menu based on the menuTypeId
    tabRef.current.scrollToIndex({ index: menuId, animated: true });

    let selectedMenu = constants.orders.filter(a => a.status == menuId)
    setMyList(selectedMenu)
    setSelectedMenuId(menuId)
}








//Reanimated Animated Style
const scale = Animated.interpolateNode(progress,  {
    inputRange:     [0, 1],
      outputRange: [1, 0.8],
    
})

const borderRadius = Animated.interpolateNode(progress,  {
    inputRange: [0, 1],
    outputRange: [0, 26]
})


const animatedStyle = {borderRadius, transform: [{scale}] }


const homeFlexStyle = useAnimatedStyle(() => {
    return {
        flex: homeTabFlex.value
    }
})

const homeColorStyle = useAnimatedStyle(() => {
    return {
        backgroundColor: homeTabColor.value
    }
})

const accountFlexStyle = useAnimatedStyle(() => {
    return {
        flex: accountTabFlex.value
    }
})

const accountColorStyle = useAnimatedStyle(() => {
    return {
        backgroundColor: accountTabColor.value
    }
})


const notificationFlexStyle = useAnimatedStyle(() => {
    return {
        flex: notificationTabFlex.value
    }
})

const notificationColorStyle = useAnimatedStyle(() => {
    return {
        backgroundColor: notificationTabColor.value
    }
})

    


useEffect(() => {
    setSelectedTab(constants.screens.home)
}, [])


useEffect(() => {
    if(selectedTab == constants.screens.home){
        homeTabFlex.value = withTiming(4, { duration: 500, useNativeDriver: false})
        homeTabColor.value = withTiming(COLORS.primary, { duration: 10, useNativeDriver: false })
    } else {
        homeTabFlex.value = withTiming(1, { duration: 500, useNativeDriver: false })
        homeTabColor.value = withTiming(COLORS.white, { duration: 10, useNativeDriver: false })
    }


    if(selectedTab == constants.screens.account){
        accountTabFlex.value = withTiming(4, { duration: 500, useNativeDriver: false })
        accountTabColor.value = withTiming(COLORS.primary, { duration: 10, useNativeDriver: false })
    } else {
        accountTabFlex.value = withTiming(1, { duration: 500, useNativeDriver: false})
        accountTabColor.value = withTiming(COLORS.white, { duration: 10, useNativeDriver: false })
    }


    if(selectedTab == constants.screens.notification){
        notificationTabFlex.value = withTiming(4, { duration: 500, useNativeDriver: false })
        notificationTabColor.value = withTiming(COLORS.primary, { duration: 10, useNativeDriver: false })
    } else {
        notificationTabFlex.value = withTiming(1, { duration: 500, useNativeDriver: false })
        notificationTabColor.value = withTiming(COLORS.white, { duration: 10, useNativeDriver: false })
    }





}, [selectedTab])

    console.log(selectedTab)

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
         
            <View
                style={{
                    flex: 1,
                }}
            >
                 {selectedTab == constants.screens.
                                home && <Home />}
                 {selectedTab == constants.screens.
                                notification && <Notification />}
                 {selectedTab == constants.screens.
                                notification && <Notification />}
            </View>
            {/* Footer */}
            <View
            style={{
                height: 80,
                justifyContent: 'center'                
            }}
            >
            {/* Shadow */}
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 4}}
                colors={[
                    COLORS.transparent,
                    COLORS.gray
                ]}
                style={{
                    position: 'absolute',
                    top: -50,
                    left: 0,
                    right: 0,
                    height: 100,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />
            {/* Tabs */}
                <View 
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        paddingBottom: 5,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.white
                    }}
                >
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
                    />
                       <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        onPress={() => setSelectedTab(constants.screens.notification)}
                    />
                            <TabButton
                        label={constants.screens.account}
                        icon={icons.account4}
                        isFocused={selectedTab == constants.screens.account}
                        outerContainerStyle={accountFlexStyle}
                        innerContainerStyle={accountColorStyle}
                        onPress={() => {
                            setSelectedTab(constants.screens.account)
                        }}
                    />
                </View>
            </View>

        </Animated.View>
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch
        (setSelectedTab(selectedTab)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(MainLayout)