import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../Global.style'
import AnimatedStylesandPropsAnimation from '../../animationComponents/AnimatedStylesandPropsAnimation';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
type NavigatorList = {
  "Animating props": undefined;
};

const AnimatedStylesandProps = () => {
  const navigation = useNavigation<DrawerNavigationProp<NavigatorList>>();
  const [reloadOutPut, setReloadOutPut] = useState(false);
  const code = `
  import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function App() {
  const translateX = useSharedValue<number>(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});`;

  return (
    <View style={GlobalStyle.Wrapper} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={GlobalStyle.Heading}>Using use animated styles</Text>
        <Text style={GlobalStyle.Content}>the <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>useAnimatedStyle</Text> adds additional control and flexibility over your animation. This can be really useful when creating a bit more complicated animations which include conditional statements or loops.</Text>
        <View style={GlobalStyle.codeBlock}>
          <Text style={GlobalStyle.codeBlockText}>
            {code}
          </Text>
        </View>

        <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
          <View style={GlobalStyle.outPutBlock}>
            <Text style={GlobalStyle.outPutText}>Output</Text>
            <TouchableOpacity onPress={() => { setReloadOutPut(true) }}>
              <Text style={[GlobalStyle.outPutText, GlobalStyle.realoadOutput]} >Reload</Text>
            </TouchableOpacity>
          </View>
          <AnimatedStylesandPropsAnimation reloadOutPut={reloadOutPut} setReloadOutPut={setReloadOutPut} />
         
        </View>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Animating props')}>
          <View>
            <Text style={GlobalStyle.nextConcept}>Animating props</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
    </View>
  )
}

export default AnimatedStylesandProps

const styles = StyleSheet.create({})