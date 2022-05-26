import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, StyleSheet, Animated } from 'react-native';
import { SIZES, FONTS, COLORS, constants, icons, dummyData } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { CartQuantityButton, StepperInput, IconButton, FooterTotal, Header, TextButton, iconStyle, LineDivider} from "../../components";

import { FilterModal } from "../";

import { SwipeListView } from 'react-native-swipe-list-view'; 
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { ScrollView } from 'react-native-gesture-handler';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


// const Section = ({title, onPress, children }) => {
//     return (
//         <View>
//             {/* Header */}
//             <View
//                 style={{
//                     flexDirection: 'row',
//                     marginHorizontal: SIZES.padding,
//                     marginTop: 30,
//                     marginBottom: 20
//                 }}
//             >
//                 <Text style={{ flex: 1, ...FONTS.h3}}>
//                     {title}
//                 </Text>

//             <TouchableOpacity
//                 onPress={onPress}
//             >
//                 <Text style={{color: COLORS.primary, ...FONTS.body3}}>
//                     Show All
//                 </Text>
//             </TouchableOpacity>
//         </View>
            
//         {/* content */}
//         {/* {children} */}
//         </View>
//     )
// }

const Menu = ({navigation, drawerAnimationStyle, }) => {

    const [showFilterModal, setShowFilterModal] = React.useState(false)
    const [qty, setQty] = React.useState(1)

    // handler section
    function updateQuantityHander(newQty, id) {
        const newMyCartList = myCartList.map(cl => (
            cl.id  === id ? { ...cl, qty: newQty} : cl
        ))
        setMyCartList(newMyCartList)
    }

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

    function renderHeader() {
        return (
            <Animated.View
            style={{
                // flex: 1,
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 10,
                    alignItem: 'center'
                }}
            title="Menu"
                leftComponent={
                    <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        boderColor: COLORS.lightGray2,
                        borderRadius: SIZES.radius,
                    }}
                    onPress={() => navigation.openDrawer()}
                    
                >
                    <Image
                            source={icons.menu} 

                        />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            marginTop: -5                            
                        }}
                    >
                        
                        <CartQuantityButton
                        quantity={3}
                        onPress={() => navigation.navigate("CartTab")}
                        />
                        
                    </TouchableOpacity>
                }
            
            />
            </Animated.View>
        )
    }

    function renderSearch() {
        return (
            <SafeAreaView
                    style={{
                        // flex: 1,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        // marginVertical: SIZES.dyes,
                        // marginRight: 15
                    }}
                >
                    
                
            <View
                style={{
                    flexDirection: 'row',
                    height: 45,
                    alignItems: 'center',
                    width: '75%',
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
                    placeholder="Search your Cravings here"
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
            <TextButton 
                            label="Go"
                            buttonContainerStyle={{
                                height: 40,
                                width: 40,
                                borderRadius: SIZES.radius,
                                marginTop: 7,
                                marginHorizontal: -15,
                                backgroundColor: COLORS.green
                            }}
                            onPress={() => navigation.navigate("CartTab")}
                        />
            </SafeAreaView>
            
        )
    }

    function renderCartList() {
        return (
            <SwipeListView 
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    // marginTop:SIZES.radius,
                    // paddingHorizontal: SIZES.padding,
                    // paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image */}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image 
                                source={data.item.image}
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10
                                }}
                            />
                        </View>
                        {/* Food Info  */}
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text style={{ ...FONTS.body3}}>{data.item.name}</Text>
                            <Text style={{color: COLORS.primary, ...FONTS.h3}}>${data.item.price}</Text>
                        </View>
                        {/* Quantity */}
                        <StepperInput 
                            containerStlye={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => updateQuantityHander(data.item.qty + 1, data.item.id)}
                            onMinus={() =>{
                                if (data.item.qty > 1) {
                                    updateQuantityHander(data.item.qty -1, data.item.id)
                                }
                            }}
                        />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton 
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.eye}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => removeMyCartHandler(data.item.id)}
                    />
                )}
            />
        )
    }


    function renderFooter() {
        return (
            <View
                style={{
                    // flex: 1,
                    flexDirection: 'row',
                    height: 80,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    // marginTop: -5
                }}
            >
                {/* Stepper Input */}
                    <StepperInput 
                        value={qty}
                        onAdd={() => setQty(qty + 1)}
                        onMinus={() => {
                            if (qty > 1) {
                                setQty(qty - 1)
                            }
                        }}
                    />
                {/* Text Button */}
                <TextButton 
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 50,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.transparentPrimary
                    }}
                    label="Add to cart"
                    label2="₱420"
                />
            </View>
        )
    }

    function renderStepHeader() {
        return (
            <View
                style={{
                    // flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 20,
                    // alignItems: 'flex-start',
                    // justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    // marginTop: -15,
                    marginBottom: 15,
                    marginRight: -15,
                    marginLeft: -7,
                                        
                }}
            >
                <TouchableOpacity
                    style={{
                        // display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        // alignItems: 'baseline',
                        justifyContent: 'flex-end',
                        marginVertical: -15,
                        marginHorizontal: -5
                    }}
                >
                <Image 
                        source={icons.cross}
                        style={{
                            // flexDirection: 'row-reverse',
                            height: 20,
                            width: 20,
                            backgroundColor: COLORS.lightGray1,
                            borderRadius: SIZES.radius,
                            // flex: 1
                        }}
                    />
                </TouchableOpacity>
                    
            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.white
            }}
        >
            
            {/* Header */}
            {renderHeader()}
        
            {/* Search Input */}
          
            {renderSearch()}
            {showFilterModal &&
            <FilterModal
                 isVisible={showFilterModal}
                 onClose={() => setShowFilterModal(false)}
                />
            }
        <ScrollView
             contentContainerStyle={{
                // flexGrow: 1,
                marginTop: 10,
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.radius
            }}
        >
            {/* Cart List */}
            {/* {renderCartList()} */}
        </ScrollView>
            {/* Footer */}
            <LineDivider/>
            {renderStepHeader()}
            {renderFooter()}
            {/* <FooterTotal 
            // onPress={() => navigation.navigate("CartTab")}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})
export default Menu;