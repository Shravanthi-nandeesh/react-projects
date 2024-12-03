import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import nearByStyle from './NearBy.style'
import NearByJobsCard from '../Cards/NearByJobsCard'
import useFetch from '../../hooks/useFetch'
import { SPACING } from '../../constants'
import {
  useNavigation,
} from '@react-navigation/native';

const NearByJobs = () => {
  const router = useNavigation();
  const { data, isLoading, error } = useFetch();
  return (
    <View>
      <View style={nearByStyle.headerWrapper}>
        <Text style={nearByStyle.header}>Nearby jobs</Text>
        <Text style={nearByStyle.headerButton}>Show all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={(item) => (
          <NearByJobsCard item={item.item} handleNearByPress={() => router.push(`JobDetails`, { id: item.item?.id })} />
        )}
        keyExtractor={item => item.id}
        // contentContainerStyle={{rowGap:SPACING.medium}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default NearByJobs