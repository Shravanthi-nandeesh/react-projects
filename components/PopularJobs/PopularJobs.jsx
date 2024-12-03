import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
// import { useRouter } from 'expo-router';
import PopularJobsStyle from './PopularJobs.style';
import { COLORS, SIZES, SPACING } from '../../constants';
import PopularJobsCard from '../Cards/PopularJobsCard';
import useFetch from "../../hooks/useFetch";
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const PopularJobs = () => {
  const { data, isLoading, error } = useFetch();
  // console.log(data, "data")
  // const router = useRouter();
  const router = useNavigation();
  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobCardPress = (item) => {
    router.push(`JobDetails`, { id: item.id });
    setSelectedJob(item.id);
  }
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
                    handleJobCardPress={handleJobCardPress}
                    selectedJob={selectedJob}
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