import React, { useState, createRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image, 
    KeyboardAvoidingView
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { utils } from "../../utils";

import { AsyncStorage } from 'react-native';
// import Loader from './Loader';

const SignUp = ({navigation}) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ showPass, setShowPass ] = useState(false)
    
    const [ emailError, setEmailError ] = useState("")
    const [ usernameError, setUsernameError] = useState("")
    const [ passwordError, setPasswordError] = useState("")
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
      isRegistraionSuccess,
      setIsRegistraionSuccess
    ] = useState(false);

    const usernameInputRef = createRef();
    const emailInputRef = createRef();
    const passwordInputRef = createRef();

        function isEnableSignUp() {
        return email != "" && username != "" && password != "" &&
        emailError == "" && passwordError == "" && usernameError == ""
    }
    const handleSubmitButton = () => {
      setErrortext('');
      if (!username) {
        alert('Please fill Name');
        return;
      }
      if (!email) {
        alert('Please fill Email');
        return;
      }
      if (!password) {
        alert('Please fill Password');
        return;
      }
          //Show Loader
    setLoading(true);
    var dataToSend = {
      username: username,
      email: email,
      password: password,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
 
    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    }
    return (
        <AuthLayout
        title="Getting Started"
        subtitle="Create an account to Continue"
        titleContainerStyle={{
            marginTop: SIZES.radius
        }}
        >
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                <FormInput 
                    label="Emai/Username"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    // onChange={(value) => {
                    //     utils.validateEmail(value)
                    //     setEmail(value)
                    // }}
                    onChangeText={(email) => setEmail(email)}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      emailInputRef.current && emailInputRef.current.focus()
                    }
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
                        marginTop: SIZES.radius
                    }}
                    onChangeText={(password) =>
                        setPassword(password)
                      }
                    //   onSubmitEditing={() =>
                    //     ageInputRef.current &&
                    //     ageInputRef.current.focus()
                    //   }
                    onChange={(value) => {
                        utils.validatePassword(value,
                            setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
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
                    
                />
                       {/* <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 20
                        }}
                       >
                                <TouchableOpacity
                                    marginLeft={20}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text>REGISTER</Text>
                    </TouchableOpacity>

                       </View> */}



                <TextButton 
                    label="Sign Up"
                    // disabled={isEnableSignUp() ? false : true }
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        // backgroundColor: isEnableSignUp() ? COLORS.primary
                        // : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("Otp")}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3}}>
                        Already have an Account? </Text>
                        <TextButton
                            label="Sign In"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                            onPress={() => navigation.goBack()}
                        />
                </View>
                    
            </KeyboardAvoidingView>
            {/* Footer */}
            {/* <View>
            <TextIconButton 
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
                /> 

                <TextIconButton 
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
            
            {/* </View> */}
        </AuthLayout>
    )
}

export default SignUp;