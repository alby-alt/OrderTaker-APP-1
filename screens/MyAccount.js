import React, { useState } from 'react'
import { View, Text, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';


import { Header, IconButton, ProfilePhotoContainer, FormInput, TextButton } from '../components';
import { COLORS, FONTS, SIZES, icons, constants } from '../constants';

import {request, PERMISSIONS} from 'react-native-permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const MyAccount = ({navigation}) => {
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

  const showTimePicker = () => {
      console.log('wewewewew')
    showMode('time');
  };


  function isEnableContinue(){
    return values.name != "" && values.mobile != ""
}


    function renderHeader() {
        return(
            <Header
            title="My Account"
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
                        flex: 1
                    }}
                >
                    <AntIcon name="plus" size={30} />
                </View>   
                    
                )}
               
                </ProfilePhotoContainer>   


                {/* Form Input */}
                <FormInput
                  label="First name"
                  containerStyle={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.radius
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder=""
              />
            
                {/* Operating Hours Buttons */}
              {/* <Text style={{...FONTS.body2, fontWeight: '600', marginTop: SIZES.padding, marginBottom: SIZES.base}}>Laundry Working Hours</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                {constants.operatingHours.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={`time-${index}`}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: SIZES.base,
                                backgroundColor: index == 0 ? COLORS.primary : COLORS.lightGray2,
                                borderRadius: SIZES.padding,
                                width: 45,
                                height: 25,
                                borderColor: COLORS.gray2,
                                borderWidth: 1
                            }}
                        >
                            <Text style={{
                                color: index == 0 ? COLORS.white : COLORS.gray
                                }}>{item.label}</Text>
                        </TouchableOpacity>
                    )
                })}

            </View> */}
            {/* Time Picker */}
            {/* <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <FormInput
                  label="Opening Hours"
                  containerStyle={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.radius,
                    flex: 1,
                    marginRight: SIZES.base
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="07:00 AM"
                appendComponent={
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                    <SLIcon name="clock" size={20} color={COLORS.black} style={{position: 'absolute', right: 5}}
                     onPressIn={() => showTimePicker()}
                    />
                    </View>
                }
                onPressIn={() => showTimePicker()}
              />

            <FormInput
                  label="Closing Hours"
                  containerStyle={{
                      flex: 1,
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.radius,
                    marginLeft: SIZES.base
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomColor: COLORS.darkGray,
                    borderBottomWidth: 2,
                    height: 48
                }}
                placeholder="07:00 PM"
                appendComponent={
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                    <SLIcon name="clock" size={20} color={COLORS.black} style={{position: 'absolute', right: 5}}
                     onPressIn={() => showTimePicker()}
                    />
                    </View>
                }
                onPressIn={() => showTimePicker()}
              />
            
            </View>
            <FormInput
                  label="Laundry Location"
                  containerStyle={{
                    marginTop: SIZES.padding,
                    marginBottom: SIZES.radius
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomWidth: 2,
                    height: 48,
                    borderBottomColor: COLORS.darkGray
                }}
                placeholder="Enter Laundry Location"
                appendComponent={
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                    <SLIcon name="location-pin" size={20} color={COLORS.black} style={{position: 'absolute', right: 5}}
                    
                    />
                    </View>
                }
              />
              <FormInput
                  label="Mobile Number"
                  containerStyle={{
                    marginTop: SIZES.padding,
                    marginBottom: SIZES.radius,
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomColor: COLORS.darkGray,
                    borderBottomWidth: 2,
                    height: 48
                }}
                placeholder="Enter Mobile Number"
                prependComponent={
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomColor: COLORS.darkGray,
                        borderBottomWidth: 2,
                        height: 48

                    }}>
                    <Text
                        style={{...FONTS.h3, color: COLORS.black, borderRightColor: COLORS.gray, borderRightWidth: 2, paddingRight: SIZES.base, marginRight: SIZES.base}}
                    >+63</Text>

                    </View>
                }
              />
              <View 
               style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
              <SLIcon name="exclamation" size={20} color={COLORS.primary} /> 
              <Text style={{...FONTS.body4, paddingLeft: SIZES.radius, paddingTop: SIZES.radius, paddingRight: SIZES.radius}}>By continuing you choose to agree to our
               <TextButton label="terms and conditions"
                  buttonContainerStyle={{
                    backgroundColor: null
                 }}
                 labelStyle={{
                     ...FONTS.body4,
                     color: COLORS.primary
                 }}
                 onPress={() => navigation.navigate("TermsAndCondition")}
               /></Text>

              </View>
              <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
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
                    onPress={() => navigation.navigate("ServicesProvided")}
                />
                </View>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}   */}
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
        </View>
    )
}

export default MyAccount;
