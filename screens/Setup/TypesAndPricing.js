import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    FlatList,
    StyleSheet, 
    SafeAreaView, 
    TextInput
} from 'react-native'
// import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
// import AntIcon from 'react-native-vector-icons/AntDesign';

import { Header, IconButton, BottomPopup, TextButton, LineDivider, FormInput } from '../../components'
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants'
import { SwipeListView } from 'react-native-swipe-list-view';



const MerchantDetails = ({navigation}) => {
    const [myList, setMyList] = useState([]);
    const [newCloth, setNewCloth] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState(1);
    const [show, setShow] = useState(false);
    const [pricing, setPricing] = useState('pcs');
    const [rr, setRr] = useState(0);


    const handleChange = (type, val) => {
        console.log(type)
        console.log(val)
        setRr(Math.random)

    }


    function handleChangeService(serviceId) {
        //Find the menu based on the menuTypeId
        let selectedCloths = constants.clothAndPricing.filter(a => a.category == serviceId)
        console.log(selectedCloths)
        setMyList(selectedCloths)
        setSelectedServiceType(serviceId)

    }


useEffect(() => {
    handleChangeService(selectedServiceType)
}, [])

    
  function isEnableContinue(){
    return myList.length != 0;
}

const isEnableSave = () => {
    return newCloth != "";
}



    function renderHeader() {
        return(
            <Header
            title="Add Cloth Types and Pricing"
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




    function renderList() {
        return(
            <SwipeListView
                data={myList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'flex-start'    
                }}
                style={{
                    flex: 1
                }}
                disableLeftSwipe={true}
                leftOpenValue={75}
                renderItem={(data, rowMap) => {
                        let { item } = data;
                        console.log(item.priceStandardPc)
                    return (
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
                            flexBasis: '10%',
                            flex: 1,
                            paddingLeft: SIZES.radius
                        }}
                    >{data.item.name}</Text>    
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',

                    }}
                    >
                    
                    <View
                       style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                         <TextInput
                         key={`normal-${data.index}`}
                        onChangeText={value => handleChange('normal', value)}
                        value={item.priceStandardPc}
                        keyboardType="numeric"
                        style={{
                            textAlign: 'center',
                            ...FONTS.h3,
                            fontWeight: '700',
                            paddingTop: 0,
                            borderBottomColor: COLORS.darkGray,
                            borderBottomWidth: 2,
                            paddingBottom: 0,
                            width: 50
                            // width: "100%"
                        }}
                    />

                    </View>
                    <View
                       style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                     <TextInput
                        key={`express-${data.index}`}
                        onChangeText={value => handleChange('express', value)}
                        keyboardType="numeric"
                        // value={item.priceExpressPc}
                        defaultValue={item.priceExpressPc}
                        style={{
                            textAlign: 'center',
                            ...FONTS.h3,
                            fontWeight: '700',
                            paddingTop: 0,
                            borderBottomColor: COLORS.darkGray,
                            borderBottomWidth: 2,
                            paddingBottom: 0,
                            width: 50

                            // width: "100%"
                        }}
                    />

                    </View>     
                
                    
                            
                  
                    </View>
                    </View>
                )}}
         
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


    function renderServicesTab() {
        return (
            <FlatList
                horizontal
                contentContainerStyle={{
                    // justifyContent: 'center',
                    // paddingTop: 20,
                    padding: SIZES.base,


                }}
                style={{
                    maxHeight: 50
                }}
                data={constants.servicesProvided}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == constants.servicesProvided.length -1 ? SIZES.padding : 0,
                            backgroundColor: selectedServiceType == item.id ? COLORS.primary : COLORS.lightGray2,
                            borderRadius: SIZES.padding,
                            paddingLeft: SIZES.radius,
                            paddingRight: SIZES.radius,
                            height: 40,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => {
                            handleChangeService(item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedServiceType == item.id ? COLORS.white : COLORS.black, 
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }  


    function renderPriceType() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingLeft: SIZES.padding,
                    paddingRight: SIZES.padding

                }}
            >
                              <Text 
              style={{
                    ...FONTS.body3, 
                    fontWeight: '700', 
                    color: COLORS.darkGray,
                    flexBasis: 50,
                    marginBottom: SIZES.base,
                    flex: 1    
                }} >Pricing Type</Text>    
                <View
                    style={{
                        width: 150,
                        flexDirection: 'row',
                        borderRadius: SIZES.radius,
                         height: 40
                    }}                
                >
                    <TouchableOpacity
                        style={{
                        height: "100%",
                        backgroundColor: pricing == 'pcs' ? COLORS.primary : COLORS.lightGray1,
                        borderTopLeftRadius: SIZES.padding,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        flexGrow: 1
                        }}
                        onPress={() => setPricing('pcs')}
                    >
                        <Text 
                        style={{
                            ...FONTS.body3, 
                            fontWeight: '600',
                            color: pricing == 'pcs' ? COLORS.white : COLORS.black
                            }}
                    >Piece</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                          style={{
                            height: "100%",
                            backgroundColor: pricing == 'kls' ? COLORS.primary : COLORS.lightGray1,
                            borderTopRightRadius: SIZES.padding,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            flexGrow: 1
                            }}
                            onPress={() => setPricing('kls')}
                    >
                        <Text
                              style={{
                                ...FONTS.body3, 
                                fontWeight: '600',
                                color: pricing == 'kls' ? COLORS.white : COLORS.darkGray
                                }}
                        >Kilo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
    }



    return (
        <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}
    >   


            {/* Header */}
            {renderHeader()}
    
              {/* Services Tabs */}
              {renderServicesTab()}
              <LineDivider
                lineStyle={{
                    marginTop: SIZES.base,
                }}
              />
              {renderPriceType()}
              <LineDivider
              
              />
            {/* List Header */}
            <View 
                 style={{
                      height: 30,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: SIZES.radius,
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
              <View 
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
              >
              <Text style={{...FONTS.body4, fontWeight: '700', color: COLORS.gray}} >Standard</Text>
              </View>
              <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
              >
              <Text style={{...FONTS.body4, fontWeight: '700', color: COLORS.gray}} >Express</Text>
              </View>
              </View>
              </View>

              {renderList()}

         
           
            {/* BottomPopup */}

            <BottomPopup
                show={show}
                title={"Add Cloth Type"}
                animationType={"slide"}
                closePopup={() => setShow(false)}
                haveOutsideTouch={false}

            >
                   <FormInput
                label="Cloth Name"
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
                placeholder="Enter Cloth Name"
                onChange={value => setNewCloth(value)}
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

            {/* <View style={{flex: 1}}/> */}
            <View
                style={{
                    padding: SIZES.radius,
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
                         borderRadius: SIZES.padding,
                         backgroundColor: isEnableContinue() ? COLORS.primary : COLORS.transparentPrimary
                     }}
                     onPress={() => navigation.navigate("Success")}
                 />
             </View>    
             
        </SafeAreaView>
    )
}

export default MerchantDetails

const styles = StyleSheet.create({
    serviceItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SIZES.radius
    }
})