import { View, Text } from 'react-native'
import React from 'react'
import descriptionStyle from './description.style'

const Description = ({title,description}) => {
  return (
    <View style={descriptionStyle.wrapper}>
      <Text style={descriptionStyle.title}>{title}</Text>
      <Text style={descriptionStyle.description}>{description}</Text>
    </View>
  )
}

export default Description