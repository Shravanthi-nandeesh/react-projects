import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
const SearchResult = () => {
    const params = useLocalSearchParams();
    // const param=usePathname;
    console.log(params,"search params")
  return (
    <View>
      <Text>SearchResult</Text>
    </View>
  )
}

export default SearchResult