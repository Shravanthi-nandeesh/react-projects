import React from 'react';
import {  StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, SPACING } from './constants';
import CustomDrawer from './components/CustomDrawer';
import ReanimatedIndex from './Screens/AnimationScreens/ReanimatedIndex';
import WithSpring from './Screens/AnimationScreens/WithSpring';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedStylesandProps from './Screens/AnimationScreens/AnimatedStylesandProps';
import Animatingprops from './Screens/AnimationScreens/Animatingprops';
function App(): React.JSX.Element {
  //TODO: Use these commented color changing feature when handling the color change of the top phone view.
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const MyDrawer: React.FC = () => (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Animated component" component={ReanimatedIndex} options={{ headerTitle: '' }} />
      <Drawer.Screen name="With Spring" component={WithSpring} options={{ headerTitle: '' }} />
    </Drawer.Navigator>
  )
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.secondary} />
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="DrawerList" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="Animated styles and props" component={AnimatedStylesandProps} />
          <Stack.Screen name="Animating props" component={Animatingprops} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: SPACING.medium,
  },
});

export default App;
