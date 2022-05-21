import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import { SIZES, FONTS, COLORS, constants, icons } from '../../constants';
import { HorizontalFoodCard } from '../../components';
import { HomeContent } from '../../screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
    const tabRef = useRef()
    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const [showFilterModal, setShowFilterModal] = React.useState(false)
    const [myList, setMyList] = useState([]);


    function handleChangeHomeMenu(menuId) {
        //Find the menu based on the menuTypeId
        tabRef.current.scrollToIndex({ index: menuId, animated: true });

        let selectedMenu = constants.orders.filter(a => a.status == menuId)
        setMyList(selectedMenu)
        setSelectedMenuId(menuId)
    }


    useEffect(() => {
        handleChangeHomeMenu(selectedMenuId)
    }, [])

// const styles = StyleSheet.create({
//     top: {
//         flex: 1,
//         backgroundColor: "pink",
//         borderWidth: 5,
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//         // flexGrow: "100%"
//       },
// })
// function renderDetails() {
//     return (
//         <View
//             style={{
//                 marginTop: SIZES.radius,
//                 marginBottom: SIZES.padding,
//                 paddingHorizontal: SIZES.padding
//             }}
//         >
//             {/* Food Card */}
//             <View
//                 style={{
//                     height: 190,
//                     borderRadius: 15,
//                     backgroundColor: COLORS.lightGray2
//                 }}
//             >
//                 {/* Calories & Favourite */}
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         marginTop: SIZES.base,
//                         paddingHorizontal: SIZES.radius
//                     }}
//                 >
//                     {/* Calories */}
// //                     <View
// //                         style={{
// //                             flexDirection: 'row'
// //                         }}
// //                     >
//                         <Image 
//                             source={icons.calories}
//                             style={{
//                                 width: 30,
//                                 height: 30
//                             }}
//                         />


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
                            onPress={(e) => navigation.navigate(e)}
                        />
            )}
            ListFooterComponent={
                <View  style={{height: 10 }}/>
            }
        />
        )
    }


    return (
        <View
            style={{
                flex: 1            
            }}
        >
            {/* Search Filter */}
            {renderSearch()}
         
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

        </View>
    )
}
