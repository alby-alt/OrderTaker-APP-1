import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { FONTS, SIZES, COLORS } from '../constants';


const  FormInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    inputContainerStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    onPressIn
}) => {
    return (
        <View 
            style={{
                ...containerStyle
            }}
        >
                {/* Label & Error Msg */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: COLORS.gray, ...FONTS.body4
                    }}
                >
                    {label}
                </Text>
                <Text
                    style={{
                        color: COLORS.red,
                        ...FONTS.body4
                    }}
                >
                    {errorMsg}
                </Text>
            </View>

            {/* Text input */}
            <View
                style={{
                    
                    flexDirection: 'row',
                    height: 40,
                    // paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}
                <TextInput
                style={{
                    flex: 1,
                    color: COLORS.black,
                    ...inputStyle
                }}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                onChangeText={onChange}
                onPressIn={onPressIn}
            />
            {appendComponent}
            </View>
       
        </View>
    )
}


export default FormInput
