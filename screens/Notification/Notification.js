import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_CANDIDATES } from '../../stores/types';

const Notification = () => {
    const dispatch = useDispatch();
    const { candidates } = useSelector(a => a.data);


// useEffect(() => {
//     return dispatch({
//             type: CLEAR_CANDIDATES
//         })
// }, []);


// console.log(candidates)
console.log(candidates.length)


    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {candidates.map(a => {
                console.log(a)
                return (
                    <Text>{a.candidateName}</Text>
                )
            })}
        </View>
    )
}

export default Notification;