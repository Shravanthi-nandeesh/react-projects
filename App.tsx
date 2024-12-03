/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';  
import Welcome from './components/Welcome/Welcome';

import { createStaticNavigation } from '@react-navigation/native';
import NearByJobs from './components/NearBy/NearBy';
import { COLORS, SIZES } from './constants';
import { useNavigation } from '@react-navigation/native';
import PopularJobs from './components/PopularJobs/PopularJobs';
import HeaderLeftBtn from './components/common/HeaderLeftBtn';
import HeaderRightBtn from './components/common/HeaderRightBtn';
import JobDetails from './components/jobDetails/JobDetails';
import { StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

// Use StackScreenProps to type the props for the JobDetails screen
type JobDetailsProps = StackScreenProps<RootStackParamList, 'JobDetails'>;

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Welcome,
      options: {
        title: 'Overview',
      },
    },
    Details: NearByJobs,
  },
});

const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = {
  PopularJobs: undefined; // No params for PopularJobs screen
  JobDetails: { id: string }; // JobDetails expects a parameter `id`,
  Home:undefined
};

const Stack = createStackNavigator<RootStackParamList>(); // Specify the type for the stack

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  // console.log(search, "search");

  return (
      <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar
              barStyle={'light-content'}
              backgroundColor={COLORS.primary}
          />
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
              <View style={styles.HomePage}>
                  <Welcome />
                  <PopularJobs />
                  <NearByJobs />
              </View>
          {/* </ScrollView> */}
      </SafeAreaView>
  );
};


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>  
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.background },
                headerShadowVisible: false,
                headerLeft: () => <HeaderLeftBtn handlePress={undefined} />,
                headerRight: () => <HeaderRightBtn handlePress={undefined} />,
                headerTitle: "",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="JobDetails" component={JobDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

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

export default App;
