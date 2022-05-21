import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    DropDownPicker
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { Header, IconButton, FormInput, TextButton, TextIconButton } from "../../components";
import { utils } from "../../utils";
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { Colors } from 'react-native-paper';

const Form = ({navigation}) => {


    const [Suffix, setSuffix] = React.useState("") 
    const [email, setEmail] = React.useState("")
    const [username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")
    const [ showPass, setShowPass ] = React.useState(false)
    const [text, onChangeText] = React.useState(null);
    const [ emailError, setEmailError ] = React.useState("")
    const [ usernameError, setUsernameError] = React.useState("")
    const [ passwordError, setPasswordError] = React.useState("")

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" &&
        emailError == "" && passwordError == "" && usernameError == "" 
    }

        function renderHeader() {
            return (
                <Header 
                        title="REGISTRATION FORM"
                        containerStyle={{
                            height: 50,
                            marginHorizontal: SIZES.padding,
                            marginTop: 40,
                        }}
                        leftComponent={
                            <IconButton
                                icon={icons.back}
                                containerStyle={{
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius:  SIZES.radius,
                                    borderColor: COLORS.gray2
                                }}
                                iconStyle={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black
                                }}
                                onPress={() => navigation.navigate("Home")}
                            />
                            
                        }
                        rightComponent={
                            <View
                                style={{width: 40}}
                            >
                            </View>
                        }
                    />
            )
        }

        function renderForms() {
            return (
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flex: 1,
                    flexDirection: 'row',
                    // alignItems: 'center'
                    marginLeft: -20,
                    marginRight: 50
                }}
            >
                <FormInput 
                    label="First Name                     "
                    // keyboardType="email-address"
                    // autoCompleteType="email"
                    onChange={(value) => {
                        // Set Email
                        // utils.validateEmail(value, setEmailError)
                        setUsername(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            {/* <Image 
                                source={icons.correct}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? 
                                    COLORS.gray : (username != "" && 
                                    usernameError == "") ? COLORS.
                                    green : COLORS.red
                                }}
                            />  */}
                            
                        </View>
                    }
                />
                <FormInput 
                    label="Suffix         "
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        // Set Email
                        // utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            {/* <Image 
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
                            />  */}
                            
                        </View>
                    }
                />
                <FormInput 
                    style={{}}
                    label="Surname    "
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        // Set Email
                        // utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            {/* <Image 
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
                            />  */}
                            
                        </View>
                    }
                />
                </View>
                
            )
    }
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white
                }}
            >
                {/* Header */}
                {renderHeader()}
                {/* Forms */}
                <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            marginTop: SIZES.padding,
                            paddingHorizontal: SIZES.padding,
                            paddingBottom: SIZES.radius
                        }}
                >
                    {renderForms()}
                </ScrollView>
            </View>
        )
    }
// const styles = StyleSheet.create({
//     input: {
//         width: '70%',
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
// });
    export default Form;
    

    