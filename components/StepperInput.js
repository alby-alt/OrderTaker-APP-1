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
                marginTop: -50,
                marginBottom: 20,
            // textAlign: 'center',
            flexDirection: 'column',
            ...FONTS.h1,
            // alignItems: 'center',
            // justifyContent: 'flex-start'
            }}
        >
        <Text
            style={{
                marginBottom: 35,
                ...FONTS.h1
            }}
        >
            asdsada
        </Text>
            
        
        <View
            style={{
                flexDirection: 'row',
                height: 30,
                width: 125,
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
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray
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
                        ...FONTS.h2
                    }}
                >
                    {value}
                </Text>
            </View>
            <IconButton 
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray
                }}
                onPress={onAdd}
            />
        </View>
        </SafeAreaView>
    )
}

export default StepperInput;