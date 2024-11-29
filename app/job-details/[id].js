import { Stack, useSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState, useCallback, act } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { COLORS, SIZES, SPACING } from '../../constants';
import useFetch from '../../hooks/useFetch';
import HeaderLeftBtn from '../../components/common/HeaderLeftBtn';
import HeaderRightBtn from '../../components/common/HeaderRightBtn';
import Company from '../../components/jobDetails/Company';
import JobTabs from '../../components/jobDetails/JobTabs';
import Description from '../../components/jobDetails/description/Description';
import Aboutcompany from '../../components/jobDetails/Aboutcompany/Aboutcompany';
import Requirements from '../../components/jobDetails/requirements/Requirements';
import Footer from '../../components/jobDetails/Footer';
function jobDetails() {
    // const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error } = useFetch();
    const [refreshing, setRefreshing] = useState(false);
    const Onrefresh = () => {

    }
    const tabs = ['Description', 'Company', "Requirements"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch (activeTab) {
            case "Description":
                return (<Description
                    title={"Description"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '}
                />)
            case "Company":
                return (<Aboutcompany
                    title={"About company"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '}
                />)
            case "Requirements":
                return (<Requirements
                    title={"Requirements"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '}
                />)
            default:
                break;
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <HeaderLeftBtn />
                    ),
                    headerRight: () => (
                        <HeaderRightBtn />
                    ),
                    headerTitle: ''
                }} />
            <View style={{ paddingBottom: 100 }}>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={Onrefresh} />} >
                    {isLoading ? (<ActivityIndicator color={COLORS.primary} />) : error ? (<Text>Error occured</Text>) :
                        data.length == 0 ? (<Text>Data not found</Text>) : (
                            <View >
                                <Company
                                />
                                <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                                {displayTabContent()}
                            </View>
                        )
                    }
                </ScrollView>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default jobDetails