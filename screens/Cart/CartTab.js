import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    FONTS,
    COLORS,
    SIZES,
    icons,

} from "../../constants";

import {
    Header,
    IconButton

} from "../../components";
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';

const CartTab = ({navigation}) => {

    function renderHeader() {
        return (
            <Header
            title="My Cart"
            titleStyle={{
                ...FONTS.body3,
                fontWeight: '700'
            }}
            containerStyle={{
                height: 40,
                marginHorizontal: SIZES.padding,
                marginTop: 20
            }}            
            leftComponent={
                <IconButton
                    icon={icons.back}
                    containerStyle={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.gray2
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                    onPress={() => navigation.goBack()}
                />
            }
            rightComponent={
                
                <IconButton
                icon={icons.cross}
                containerStyle={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.gray2
                }}
                iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
                onPress={console.log("Delete All")}
            />
                
            }
            
        />
        
        )
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center'
            }}
        >
            {renderHeader()}
        </View>
    )
}

export default CartTab;