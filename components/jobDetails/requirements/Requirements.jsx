import { View, Text } from 'react-native'
import React from 'react'
import requirementsStyle from './requirements.style'

const Requirements = ({title,description}) => {
  return (
    <View style={requirementsStyle.wrapper}>
    <Text style={requirementsStyle.title}>{title}</Text>
    <Text style={requirementsStyle.description}>{description}</Text>
  </View>
  )
}

export default Requirements