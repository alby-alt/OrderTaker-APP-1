import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { FONTS } from "../constants";


const SubHeader = ({
    containerStyle,
    title,
    titleStyle,
}) => {
    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <Text style={{...FONTS.h3, ...titleStyle}}>{title}</Text>
            </View>
        </View>
    )
}



export default SubHeader;