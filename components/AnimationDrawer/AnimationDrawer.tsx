import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimatedComponent from '../../animationComponents/AnimatedComponent';
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AnimationDrawer: React.FC = () => {
    return (
        <Drawer.Navigator
        // drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                 <Text>test</Text>
                </TouchableOpacity>
            ),
            headerTitle: ''
        })}
    >
        <Drawer.Screen name="projects home" component={AnimatedComponent} />
      
    </Drawer.Navigator>
    )
}

export default AnimationDrawer

const styles = StyleSheet.create({})