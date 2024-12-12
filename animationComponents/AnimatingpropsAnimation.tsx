import React, { useEffect } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

import { COLORS, SPACING } from '../constants';
import GlobalStyle from '../Global.style';
type ReloadStates = {
    reloadOutPut: boolean,
    setReloadOutPut: (reload: boolean) => void;
}
const AnimatingpropsAnimation: React.FC<ReloadStates> = ({ reloadOutPut, setReloadOutPut }) => {
    const r = useSharedValue<number>(20);

    const handlePress = () => {
        r.value += 10;
    };

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value),
    }));

    useEffect(() => {
        if (reloadOutPut) {
            r.value = 20;
            setReloadOutPut(false);
        }
    }, [reloadOutPut])
    return (
        <View style={styles.container}>
            <Svg style={styles.svg}>
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    fill="#b58df1"
                    animatedProps={animatedProps}
                />
            </Svg>
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePress} style={GlobalStyle.Button}>
                    <Text style={GlobalStyle.buttonText}>Click me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AnimatingpropsAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    svg: {
        height: 250,
        width: '100%',
    },
})