import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../Global.style'
import AnimatedStylesandPropsAnimation from '../../animationComponents/AnimatedStylesandPropsAnimation';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Circle } from 'react-native-svg';
import AnimatingpropsAnimation from '../../animationComponents/AnimatingpropsAnimation';
import ProgressCircleAnimation from '../../animationComponents/ProgressCircleAnimation';
type NavigatorList = {
    "Animating props": undefined;
};

const AnimatedProps = () => {
    const navigation = useNavigation<DrawerNavigationProp<NavigatorList>>();
    const [reloadOutPut, setReloadOutPut] = useState(false);
    const code = `<Circle cx="50" cy="50" r="10" fill="blue" />`;
    const animateCircleCode =  `import Animated from 'react-native-reanimated';
import { Circle } from 'react-native-svg';
import { useSharedValue } from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
function App() {
  const r = useSharedValue(10);

  return (
    <Svg>
      <AnimatedCircle cx="50" cy="50" r={r} fill="blue" />
    </Svg>
  );
}
`;
const FinalAnimatedCode = `import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function App() {
  const r = useSharedValue<number>(20);

  const handlePress = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

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
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    height: 250,
    width: '100%',
  },
});`;

const progressCircleAnimation = `
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
`;

    return (
        <View style={GlobalStyle.Wrapper} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={GlobalStyle.Heading}>Animating props</Text>
                <Text style={GlobalStyle.Content}>Most of the values that developers animate (width, color, transform etc.) are modified by passing them as an object to the style property of an element. But that's not always the case.</Text>

                <Text style={GlobalStyle.Content}>Sometimes we'd like to animate not just styles but also the props which are passed to the component.</Text>

                <Text style={GlobalStyle.Content}>For example, let's say we would like to animate SVG elements. Instead of passing values to the style property, values are defined as props:</Text>

                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>
                        {code}
                    </Text>
                </View>
                <Text style={GlobalStyle.Content}>
                    Reanimated comes with just a handful of built-in components like Animated.View or Animated.ScrollView. For components which aren't a part of Reanimated, to make their props animatable, we need to wrap them with <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>createAnimatedComponent</Text>
                </Text>
                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>
                        {animateCircleCode}
                    </Text>
                </View>
                <Text style={GlobalStyle.Content}>
                This approach works just fine but same as useAnimatedStyle for animating styles we can encapsulate the animation logic and gain access to the .value property of a shared value by using useAnimatedProps.
                </Text>
                <Text style={GlobalStyle.Content}>
                So if we'd like to smoothly increase the radius of a circle by 10px on each button press we could use <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>useAnimatedProps</Text>:
                </Text>
                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>
                        {FinalAnimatedCode}
                    </Text>
                </View>
                <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
                    <View style={GlobalStyle.outPutBlock}>
                        <Text style={GlobalStyle.outPutText}>Output</Text>
                        <TouchableOpacity onPress={() => { setReloadOutPut(true) }}>
                            <Text style={[GlobalStyle.outPutText, GlobalStyle.realoadOutput]} >Reload</Text>
                        </TouchableOpacity>
                    </View>
                    <AnimatingpropsAnimation reloadOutPut={reloadOutPut} setReloadOutPut={setReloadOutPut} />

                </View>

                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>
                        {progressCircleAnimation}
                    </Text>
                </View>
                <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
                    <View style={GlobalStyle.outPutBlock}>
                        <Text style={GlobalStyle.outPutText}>Output</Text>
                        <TouchableOpacity onPress={() => { setReloadOutPut(true) }}>
                            <Text style={[GlobalStyle.outPutText, GlobalStyle.realoadOutput]} >Reload</Text>
                        </TouchableOpacity>
                    </View>
                    <ProgressCircleAnimation reloadOutPut={reloadOutPut} setReloadOutPut={setReloadOutPut} />

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

export default AnimatedProps

const styles = StyleSheet.create({})