import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import footerStyles from './Footer.style'
const Footer = () => {
  return (
    <View style={footerStyles.container}>
      <TouchableOpacity
        style={footerStyles.saveButton}>
        <Text style={footerStyles.saveBtnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={footerStyles.applyBtn}
      >
        <Text style={footerStyles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer