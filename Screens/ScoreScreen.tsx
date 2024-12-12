import { Button, Dimensions, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScoreScreenStyle from './ScoreScreen.style'
import Animated, { useAnimatedProps, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const ScoreScreen: React.FC = () => {
    const progress = useSharedValue(0);
    useEffect(() => {
        progress.value = withTiming(1, { duration: 2000 });
    }, [])
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1-progress.value)
        
    }))
    return (
        <View style={ScoreScreenStyle.scoreScreenContainer}>
            <Text style={ScoreScreenStyle.percentageText}>100%</Text>
            <Svg style={{position:"absolute"}}>
                <Circle
                    cx={width / 2}
                    cy={height / 2}
                    r={R}
                    stroke={COLORS.BACKGROUND_STROKE_COLOR}
                    strokeWidth={40}
                    fill={COLORS.white}
                />

                <AnimatedCircle
                    cx={width / 2}
                    cy={height / 2}
                    r={R}
                    stroke={COLORS.STROKE_COLOR}
                    strokeWidth={15}
                    strokeDasharray={CIRCLE_LENGTH}
                    // strokeDashoffset={CIRCLE_LENGTH * 0.5}
                    fill={COLORS.white}
                    animatedProps={animatedProps}
                >

                </AnimatedCircle>
            </Svg>

        </View>
    )
}

export default ScoreScreen

