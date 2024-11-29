import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import nearByJobsCard from './NearByJobsCard.style'

const NearByJobsCard = ({item,selectedJob, handleNearByPress}) => {
    return (
        <TouchableOpacity onPress={handleNearByPress}>
            <View style={nearByJobsCard.nearByJobsWrapper}>
            <View style={nearByJobsCard.logoWrapper}>
                <Image source={require("../../assets/sample_company_logo.png")} resizeMode='contain' style={nearByJobsCard.companyLogo} />
            </View>
            <View style={nearByJobsCard.jobDetailsBlock}>
                <Text style={nearByJobsCard.jobTitle}>{item.name}</Text>
                <Text style={nearByJobsCard.companyName}>{item.description.length > 80 ? item.description.substring(0, 80).concat("...") : item.description}</Text>
                <Text style={nearByJobsCard.location}>{item.place_of_found.length > 20 ? item.place_of_found.substring(0, 20).concat("...") : item.place_of_found}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default NearByJobsCard