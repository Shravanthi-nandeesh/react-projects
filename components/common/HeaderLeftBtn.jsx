import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './headerBtn.style'

const HeaderLeftBtn = ({handlePress}) => {
    return (
        <TouchableOpacity style={styles.ButtonContainer} onPress={handlePress}>
            <Image source={require("../../assets/menu.png")} resizeMode='cover' style={[styles.btnImg("80%"),styles.menu]} />
        </TouchableOpacity>
    )
}

export default HeaderLeftBtn