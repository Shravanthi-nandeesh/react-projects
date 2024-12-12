import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import GlobalStyle from '../Global.style';
interface ReloadStates {
  reloadOutPut: boolean,
  setReloadOutPut: (reload: boolean) => void;
}
const WithSpringAnimation: React.FC<ReloadStates> = ({ reloadOutPut, setReloadOutPut }) => {
  const width = useSharedValue<number>(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  useEffect(() => {
    if (reloadOutPut) {
        width.value = 100;
        setReloadOutPut(false);
    }
}, [reloadOutPut])
  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />
      <TouchableOpacity onPress={handlePress} style={GlobalStyle.Button}>
        <Text style={GlobalStyle.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
export default WithSpringAnimation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
