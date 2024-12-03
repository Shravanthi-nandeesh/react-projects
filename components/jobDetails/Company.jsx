import { View, Text, Image } from 'react-native'
import React from 'react'
import companyStyle from './Company.style'

const Company = () => {
    return (
        <View style={companyStyle.companyDetailsWrapper}>
            <View style={companyStyle.companyLogoBlock}>
                <Image source={require("../../assets/sample_company_logo.png")} resizeMode='contain' style={companyStyle.companyLogo} />
            </View>
            <View style={companyStyle.CompanyNameJobWrapper}>
                <Text style={companyStyle.jobTitle}>Senior developer</Text>
                <Text style={companyStyle.companyName}>TC / Bengaluru</Text>
            </View>
        </View>
    )
}

export default Company