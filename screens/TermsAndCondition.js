import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';


export default function App() {
    const [animation, setAnimation] = useState(new Animated.Value(0))

    const handleAnimation = () => {
        Animated.timing(animation, {
           toValue: 1,
           duration: 1000
        }).start(() => {
           Animated.timing(animation, {
              toValue: 0,
              duration: 1000
           }).start()
        })
     }

     const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(90,210,244)", "rgb(255, 255, 255)"]
     }) 
     
     const animatedStyle = {
        backgroundColor: boxInterpolation
     }



 return (  
       <View style={styles.container}>    
         <TouchableWithoutFeedback onPress={handleAnimation}>  
         <Animated.View style={{...styles.box, ...animatedStyle}} />
             </TouchableWithoutFeedback>  
               </View>  
        );
}

const styles = StyleSheet.create({  
    container: {    flex: 1,  
          backgroundColor: '#fff',  
          alignItems: 'center',  
          justifyContent: 'center', 
     },
     box:{    
          width: 150,    
          height: 150,    
          backgroundColor: '#5AD2F4'  
}});