import React, { useEffect, useState } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images } from '../constants'

import { LineDivider, FlagBadge, LabeledText } from '../components'

import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextButton from './TextButton';





const HorizontalMenuCard = ({containerStyle, imageStyle, item, onPress, navigation}) => {







    return (
        <View
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.base,
                borderColor: COLORS.lightGray1,
                backgroundColor: COLORS.white,
                borderWidth: 2,
                shadowRadius: 100,
                shadowColor: COLORS.black,
                ...containerStyle
            }}
        >
            {/* Image */}
          

            {/* Info */}
            <View
                style={{
                    flex: 1
                }}
            >
                    {/* Header Tags and Icons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 30,
                            marginBottom: SIZES.radius
                        }}
                    >   

                        <View
                            style={{

                            }}
                        >
                    <FlagBadge
                        textValue={String(item.serviceTimeType).toUpperCase()}
                        textStyle={{
                            color: item.serviceTimeType == "express" ? COLORS.white : COLORS.darkGray
                        }}
                        bgColor={item.serviceTimeType == "express" ? COLORS.primary : COLORS.lightGray1}
                    />

                           
                        </View>

                            <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    height: 30
                                }}
                            >
                            <TouchableOpacity
                                  style={{ marginLeft: 10, marginRight: 10}}
                            >
                                 {/* <MCIcon name="truck-delivery-outline" size={30} color={COLORS.darkGray}  /> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{ marginLeft: 10, marginRight: 10}}
                            >
                            {/* <SLIcon name="location-pin" size={25} color={COLORS.darkGray}  /> */}
                            </TouchableOpacity>
                            </View>
                    </View>

                    {/* <LineDivider/> */}

                    {/* Order Details */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}
                    >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-start'
                        }}
                    >
                    {/* <LabeledText
                        label="Customer Name"
                        textValue={item.customerName}
                        
                    /> */}
                       <LabeledText
                        label="Order ID"
                        textValue={item.orderId}
                    />
                    {/* <LabeledText
                        label="Delivery By"
                        textValue={item.deliveryBy}
                    /> */}
                        <LabeledText
                        label="Total Amount"
                        textValue={item.TotalAmmount}
                    />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-evenly'
                        }}
                    >
                    {/* <LabeledText
                        label="Date Booked"
                        textValue={item.bookedAt}
                        
                    /> */}
                       {/* <LabeledText
                        label="Service Duration"
                        textValue={item.serviceDuration}
                    /> */}
                  
                    </View>
                    </View>
                    
                    {/* Text Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.base
                        }}
                    >
                        <TextButton
                            label="Order Details"
                            buttonContainerStyle={{
                                // height: 30,
                                width: 120,
                                padding: SIZES.base,
                                backgroundColor: null,
                                borderColor: COLORS.lightGray1,
                                borderWidth: 1,
                                borderRadius: SIZES.padding,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            labelStyle={{
                                color: COLORS.gray,
                                // margin: SIZES.padding
                            }}
                            onPress={() => onPress("OrderDetails")}

                        />
                          <TextButton
                            label="Receive Order"
                            buttonContainerStyle={{
                                // height: 30,
                                width: 120,
                                padding: SIZES.base,
                                backgroundColor: null,
                                borderColor: COLORS.lightGray1,
                                borderWidth: 1,
                                borderRadius: SIZES.padding,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            labelStyle={{
                                color: COLORS.gray,
                                // margin: SIZES.padding
                            }}
                            onPress={() => onPress("VerifyOrder")}
                        />
                       
                    </View>


                    {/* <Text 
                    style={{ ...FONTS.h3, fontSize: 17, fontWeight: '700', color: COLORS.darkGray}}
                    >
                        {item.customerName}
                    </Text> */}

                 
            </View>

        
        </View>
    )
}

export default HorizontalMenuCard;
