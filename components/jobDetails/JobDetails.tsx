import React, { useEffect, useState, useCallback, act } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { COLORS, SIZES, SPACING } from '../../constants';
import HeaderLeftBtn from '../common/HeaderLeftBtn';
import HeaderRightBtn from '../common/HeaderRightBtn';
import Company from './Company';
import JobTabs from './JobTabs';
import Description from './description/Description';
import Aboutcompany from './Aboutcompany/Aboutcompany';
import Requirements from './requirements/Requirements';
import Footer from './Footer';
import useFetch from '../../hooks/useFetch';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    PopularJobs: undefined; // This screen has no params
    JobDetails: { id: string }; // JobDetails screen expects an id parameter
  };
  type JobDetailsRouteProp = RouteProp<RootStackParamList, 'JobDetails'>;
  type JobDetailsProps = {
    route: JobDetailsRouteProp;
  };

  
  const JobDetails: React.FC<JobDetailsProps> = ({ route }) => {
    // const params = useSearchParams();
    // const router = useRouter();
    const { id } = route.params;
    // console.log(id,"id")
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
            {/* <Stack.Screen
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
                }} /> */}
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

export default JobDetails