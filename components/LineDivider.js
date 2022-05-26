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
        <View
            style={{
                height: 1.5,
                width: "100%",
                backgroundColor: COLORS.transparentPrimary,
                ...lineStyle,
                // paddingBottom: 20,
                marginBottom: 20,
                borderRadius: 50
            }}
        > 
        {/* {renderText()} */}
        </View>
        
    )
}

export default LineDivider;