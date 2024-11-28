import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './headerBtn.style'

const HeaderRightBtn = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.ButtonContainer} onPress={handlePress}>
      <Image source={require("../../assets/profile_icon.png")} resizeMode='cover' style={styles.btnImg("100%")} />
    </TouchableOpacity>
  )
}

export default HeaderRightBtn