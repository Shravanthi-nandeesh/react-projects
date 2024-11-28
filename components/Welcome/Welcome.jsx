import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import WelcomeHomeStyle from './Welcome.style'
import { router } from 'expo-router';
import { SIZES } from '../../constants';
const Welcome = () => {
  const jobTypes = ["Full-time", "Part-time", "Contract"];
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={WelcomeHomeStyle.container}>
        <Text style={WelcomeHomeStyle.userName}>Hello User</Text>
        <Text style={WelcomeHomeStyle.welcomeMessage}>Find your perfect job</Text>
        <View style={WelcomeHomeStyle.searchContainer}>
          <View style={WelcomeHomeStyle.searchWrapper}>
            <TextInput style={WelcomeHomeStyle.searchInput}
              value=''
              onChange={() => { }}
              placeholder='What are you looking for?'
            >

            </TextInput>
          </View>
          <TouchableOpacity style={WelcomeHomeStyle.searchButtonWrapper}>
            <Image source={require("../../assets/search.png")} resizeMode="contain" style={WelcomeHomeStyle.searchBtnImage} />
          </TouchableOpacity>
        </View>

        <View style={WelcomeHomeStyle.jobCategoryContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity style={WelcomeHomeStyle.jobTabs(activeJobType,item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
              >
                <Text style={WelcomeHomeStyle.tabButtonText(activeJobType,item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            horizontal
            contentContainerStyle={{columnGap:SIZES.medium}}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome