import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from 'axios';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import {
    FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from "../../components";
import { utils } from "../../utils";

const SignIn =({navigation}) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)
    const [token, setToken] = React.useState("");
    // // function handleSignIn() {
    // //     setToken("")
    // //     setEmailError("")
    // //     setPassword("")
    // // //   let err1 = utils.validateEmail(email, setEmailError)
    // //   let err2 = utils.validatePassword(password, setPasswordError)

    //     // console.log(err1)
    //     //console.log(err2)``
    //    new axios.post('https://solidbbm.online/api/auth/signin', {
    //         username: email,
    //         password: password
    //     })
    //     .then(doc => {
    //         console.log(doc)
    //         let { accessToken } = doc.data;
    //         // console.log(doc.data)
    //         // console.log(accessToken)

    //         setToken(accessToken)
    //               navigation.navigate("ForgotPassword");

    //     })
    //     .catch(err => {
    //         console.log(err.response.data)
    //         let { message, errors } = err.response.data;
    //         setToken(message.text)
    //         console.log(errors)
    //         errors.username && setEmailError(errors.username);
    //         errors.password && setPasswordError(errors.password)
    //     })


    // }



    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome Back!"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2 
                }}
            >
                {/* Form Input */}
                <FormInput 
                    style={{}}
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

                <FormInput 
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerSyle={{
                        marginTop: SIZES.radius,
                    }}
                    
                    onChange={(value) => {
                        // utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }
                    }
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image 
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                    errorMsg={passwordError}
                />

                {/* Save me & Forgot Password */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                > 
                <CustomSwitch 
                    value={saveMe}
                    onChange={(value) => setSaveMe(value)}
                />

                <TextButton 
                    label="Recover Password"
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.black,
                        ...FONTS.body4
                    }}
                    onPress={() => navigation.navigate("ForgotPassword")}
                />
                
                </View>

                {/* Sign In */}
                <TextButton 
                    label="Sign In"
                    onPress={() => navigation.navigate("Menu")}
                    // disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        // backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                        backgroundColor: COLORS.primary
                    }}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                     <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                        >
                            Don't have an account?
                    </Text>
                    <TextButton
                        label="Sign Up"
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3,
                                                        
                        }}
                        onPress={() => navigation.navigate("SignUpBD")}
                    /> 
                </View>
            </View>
            
            {/* Footer */}
            <View>
                {/* Facebook */}
                {/* <TextIconButton 
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                />  */}
                
                {/* Google */}
                {/* <TextIconButton 
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        //tintColor: null
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius
                    }}
                    onPress={() => console.log("Google")}
                /> */}
            </View>
        </AuthLayout>
    )
}

export default SignIn;