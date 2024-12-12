import React, { useEffect } from 'react';
import {  View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
import { COLORS } from '../constants';
type ReloadStates = {
    reloadOutPut: boolean,
    setReloadOutPut: (reload: boolean) => void;
}
const ProgressCircleAnimation: React.FC<ReloadStates> = ({ reloadOutPut, setReloadOutPut }) => {
    const progress = useSharedValue<number>(10);
    // Access the width and height parameters when progress circle is full page view.
    // const { width, height } = Dimensions.get("window"); 
    const CircleLength = 400;
    const r = CircleLength / (2 * Math.PI);
    useEffect(() => {
        progress.value = withTiming(1, { duration: 20000 })
    }, [])
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CircleLength * (1 - progress.value)
    }));

    useEffect(() => {
        if (reloadOutPut) {
            progress.value = 0;
            setReloadOutPut(false);
        }
        progress.value = withTiming(1, { duration: 2000 })
    }, [reloadOutPut])
    return (
        <View style={styles.container}>
            <Svg style={styles.svg}>
                <Circle
                    cx="50%" // Access the window width
                    cy="50%"// Access the window height
                    r={r}
                    stroke={COLORS.BACKGROUND_STROKE_COLOR}
                    strokeWidth={13} 
                    fill={"transparent"} //
                />
                <AnimatedCircle
                    cx="50%" // Access the window width/2
                    cy="50%" // Access the window height/2
                    r={r}
                    fill={"transparent"}
                    stroke={COLORS.STROKE_COLOR}
                    strokeWidth={10}
                    strokeDashoffset={CircleLength * 0.5}
                    strokeDasharray={CircleLength}
                    animatedProps={animatedProps}
                    strokeLinecap={"round"}
                />
            </Svg>
            <Text style={{fontSize:30,color:COLORS.white}}>100%</Text>
        </View>
    )
}

export default ProgressCircleAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#475794",
        height: 250,
        position: "relative",
        borderRadius:10

    },
    svgContainer: {
        height: 250,
        position: "relative",
        width: 250,
        justifyContent: "center",
        alignItems: "center",
    },
    svg: {
        left: 0,
        height: 250,
        width: '100%',
        position: 'absolute'
    }
})