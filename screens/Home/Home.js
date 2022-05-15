import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StatusBar
    
} from 'react-native';
import FilterModal from "./FilterModal";
import {
    HorizontalFoodCard,
    VerticalFoodCard
} from "../../components";

import Ionicon from 'react-native-vector-icons/Ionicons';

import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { SafeAreaView } from 'react-native-safe-area-context';

const Section = ({title, onPress, children }) => {
    return (
        <View>
            <StatusBar 
                animated={true}
                backgroundColor="#61dafb"
            />
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20,
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h1}}>
                    {title}
                </Text>

            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={{color: COLORS.primary, ...FONTS.body3}}>
                    Show All
                </Text>
            </TouchableOpacity>
        </View>
            
        {/* content */}
        {children}
        </View>
    )
}

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [popular, setPopular] = React.useState([])
    const [ recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState([])
    
    const [showFilterModal, setShowFilterModal] = React.useState(false)

    React.useEffect(() => {
        //handleChangeCategory(selectedCategoryId, selectedMenuType )
    }, [])

    // Handler

    function handleChangeCategory(categoryId, menuTypeId){
        // Retreive the popular menu
        // let selectedPopular= dummyData.menu.find(a => a.name == "Popular")
        
        //Retreive the recommended menu
        // let selectedRecommend =dummyData.menu.find(a => a.name == "Recommended")
        
        // Find the menu based on the menuTypeId
        // let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        // Set the Popular menu based on the categoryId
        // setPopular(selectedPopular?.list.filter(a => a.categories.includes))
        
        // Set the recommended menu based on the categoryId
        // setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        // Set the menu based on the categoryId
        // setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }

    // Render

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


    function renderMenuType(){
        return (
            <FlatList
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 20,
                    marginBottom: 20
                }}
                renderItem={({item, index}) => {
                <TouchableOpacity
                    style={{
                        marginLeft: SIZES.padding,
                        marginRight: index == dummyData.menu.
                        length - 1 ? SIZES.padding : 0
                    
                    }}
                    
                    onPress={() => {
                         setSelectedMenuType(item.id)
                         handleChangeCategory
                         (selectedCategoryId, item.id)
                     }}
                     
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id 
                                ? COLORS.primary : COLORS.black, ...FONTS.h3
                            }}
                        >

                            {item.name}
                        </Text>
                    </TouchableOpacity>
                }}
            />
        )
    }

    // function renderRecommendedSection() {
    //     return (
    //         <Section
    //         title="Recommended"
    //         onPress= {() => console.log("Show All Recommended")}
    //         >
    //             <FlatList
    //                 data={recommends}
    //                 keyExtractor={item => `${item.id}`}
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //                 renderItem={({item, index}) => (
    //                     <HorizontalFoodCard
    //                         containerStyle={{
    //                             height: 180,
    //                             height: SIZES.width * 0.85,
    //                             marginLeft: index == 0 ? SIZES.padding: 18,
    //                             marginRight: index == recommends.length - 1 ? SIZES.padding: 0,
    //                             paddingRight: SIZES.radius,
    //                             alignItems: 'center'
    //                         }}
    //                         imageStyle={{
    //                             marginTop: 35,
    //                             height: 150,
    //                             width: 150
    //                         }}
    //                         item= {item}
    //                         onPress= {() => console.log("HorizontalFoodCard")}
    //                     />
    //                 )}
    //             />
    //         </Section>
    //     )
    // }

    // function renderPopularSection() {
    //     return (
    //         <Section
    //         title="Popular Near You"
    //         onPress={() => console.log("Show all popular items")}
    //         >
    //             <FlatList 
    //                 data={popular}
    //                 keyExtractor={item => `${item.id}`}
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //                 renderItem={({ item, index}) => (
    //                     <VerticalFoodCard
    //                         containerStyle={{
    //                             marginLeft: index == 0 ? SIZES.padding : 18,
    //                             marginRight: index == popular.length - 1 ? SIZES.padding : 0
    //                         }}
    //                         item={item}
    //                         onPress={() => console.log("Vertical Food Card")}
    //                     />
    //                 )}
    //             />
                
    //         </Section>
    //     )
    // }

    function renderFoodCategories() {
        return (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    
                }}
            >
                <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 35,
                            display: 'flex',
                            width: '40%',
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary 
                        }}
                        onPress={() => {
                            setSelectedCategoryId(1)
                        }}
                    >
                        {/* <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 30
                            }}
                        /> */}
                        <Text
                        style={{
                            alignSelf: 'center',
                            color:  COLORS.white,
                            ...FONTS.h3
                            
                        }}
                        >
                            Pending
                        </Text>
                    </TouchableOpacity>
                   
                
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 35,
                            width: '40%',
                            display: 'flex',
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightOrange 
                        }}
                        onPress={() => {
                            setSelectedCategoryId(1)
                        }}
                    >
                        {/* <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 30
                            }}
                        /> */}
                        <Text
                        style={{
                            alignSelf: 'center',
                            color:  COLORS.white,
                            ...FONTS.h3
                            
                        }}
                        >
                            Completed
                        </Text>
                    </TouchableOpacity>
            </View>
                    

        )

    }

    function renderDeliveryTo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding 
                }}            
            >
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                </Text>
                <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.base,
                    alignItems: 'center'
                }}
                >
                    <Text style={{ ...FONTS.h3}}>
                        {dummyData?.myProfile?.address}
                    </Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20
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
            }}
        >
            {/*Search*/ }
            {renderSearch()}
            {showFilterModal &&
            <FilterModal
                 isVisible={showFilterModal}
                 onClose={() => setShowFilterModal(false)}
            
                />
            }
            {/* List */ }
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                       

                        {/* Food Categories */}
                        {renderFoodCategories()}

                        {/* PopularSection */}
                        {/* {renderPopularSection()} */}

                        {/* RecommendedSection */}
                        {/* {renderRecommendedSection()} */}
                        
                        {/* Menu Type */}
                        {renderMenuType()}
                        
                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log
                            ("HorizontalFoodCard")}
                            
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 200 }} />
                }
            />
        </View>
    )
}

export default Home;