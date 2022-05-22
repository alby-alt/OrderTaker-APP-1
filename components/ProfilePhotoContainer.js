import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES } from '../constants'

const ProfilePhotoContainer = ({ source, children, onPress, containerStyle  }) => {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.lightGray2,
                width: 120,
                height: 120,
                borderRadius: 60,
                alignSelf: 'center',
                marginTop: SIZES.padding,
                overflow: 'hidden',
                ...containerStyle
            }}
            onPress={onPress}
        >
          {children}
          
        </TouchableOpacity>
    )
}

export default ProfilePhotoContainer
