import React from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';

import { IconButton } from "../components";
import { FONTS, COLORS, icons, SIZES } from "../constants";

const StepperInput = ({
    containerStlye,
    value = 1,
    onAdd,
    onMinus
}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                // marginTop: -10,
                marginBottom: 20,
            // textAlign: 'center',
            flexDirection: 'row',
            ...FONTS.h1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 50,
            backgroundColor: COLORS.lightGray2
            }}
        >
        {/* <Text
            style={{
                marginBottom: 35,
                ...FONTS.h3,
                width: "100%",
            }}
        >
            Adobong Manok
        </Text> */}
            
        
        <View
            style={{
                flexDirection: 'row',
                height: 30,
                width: 130,
                // marginRight: 20,
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                ...containerStlye
            }}
        >
            <IconButton 
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.minus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.transparentPrimary : COLORS.gray
                }}
                onPress={onMinus}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2,
                        marginRight: 10,
                        
                    }}
                >
                    {value}
                </Text>
            </View>
            <IconButton 
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.orange,
                    borderRadius: SIZES.radius
                }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.white : COLORS.white2
                }}
                onPress={onAdd}
            />
        </View>
        </SafeAreaView>
    )
}

export default StepperInput;