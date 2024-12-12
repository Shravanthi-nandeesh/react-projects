import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { COLORS } from '../constants';
import GlobalStyle from '../Global.style';
interface ReloadStates {
    reloadOutPut: boolean,
    setReloadOutPut: (reload: boolean) => void;
}

const SharedValue: React.FC<ReloadStates> = ({ reloadOutPut, setReloadOutPut }) => {
    const width = useSharedValue(150);

    const handlePress = () => {
        width.value = width.value + 50;
    };
    useEffect(() => {
        if (reloadOutPut) {
            width.value = 150;
            setReloadOutPut(false);
        }
    }, [reloadOutPut])
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={{
                    width,
                    height: 100,
                    backgroundColor: COLORS.leastColor,
                }}
            />
           <View style={{marginTop:10}}>
           <TouchableOpacity onPress={handlePress} style={GlobalStyle.Button}>
                    <Text style={GlobalStyle.buttonText}>Click me</Text>
                </TouchableOpacity>
           </View>
        </View>
    );
}
export default SharedValue;