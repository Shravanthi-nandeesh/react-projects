import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import PopularJobsStyle from './PopularJobs.style';
import { COLORS, SIZES, SPACING } from '../../constants';
import PopularJobsCard from '../Cards/PopularJobsCard';
import useFetch from "../../hooks/useFetch";
const PopularJobs = () => {
  const { data, isLoading, error } = useFetch();
  const router = useRouter();
  return (
    <View style={PopularJobsStyle.popularJobsSection}>
      <View style={PopularJobsStyle.headerWrapper}>
        <Text>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={PopularJobsStyle.headerButton}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={PopularJobsStyle.cardSection}>
        {
          isLoading ?
            (<ActivityIndicator size={'large'} color={COLORS.primary} />)
            :
            error ? (
              <Text>Something went wrong</Text>
            )
              :
              <FlatList
                data={data}
                renderItem={(item) => (
                  <PopularJobsCard
                    item={item.item}
                  ></PopularJobsCard>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ columnGap: SPACING.medium }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
        }
      </View>
    </View>
  )
}

export default PopularJobs