import React, {  useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Header, IconButton, LineDivider, TextButton, CounterButton } from '../../components'
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants'
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';



const VerifyOrders = ({ navigation, route }) => {
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

    const handleCounter = (id, type) => {
        let arr = orderDetails.orderItems;
        let ind = 0;
        let obj = {};

      orderDetails.orderItems.forEach((a, index) => { 
            if(a.id == id){
                ind = index;
            }
      });

      arr[ind].qty = type == 'add' ? orderDetails.orderItems[ind].qty + 1 : orderDetails.orderItems[ind].qty >= 1 ? orderDetails.orderItems[ind].qty - 1 : 0;
      orderDetails.orderItems = arr;
      setOrderDetails(orderDetails);
      setRr(Math.random())
      
        // obj.qty = 

    }




    useEffect(() => {
        let obj = constants.orderDetails.find(a => a.orderId == orderId )
        let order = constants.orders.find(a => a.id == orderId);
        let act = [];
        obj.orderItems.forEach(a => {
            act.push(a.id);
        })

        setOrderDetails({...obj, order});
        setActiveList(act)
        setRr(Math.random())
    }, [orderId])



    function renderHeader() {
        return(
            <Header
            title="Verify No. of Clothes"
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
                        <Text style={{fontWeight: 'bold', ...FONTS.h4, color: COLORS.gray}}>Cloth Type</Text>
                        </View>
                       
                        <View
                         style={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}
                        > 
                        <Text style={{fontWeight: 'bold', ...FONTS.h4, color: COLORS.gray}}>No. of Clothes</Text>
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
                            }}>
                            <Text
                            style={{fontWeight: 'bold', ...FONTS.body4}}
                            >
                           {a.itemName}
                            </Text>
                            </View>
                           
                            <View
                             style={{
                                // flexGrow: 1,
                                // flex: 1,
                                // flexDirection: 'row',
                                // paddingRight: SIZES.base,
                               justifyContent: 'flex-end',
                               alignItems: 'center'
                            }}
                            > 
                            <CounterButton
                                textValue={a.qty}
                                minusIconStyle={{

                                }}
                                onAddClick={() => handleCounter(a.id, 'add')}
                                onMinusClick={() => handleCounter(a.id, 'minus')}
                                containerStyle={{
                                    flex: 1,
                                    width: 100,
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                }}
                            />
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
        let subTotal = Number(a.qty * a.rate);
        total = total + subTotal;

    })


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


            {/* Order Details */}
            {renderOrderDetails()}


            {/* Footer Total */}
            <View
                style={{
                    // marginTop: SIZES.base,
                    margin: SIZES.radius, 
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}

            >
                 <TextButton
                    label="Reject Order"
                    labelStyle={{
                        color: COLORS.primary,
                        fontWeight: '700'
                    }}
                    buttonContainerStyle={{
                        height: 40,
                        width: 230,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.padding,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        backgroundColor: COLORS.transparent
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
                   <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 40,
                        width: 230,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.padding,
                        backgroundColor: COLORS.primary 
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    )
}

export default VerifyOrders
