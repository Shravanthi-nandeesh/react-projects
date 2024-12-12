import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { COLORS, SPACING } from '../constants';
import GlobalStyle from '../Global.style';
type ReloadStates = {
    reloadOutPut: boolean,
    setReloadOutPut: (reload: boolean) => void;
}
const AnimatedStylesandPropsAnimation: React.FC<ReloadStates> = ({ reloadOutPut, setReloadOutPut }) => {
    const translateX = useSharedValue<number>(0);

    const handlePress = () => {
        translateX.value += 50;
    };

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }],
    }));
    useEffect(() => {
        if (reloadOutPut) {
            translateX.value = 0;
            setReloadOutPut(false);
        }
    }, [reloadOutPut])
    return (
        <View>
            <Animated.View style={[styles.box, animatedStyles]} />
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePress} style={GlobalStyle.Button}>
                    <Text style={GlobalStyle.buttonText}>Click me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AnimatedStylesandPropsAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: COLORS.leastColor,
        borderRadius: 20,
        marginVertical: 50,

    }
})