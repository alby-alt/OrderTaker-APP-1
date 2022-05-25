import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, StyleSheet, Animated } from 'react-native';
import { SIZES, FONTS, COLORS, constants, icons, dummyData } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { CartQuantityButton, StepperInput, IconButton, FooterTotal, Header, TextButton, iconStyle} from "../../components";

import { FilterModal } from "../";

import { SwipeListView } from 'react-native-swipe-list-view'; 
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { ScrollView } from 'react-native-gesture-handler';


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
                            onPress={() => navigation.replace("SignIn")}
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
            <FooterTotal 
            subTotal={37.97}
            shippingFee={0.00}
            total={37.97}
            // onPress={() => navigation.navigate("CartTab")}
            />
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