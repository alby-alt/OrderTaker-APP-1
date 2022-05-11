import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { SET_BACKGROUND } from '../../stores/types';

const Search = () => {

      const {background } = useSelector(a => a.auth);
    console.log(background)
    const dispatch = useDispatch();

    const handleClick = (val) => {
        console.log(val)
        dispatch({
            type: SET_BACKGROUND,
            payload: val
        })
    }



    return (
        <View
            style={{
                backgroundColor: background,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
           <TouchableOpacity
                onPress={() => handleClick('#0000FF')}
            ><Text>Blue</Text></TouchableOpacity>
            <TouchableOpacity
                  onPress={() => handleClick('#7FFF00')}
            ><Text>Green</Text></TouchableOpacity>
        </View>
    )
}

export default Search