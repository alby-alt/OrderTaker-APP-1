import React from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import {
    COLORS, FONTS, SIZES,
} from "../constants";

const LineDivider = ({lineStyle}) => {

    function renderText() {
        return (
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        ...FONTS.h1,
                    }}
                >asdAWdas</Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView
            style={{
                height: 2,
                width: "100%",
                backgroundColor: COLORS.primary,
                ...lineStyle,
                // paddingBottom: 20,
                marginBottom: 20,
                borderRadius: 100
            }}
        > 
        {renderText()}
        </SafeAreaView>
        
    )
}

export default LineDivider;