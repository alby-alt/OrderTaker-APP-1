import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { constants, images, FONTS, SIZES, COLORS  } from '../../constants'
import { HorizontalFoodCard } from '../../components';


const HomeContent = ({children, currentIndex, setCurrentIndex}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = React.useRef()

    const [selectedMenuId, setSelectedMenuId] = useState(0);


    
    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        console.log(changed)
        console.log(viewableItems)

        if(viewableItems.length == 1 && viewableItems[0].isViewable){
            setSelectedMenuId(viewableItems[0].index)
            setCurrentIndex(viewableItems[0].index)
        }
    })



    useEffect(() => {
        // console.log(currentIndex)
        // console.log(currentIndex == selectedMenuId)
        
        //     console.log(currentIndex)
        //     console.log(selectedMenuId)

        console.log(selectedMenuId)
        console.log(currentIndex)
            flatListRef.current.scrollToIndex({ index: currentIndex, animated: true});
            // console.log(selectedMenuId)
            
    }, [currentIndex])


     

    return (
        <Animated.FlatList 
        ref={flatListRef}
        
        horizontal
        pagingEnabled
        data={constants.homeMenu}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={() => {

            
            Animated.event(
                [
                    { nativeEvent: { contentOffset: { x: scrollX } }   }
                ],
                { useNativeDriver: false }
            )
            
            // console.log(flatListRef.current)
            }
         }
        keyExtractor={(item) => `${item.id}`} 
        // ListHeaderComponent={
        //     <View>
        //         {/* Menu List */}
        //         {renderHomeMenuList()}

        //     </View>
        // }
        renderItem={({item, index}) => {
            return (
                <View
                style={{
                    width: SIZES.width
                }}
                >
               {children}
                </View>

            )
        }}
/>
    )
}

export default HomeContent
