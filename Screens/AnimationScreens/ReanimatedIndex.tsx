import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AnimatedComponent from '../../animationComponents/AnimatedComponent'
import { COLORS, SIZES, SPACING } from '../../constants'
import SharedValue from '../../animationComponents/SharedValue'
import Svg, { Circle } from 'react-native-svg'
import GlobalStyle from "../../Global.style"
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
type NavigatorList = {
    "With Spring": undefined;
};
const ReanimatedIndex = () => {
    
    const navigation = useNavigation<DrawerNavigationProp<NavigatorList>>();
    const [reloadOutPut, setReloadOutPut] = useState(false);

    return (
        <View style={GlobalStyle.Wrapper} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={GlobalStyle.Heading}>Using an Animated component</Text>
                <Text style={GlobalStyle.Content}>Let's start by having something that we could see on the screen. First, to create an animatable component you need to import an <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>Animated</Text> object:</Text>
                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>import Animated from 'react-native-reanimated';</Text>
                </View>
                <Text style={GlobalStyle.Content}>This Animated object wraps React Native built-ins such as <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>View</Text>, <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>ScrollView</Text> or <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>FlatList</Text></Text>

                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>{'import Animated from \'react-native-reanimated\';\n\n' +
                        'export default function App() {\n' +
                        '  return (\n' +
                        '    <Animated.View\n' +
                        '      style={{\n' +
                        '        width: 100,\n' +
                        '        height: 100,\n' +
                        '        backgroundColor: \'violet\',\n' +
                        '      }}\n' +
                        '    />\n' +
                        '  );\n' +
                        '}\n'}</Text>
                </View>
                <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
                    <Text style={GlobalStyle.outPutText}>Output</Text>
                    <AnimatedComponent />
                </View>

                {/* Using a shared value */}

                <Text style={GlobalStyle.Heading}>Using a shared value</Text>
                <Text style={GlobalStyle.Content}>Let's create a very simple animation that will animate a width of an element. We'll make it expand by 50px on each button press. We can do this by modifying a shared value connected to the width property of an <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>Animated.View</Text> component.</Text>
                <Text style={GlobalStyle.Content}>Values stored in shared values are accessed and modified by their <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>.value property.</Text></Text>

                <View style={GlobalStyle.codeBlock}>
                    <Text style={GlobalStyle.codeBlockText}>{`import { Button, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

export default function App() {
const width = useSharedValue(100);

const handlePress = () => {
width.value = width.value + 50;
};

return (
<View style={{ flex: 1, alignItems: 'center' }}>
    <Animated.View
    style={{
        width,
        height: 100,
        backgroundColor: 'violet',
    }}
    />
    <Button onPress={handlePress} title="Click me" />
</View>
);
}`}</Text>
                </View>
                <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
                    <View style={GlobalStyle.outPutBlock}>
                        <Text style={GlobalStyle.outPutText}>Output</Text>
                        <TouchableOpacity onPress={() => { setReloadOutPut(true) }}>
                            <Text style={[GlobalStyle.outPutText, GlobalStyle.realoadOutput]} >Reload</Text>
                        </TouchableOpacity>
                    </View>
                    <SharedValue reloadOutPut={reloadOutPut} setReloadOutPut={setReloadOutPut} />
                </View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('With Spring')}>
                    <View>
                        <Text style={GlobalStyle.nextConcept}>With Spring</Text>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
          
        </View>
    )
}

export default ReanimatedIndex
