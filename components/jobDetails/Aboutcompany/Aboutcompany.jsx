import { View, Text } from 'react-native'
import React from 'react'
import AboutcompanyStyle from './Aboutcompany.style'

const Aboutcompany = ({title,description}) => {
  return (
    <View style={AboutcompanyStyle.wrapper}>
    <Text style={AboutcompanyStyle.title}>{title}</Text>
    <Text style={AboutcompanyStyle.description}>{description}</Text>
  </View>
  )
}

export default Aboutcompany