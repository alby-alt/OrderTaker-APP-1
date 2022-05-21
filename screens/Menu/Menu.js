import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import { SIZES, FONTS, COLORS, constants, icons } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { FilterModal } from "../";

const Menu = () => {

    const [showFilterModal, setShowFilterModal] = React.useState(false)

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
            <Ionicon name="cart-outline" size={40} color={COLORS.darkGray}/>
            </TouchableOpacity>
            </SafeAreaView>
            
        )
    }

    return (
        <View
            style={{
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center'
            }}
        >
            
            {renderSearch()}
            {showFilterModal &&
            <FilterModal
                 isVisible={showFilterModal}
                 onClose={() => setShowFilterModal(false)}
            
                />
            }
        </View>
    )
}

export default Menu;