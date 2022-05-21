import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
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
import Profile from "../screens/Profile/Profile";
import {
    Home,
    Menu,
    HomeContent
} from "../screens";
import CartTab from "../screens/Cart/CartTab";
import {
    Header,
    HorizontalFoodCard
} from "../components"
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData,
} from "../constants";
import MyAccount from './MyAccount';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

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
    const [showFilterModal, setShowFilterModal] = React.useState(false)

const flatListRef = useRef()
const tabRef = useRef()
const homeTabFlex = useSharedValue(1)
const homeTabColor = useSharedValue(COLORS.white)
const accountTabFlex = useSharedValue(1)
const accountTabColor = useSharedValue(COLORS.white)
const menuTabFlex = useSharedValue(1)
const menuTabColor = useSharedValue(COLORS.white)
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


const menuFlexStyle = useAnimatedStyle(() => {
    return {
        flex: menuTabFlex.value
    }
})

const menuColorStyle = useAnimatedStyle(() => {
    return {
        backgroundColor: menuTabColor.value
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


    if(selectedTab == constants.screens.menu){
        menuTabFlex.value = withTiming(4, { duration: 500, useNativeDriver: false })
        menuTabColor.value = withTiming(COLORS.primary, { duration: 10, useNativeDriver: false })
    } else {
        menuTabFlex.value = withTiming(1, { duration: 500, useNativeDriver: false })
        menuTabColor.value = withTiming(COLORS.white, { duration: 10, useNativeDriver: false })
    }





}, [selectedTab])

function renderSearch() {
    return (
        <SafeAreaView
                style={{
                    // flex: 1,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    marginVertical: SIZES.dyes,
                    marginRight: 15
                }}
            >
                
            
        <View
            style={{
                flexDirection: 'row',
                height: 45,
                alignItems: 'center',
                width: '80%',
                marginHorizontal: SIZES.padding,
                marginVertical: 4,
                paddingHorizontal: SIZES.radius,
                borederRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius
            }}    
        >
            {/* Icon */}                
            <Image
                source={icons.search}
                style={{
                    height: 20,
                    width: 15,
                    tintColor: COLORS.black
                }}
            />
            {/* Text Input */}
            <TextInput
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    ...FONTS.body4
                }}
                placeholder="Search Order ID number"
            />
            {/* Filter Button */}
            <TouchableOpacity
                onPress={() => setShowFilterModal(true)}
            >
                <Image
                    source={icons.filter}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                /> 
            
            </TouchableOpacity>    
        </View>
        <TouchableOpacity>
        <Ionicon name="add-circle-outline" size={45} color={COLORS.darkGray}/>
        </TouchableOpacity>
        </SafeAreaView>
        
    )
}


function renderHeader() {
    return(
        <Header
         title={selectedTab.toUpperCase()}
        titleStyle={{
            ...FONTS.h3,
            fontWeight: '700',
            textAlign: 'center'
        }}
        containerStyle={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginHorizontal: SIZES.padding,
            marginTop: 20
        }}            
        leftComponent={
            <View
            style={{
                width: '25%'
            }}
        />
        }
        rightComponent={
            <View style={{
                width: '25%',
                paddingLeft: SIZES.padding
                }}>
                {/* <HomeSwitch
                    value={isOnline}
                    onPress={() => setIsOnline(!isOnline)}
                /> */}
            </View>
        }
    />
    )
}

function renderHomeMenuList() {
    return (
        <FlatList
            horizontal
            ref={tabRef}
            contentContainerStyle={{
                // justifyContent: 'center',
                // paddingTop: 20,
                paddingBottom: SIZES.padding,
                paddingTop: SIZES.base

            }}
            style={{
                maxHeight: 70
            }}
            scr
            data={constants.homeMenu}
   
            keyExtractor={item => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.padding,
                        marginRight: index == constants.homeMenu.length -1 ? SIZES.padding : 0,
                        backgroundColor: selectedMenuId == item.id ? COLORS.primary : COLORS.lightGray2,
                        borderRadius: SIZES.padding,
                        paddingLeft: SIZES.radius,
                        paddingRight: SIZES.radius,
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        handleChangeHomeMenu(item.id)
                    }}
                >
                    <Text
                        style={{
                            color: selectedMenuId == item.id ? COLORS.white : COLORS.black, 
                            ...FONTS.h3
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    )
}  


function renderOrderCards() {
    return (
        <FlatList
        data={myList}
        contentContainerStyle={{
            // marginTop: SIZES.padding
        }}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <HorizontalFoodCard 
                        containerStyle={{
                            // height: 275,
                            marginHorizontal: SIZES.padding,
                            padding: SIZES.base,
                            marginBottom: SIZES.radius
                        }}
                      
                        item={item}
                        onPress={(e) => navigation.navigate(e, { orderId: item.id })}
                    />
        )}
        ListFooterComponent={
            <View  style={{height: 10 }}/>
        }
    />
    )
}



function renderMainContent() {
    return (
        <View
        style={{
            flex: 1            
        }}
    >
        {/* Home Menu */}
        {renderHomeMenuList()}

        {/* Order Card List */}
        <HomeContent 
           setCurrentIndex={(e) => {
                handleChangeHomeMenu(e)
            }
            }
            currentIndex={selectedMenuId}
        >
            {renderOrderCards()}
        </HomeContent>
        {/* {renderOrderCards()} */}

    </View>
    )
}

    console.log(selectedTab)
    return (
        <Animated.View
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
            ...animatedStyle
        }}
    >

        {/* Header */}
        {/* {renderHeader()} */}
        {/* {renderSearch()} */}
        {/* Content */}
            {/* <Home/> */}
        {/* {renderMainContent()} */}
        <View
                style={{
                    flex: 1,
                }}
            >
                 {selectedTab == constants.screens.
                                home && <Home />}
                 {selectedTab == constants.screens.
                                menu && <Menu />}
                 {selectedTab == constants.screens.account && <MyAccount />}
            </View>

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
                        label={constants.screens.menu}
                        icon={icons.menu}
                        isFocused={selectedTab == constants.screens.menu}
                        outerContainerStyle={menuFlexStyle}
                        innerContainerStyle={menuColorStyle}
                        onPress={() => setSelectedTab(constants.screens.menu)}
                    />
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.coupon}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
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