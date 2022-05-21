import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { Header, FormInput, TextButton } from '../../components';
import { utils } from "../../utils";
import SignIn from "../Authentication/SignIn";

const ForgotPassword = ({navigation}) => {

    const [ email, setEmail] = React.useState("")
    const [ emailError, setEmailError] = React.useState("")




    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }

    return (

        
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter an email address where we can send your updated password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <FormInput 
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        // Set Email
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={email == "" || (email != 
                                "" && emailError == "") ? icons.
                                correct : icons.cross}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? 
                                    COLORS.gray : (email != "" && 
                                    emailError == "") ? COLORS.
                                    green : COLORS.red
                                }}
                            /> 
                        </View>
                    }
                />
            </View>
            {/* Button */}
            <TextButton 
                label="Send Email"
                disabled={isEnableSendEmail() ? false : true }
                onPress={() => navigation.navigate("SignIn")}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary,
                    // backgroundColor: COLORS.primary
                }}
                
            /> 

            <TextButton 
                label="Previous"
                //disabled={isEnableSendEmail() ? false : true }
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    //backgroundColor: isEnableSendEmail() ?  COLORS.primary : COLORS.transparentPrimary
                    backgroundColor: COLORS.primary
                }}
                onPress={() => navigation.navigate("SignIn")}
            /> 
        </AuthLayout>
    )
}

export default ForgotPassword;