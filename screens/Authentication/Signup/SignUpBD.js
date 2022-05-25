import React, { useState } from 'react'
import { View, Text, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { Header, IconButton, ProfilePhotoContainer, FormInput, TextButton } from '../../../components';
import { COLORS, FONTS, SIZES, icons, constants } from '../../../constants';

import {request, PERMISSIONS} from 'react-native-permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const SignUp = ({navigation}) => {
    const [values, setValues] = useState({
        name: "",
        operatingHours: [],
        location: {},
        mobile: ""
    })
    const [profilePhoto, setProfilePhoto] = useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const getPermission = async () => {
        if(Platform.OS !== 'web'){
           return await request(PERMISSIONS.ANDROID.CAMERA);
      }
 

      // if(Platform.OS !== 'web'){
      //     const {status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      //     return status
      // }
  }


  const pickImage = async () => {
      try{
          let result = await launchImageLibrary({
              mediaTypes: 'video',
              quality: 0.5
          })

          console.log(result)


      }catch (error) {
          console.log("Error @pickImage: ", error)
      }
  }



  const AddProfilePhoto = async () => {
      const status = await getPermission();
      console.log(status)

    //   if(status == "blocked"){
    //       alert("We need permission to access your camera roll.");
    //       return;
    //   } 

      pickImage()

  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(Platform.OS)
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  function isEnableContinue(){
    return values.name != "" && values.mobile != ""
}



    function renderHeader() {
        return(
            <Header
            title="Create Account"
            titleStyle={{
                ...FONTS.body3,
                fontWeight: '700'
            }}
            containerStyle={{
                height: 40,
                marginHorizontal: SIZES.padding,
                marginTop: 20
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
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.gray2
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                    onPress={() => navigation.goBack()}
                />
            }
            rightComponent={
                <View
                    style={{
                       width: 40 
                    }}
                />
            }
        />
        )
    }


    function renderMerchantDetails() {
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    marginBottom: SIZES.padding,
                }}
            >   
            {/* Title header */}
            <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                >
                    Basic Details
                </Text>
                {/* Profile Photo */}
                <ProfilePhotoContainer
                    source={{uri: profilePhoto}}
                    onPress={AddProfilePhoto}
                    containerStyle={{
                        marginBottom: SIZES.padding
                    }}
                >
                   { profilePhoto ? (
                        <Image
                style={{
                    flex: 1
                }}
                source={{uri: profilePhoto}}
            />
                ) : (
                    <View 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        // flexDirection: 'row'
                    }}
                >
                    <AntIcon name="plus" size={30} />
                </View>   
                    
                )}
               
                </ProfilePhotoContainer>   
            

                {/* Form Input */}
       
            
                <FormInput
                  label="First Name"
                  containerStyle={{
                    // marginTop: SIZES.radius,
                    // marginBottom: SIZES.radius,
                    margin: SIZES.radius,
                    flexGrow: 1
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="Enter First Name"
              /> 
                <FormInput
                  label="Last Name"
                  containerStyle={{
                    // marginTop: SIZES.radius,
                    // marginBottom: SIZES.radius,
                    margin: SIZES.radius,
                    flexGrow: 1
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="Enter Last Name"
              />  

                       <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                        // flex: 1
                    }}
                >
  {/* <FormSelect
                  label="Laundry Name"
                  containerStyle={{
                    // marginTop: SIZES.radius,
                    // marginBottom: SIZES.radius,
                    margin: SIZES.radius,
                    flexGrow: 1
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="Enter Laundry Name"
              />  */}
                <FormInput
                  label="Laundry Name"
                  containerStyle={{
                    // marginTop: SIZES.radius,
                    // marginBottom: SIZES.radius,
                    margin: SIZES.radius,
                    flexGrow: 1
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="Enter Laundry Name"
              /> 
                </View>  
            </ScrollView>
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

            {/* Merchant Details */}
            {renderMerchantDetails()}

            {/* Footer */}
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: SIZES.padding
                }}
            >
            <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 40,
                        width: 230,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.padding,
                        backgroundColor: isEnableContinue() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("TypesAndPricing")}
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
                            onPress={() => navigation.navigate("SignIn")}
                        />
                </View>
            </View>

        </View>
    )
}

export default SignUp;
