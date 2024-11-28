import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PopularJobsStyle from '../PopularJobs/PopularJobs.style'
import jobsCardStyle from './PopularJobsCard.style'

const PopularJobsCard = ({ item, selectedJob, handleJobCardPress }) => {
  console.log(item.name, "item.company");
  return (
    <TouchableOpacity style={jobsCardStyle.popularJobsCardSection}>
      <View style={jobsCardStyle.logoContainer}>
        <Image source={require("../../assets/sample_company_logo.png")}
          resizeMode='contain' style={jobsCardStyle.logoImg} />
      </View>
      <View style={jobsCardStyle.jobInfoWrapper}>
        <Text style={jobsCardStyle.companyName}>{item.name}</Text>
        <Text style={jobsCardStyle.jobTitle}>{item.description.length > 80 ? item.description.substring(0, 80).concat("...") : item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobsCard