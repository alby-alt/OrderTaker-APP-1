import React, { useState } from 'react'
import { 
    View, 
    Text, 
    Image, 
    Platform, 
    TouchableOpacity, 
    ScrollView, 
    StyleSheet, 
    SafeAreaView 
} from 'react-native'
// import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
// import AntIcon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements'

import { Header, IconButton, BottomPopup, TextButton, FormInput } from '../../components'
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants'
import { SwipeListView } from 'react-native-swipe-list-view';



const MerchantDetails = ({navigation}) => {
    const [myServicesList, setMyServicesList] = useState(constants.servicesProvided);
    const [show, setShow] = useState(false);
    const [newService, setNewService] = useState('');
    const [rr, setRr] = useState(0);


    const handleCheck = (index, val) => {
        let arr = myServicesList;

        if(val === 'express'){
            arr[index].isExpress = !myServicesList[index].isExpress
            setMyServicesList(arr);
        }

        if(val === 'standard'){
            arr[index].isStandard = !myServicesList[index].isStandard
            setMyServicesList(arr);
        }
        // console.log(arr);
        setRr(Math.random);
    }


    
  function isEnableContinue(){
    return myServicesList.length != 0;
}


const isEnableSave = () => {
    return newService != "";
}


    function renderHeader() {
        return(
            <Header
            title="Add Provided Services"
            titleStyle={{
                ...FONTS.body3,
                fontWeight: '700'
            }}
            containerStyle={{
                height: 40,
                marginHorizontal: SIZES.padding,
                marginTop: 20,
                marginBottom: SIZES.radius
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
                <IconButton
                    icon={icons.plus}
                    containerStyle={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.gray2,
                        backgroundColor: COLORS.transparentPrimary
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                    onPress={() => setShow(!show)}
                />
            }
        />
        )
    }




    function renderServiceList() {
        return(
            <SwipeListView
                data={myServicesList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableLeftSwipe={true}
                leftOpenValue={75}
                renderItem={(data, rowMap) => (
                    <View
                        key={`services-${data.index}`}
                        style={{
                            height: 50,
                            backgroundColor: COLORS.white,
                            ...styles.serviceItemContainer,
                            borderRadius: 0
                        }}
                    >
                       
                        {/* Food Image */}
                    <Text 
                        style={{
                            ...FONTS.body3,
                            flexBasis: 50,
                            flex: 1,
                            paddingLeft: SIZES.radius
                        }}
                    >{data.item.name}</Text>    
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                     <CheckBox
                    center
                    checked={data.item.isStandard}
                    onPress={() => handleCheck(data.index, 'standard')}
                    style={{
                        flexBasis: 25,
                        flex: 1
                    }}
                    />
                        <CheckBox
                    center
                    checked={data.item.isExpress}
                    onPress={() => handleCheck(data.index, 'express')}
                    style={{
                        flexBasis: 25,
                        flex: 1
                    }}
                    />
                    </View>
                    </View>
                )}
         
                renderHiddenItem={(data, rowMap) => {
                    console.log(data.index)

                    return (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'center',
                            ...styles.cartItemContainer,
                            paddingLeft: SIZES.padding,
                            backgroundColor: COLORS.lightGray1

                        }}
                        icon={icons.pencil}
                        iconStyle={{
                            tintColor: COLORS.green
                        }}
                        // onPress={() => removeMyCartHandler(data.item.id)}
                    />
                )
            
            }}
            />
        )
    }



    return (
        <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}
    >
            {/* Header */}
            {renderHeader()}

            {/* List Header Details */}
            <View 
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.radius
                    }}
                >
                    {/* <CustomSwitch
                        value={saveMe}
                        onChange={value => setSaveMe(value)}
                    />
                 */}
                 <View 
                 style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: SIZES.padding,
                      paddingRight: SIZES.padding
                 }} >
              <Text 
              style={{
                    ...FONTS.h3, 
                    fontWeight: '700', 
                    color: COLORS.gray,
                    flexBasis: 50,
                    flex: 1    
                }} >Service List</Text>
              <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
              <Text style={{...FONTS.body4, fontWeight: '700', color: COLORS.gray}} >Normal</Text>
              <Text style={{...FONTS.body4, fontWeight: '700', color: COLORS.gray}} >Express</Text>
              </View>
              </View>
                </View>
            {/* Services List */}
            {renderServiceList()}
            
            {/* BottomPopup */}
            <BottomPopup
                show={show}
                title={"Add Service"}
                animationType={"slide"}
                closePopup={() => setShow(false)}
                haveOutsideTouch={false}
            >
                       <FormInput
                label="Service Name"
                containerStyle={{
                    marginLeft: SIZES.padding,
                    marginRight: SIZES.padding,
                    
                }}
                inputContainerStyle={{
                    backgroundColor: COLORS.transparent
                }}
                inputStyle={{
                    borderBottomColor: COLORS.darkGray,
                    borderBottomWidth: 2,
                    height: 48
                }}
                placeholder="Enter Service Name"
                onChange={value => setNewService(value)}
              />
                
                {/* Buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: SIZES.radius,
                    }}
                >
                <TextButton
                    label="Save"
                    buttonContainerStyle={{
                        height: 40,
                        width: 230,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.padding,
                        backgroundColor: isEnableSave() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => setShow(false)}
                />
                </View>
            </BottomPopup>
            {/* Footer */}
            <View
                style={{
                    flexDirection: 'row',
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
            </View>
            
        </SafeAreaView>
    )
}

export default MerchantDetails

const styles = StyleSheet.create({
    serviceItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SIZES.radius
    }
})