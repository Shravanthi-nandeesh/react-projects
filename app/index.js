import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, SIZES, FONT } from "../constants";
import NearByJobs from "../components/NearBy/NearBy";
import Welcome from "../components/Welcome/Welcome";
import PopularJobs from "../components/PopularJobs/PopularJobs";
import HeaderLeftBtn from "../components/common/HeaderLeftBtn";
import HeaderRightBtn from "../components/common/HeaderRightBtn";
const Home = () => {
    const router = useRouter();
    const [search, setSearch]  = useState('');
    console.log(search,"search")
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={COLORS.primary}
            />
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.background },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderLeftBtn />
                    ),
                    headerRight: () => (
                        <HeaderRightBtn />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.HomePage}>
                    <Welcome
                    />
                    <PopularJobs />
                    <NearByJobs />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};


export default Home;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        // alignItems: "center"
    },
    HomePage: {
        flex: 1,
        padding: SIZES.medium
    }
})