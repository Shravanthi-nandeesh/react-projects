import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Animated from 'react-native-reanimated';
import { COLORS } from '../constants/theme';

const AnimatedComponent = () => {
    return (
        <Animated.View
            style={{
                width: 100,
                height: 100,
                backgroundColor:COLORS.leastColor,
            }}
        />
    );

}

export default AnimatedComponent

const styles = StyleSheet.create({})