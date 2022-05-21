import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SIZES, FONTS, COLORS, constants } from '../../constants';
import { HorizontalFoodCard } from '../../components';
import { HomeContent } from '../../screens';


export default function Home({navigation}) {
    const tabRef = useRef()
    const [selectedMenuId, setSelectedMenuId] = useState(0);
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
                {/* {renderOrderCards()} */}
            </HomeContent>
            {/* {renderOrderCards()} */}

        </View>
    )
}
