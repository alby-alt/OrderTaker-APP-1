import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { FONTS } from "../constants";


const Header = ({
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent,
}) => {
    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                // marginLeft: 1,
                ...containerStyle
            }}
        >
            

            {leftComponent}

            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
            >

            </View>
            {rightComponent}
        </View>
    )
}



export default Header;