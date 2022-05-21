import React from 'react'
import { View, Text } from 'react-native'
import { FONTS, SIZES } from '../constants'

const LabeledText = ({label, textValue, containerStyle, labelStyle, textStyle}) => {
    return (
        <View
            style={{
                padding: 3,
                ...containerStyle
            }}
        >
            <Text style={{
                ...FONTS.body3,
                fontWeight: '700',
                ...labelStyle
            }}>{label}</Text>
            <Text style={{
                ...FONTS.body3,
                fontWeight: '600',
                ...textStyle
            }}>{textValue}</Text>
        </View>
    )
}

export default LabeledText
