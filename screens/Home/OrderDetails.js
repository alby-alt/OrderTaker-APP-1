import React, {  useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Header, IconButton, LineDivider } from '../../components'
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants'
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';



const OrderDetails = ({ navigation, route }) => {
    const [orderDetails, setOrderDetails] = useState({
        services: [],
        orderItems: []
    });
    const [activeList, setActiveList] = useState([]);
    const [rr, setRr] = useState(0);
    const { orderId } = route.params;

    const handleActiveList = (e) => {

        let arr = activeList;
        let ind = activeList.indexOf(e);
        if(ind == -1){
            arr.push(e);
        } else {
        arr = activeList.filter(a => a != e);
        }

        setActiveList(arr);
        setRr(Math.random());
    }




    useEffect(() => {
        let obj = constants.orderDetails.find(a => a.orderId == orderId )
        let order = constants.orders.find(a => a.id == orderId);

        setOrderDetails({...obj, order})
    }, [orderId])



    function renderHeader() {
        return(
            <Header
            title="Order Details"
            titleStyle={{
                ...FONTS.body3,
                fontWeight: '700'
            }}
            containerStyle={{
                height: 40,
                marginTop: 20
            }}            
            leftComponent={
                <TouchableOpacity
                  containerStyle={{
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
                >
                   <AntIcon name="close" size={25} color={COLORS.darkGray} />
                </TouchableOpacity>
              
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




    function renderOrderDetails(params) {
            return(
                <FlatList
                data={orderDetails.services}
                contentContainerStyle={{
                    // marginTop: SIZES.padding
                }}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                    let isOpen = activeList.find(a => a == index);
                   
                    let orderItems = orderDetails?.orderItems?.filter(a => a.serviceId == item.id);
                    // console.log(items)
                    return(
                    <View
                        key={`order-details-${item.id}`}
                    >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.base
                        }}
                    >
                        <IconButton
                           containerStyle={{
                               borderWidth: 1,
                               flexDirection: 'row',
                               justifyContent: 'center',
                               alignItems: 'center',
                               width: 20,
                               height: 20,
                               borderColor: COLORS.darkGray,
                               borderRadius: 3
                           }}
                            icon={isOpen != undefined ? icons.minus : icons.plus}
                            iconStyle={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.gray
                            }}
                            onPress={() => handleActiveList(index)}
                        />
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                ...FONTS.body3,
                                fontWeight: '700',
                                color: COLORS.darkGray
                            }}
                        >{item.name}</Text>
                        
                    </View>
              
                       


                    {/* Header */}
                    {isOpen != undefined ? (
                        <View>
                               <LineDivider 
                        lineStyle={{
                            marginTop: SIZES.base,
                            marginBottom: SIZES.radius,
                            backgroundColor: COLORS.lightGray1

                        }}
                    />
                         <View
                        style={{
                            // flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                          <View
                         style={{
                             flexGrow: 1,
                             flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                        > 
                        <Text style={{fontWeight: 'bold', ...FONTS.h4, color: COLORS.gray}}>No. of Clothes</Text>
                        </View>
                        <View
                         style={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                        > 
                        <Text style={{fontWeight: 'bold', ...FONTS.h4, color: COLORS.gray}}>Rate per cloth</Text>
                        </View>
                        <View
                         style={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}
                        > 
                        <Text style={{fontWeight: 'bold', ...FONTS.h4, color: COLORS.gray}}>Total Price</Text>
                        </View>
               
                    </View>


                     {/* Item List    */}
                     {orderItems.map(a => {
                         return (
                            <View
                            key={`order-items-${a.id}`}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: SIZES.radius
                            }}
                        >
                   
                            <View style={{
                                flexGrow: 1,
                                 flexDirection: 'row',
                                 paddingLeft: SIZES.base,
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                                // alignItems: 'center'
                            }} >
                            <Text
                            style={{fontWeight: 'bold', ...FONTS.body4}}
                            >
                            {a.qty} x {a.itemName}
                            </Text>
                            </View>
                            <View
                             style={{
                                flexGrow: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingLeft: SIZES.padding,
                                paddingRight: SIZES.padding,
                                alignItems: 'center'
                              }}
                            > 
                            <Text style={{fontWeight: 'bold', ...FONTS.body4}}>{a.rate} Php</Text>
                            </View>
                            <View
                             style={{
                                flexGrow: 1,
                                flexDirection: 'row',
                                paddingRight: SIZES.base,
                               justifyContent: 'flex-end',
                               alignItems: 'center'
                            }}
                            > 
                            <Text style={{fontWeight: 'bold', ...FONTS.h4}}>{Number(a.qty * a.rate)} Php</Text>
                            </View>
                        </View>
                        
                         )
                     })}
                       <LineDivider
                  lineStyle={{
                    marginBottom: SIZES.base,
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.lightGray1
                }}
            />
                    </View>
                     ) : (
                        <LineDivider
                        lineStyle={{
                          marginBottom: SIZES.base,
                          marginTop: SIZES.radius,
                          backgroundColor: COLORS.lightGray1
                      }}
                  />

                     )
                     
                    }     
                  
                            

                    </View>
                )}}
                ListFooterComponent={
                    <View  style={{height: 10 }}/>
                    
                }
            />         
            )
    }




    let total = 0;


    orderDetails.orderItems.forEach(a => {
        console.log(a);
        let subTotal = Number(a.qty * a.rate);
        total = total + subTotal;

    })
    
    console.log(total)
    return (
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
            justifyContent: 'flex-start',
            alignItems: 'stretch'
        }}
    >
            {/* Header */}
            {renderHeader()}

            {/* Order Id */}
            <View
                style={{
                    marginTop: SIZES.base,
                    flexDirection: 'row',
                }}
            >
                <Text 
                    style={{
                        ...FONTS.body3,
                        color: COLORS.black,
                        fontWeight: '700'  
                    }}
                >
                Order ID :
                </Text>
                <Text 
                     style={{
                        ...FONTS.body3,
                        marginLeft: SIZES.base,
                        color: COLORS.darkGray,
                        fontWeight: '600'  
                    }}
                >{orderDetails?.order?.orderId}</Text>
            </View>


            {/* Order Details */}
            <View>
            {renderOrderDetails()}


            {/* Footer Total */}
            <View
                style={{
                    // marginTop: SIZES.base,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}

            >
                <Text 
                    style={{
                        ...FONTS.body3,
                        color: COLORS.black,
                        fontWeight: '700'  
                    }}
                >
                Grand Total 
                </Text>
                <Text 
                     style={{
                        ...FONTS.body3,
                        marginLeft: SIZES.base,
                        color: COLORS.gray,
                        fontWeight: '700'  
                    }}
                >{total} Php</Text>
            </View>
            </View>
          
        </View>
    )
}

export default OrderDetails
