import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import WithSpringAnimation from '../../animationComponents/WithSpringAnimation'
import GlobalStyle from '../../Global.style'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type NavigatorList = {
  "Animated component": undefined;
  "Animated styles and props": undefined
};

const WithSpring: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<NavigatorList>>();

  const [reloadOutPut, setReloadOutPut] = useState(false);
  // const navigation = useNavigation();
  const code = `
export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
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
}
`;
  return (
    <View style={GlobalStyle.Wrapper} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={GlobalStyle.Heading}>Using an animation function</Text>
        <Text style={GlobalStyle.Content}>
          Finally, import  <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>withSpring</Text> function and wrap around  <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>width.value + 50</Text> in the  <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>handlePress</Text> function so that the value which withSpring returns modifies the shared value. This will create a bouncy spring animation that transitions the width of the element from its current value (here  <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>width.value</Text>) to the new one (here  <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>width.value + 50</Text>).

        </Text>
        <View style={GlobalStyle.codeBlock}>
          <Text style={GlobalStyle.codeBlockText}>import Animated, {"{useSharedValue, withSpring}"} from 'react-native-reanimated';</Text>
        </View>
        <Text style={GlobalStyle.Content}>This Animated object wraps React Native built-ins such as <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>View</Text>, <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>ScrollView</Text> or <Text style={[GlobalStyle.Content, GlobalStyle.textBold]}>FlatList</Text></Text>

        <View style={GlobalStyle.codeBlock}>
          <Text style={GlobalStyle.codeBlockText}>{code}</Text>
        </View>
        <View style={[GlobalStyle.codeBlock, GlobalStyle.outPut]}>
          <View style={GlobalStyle.outPutBlock}>
            <Text style={GlobalStyle.outPutText}>Output</Text>
            <TouchableOpacity onPress={() => { setReloadOutPut(true) }}>
              <Text style={[GlobalStyle.outPutText, GlobalStyle.realoadOutput]} >Reload</Text>
            </TouchableOpacity>
          </View>
          <WithSpringAnimation reloadOutPut={reloadOutPut} setReloadOutPut={setReloadOutPut} />
        </View>
        <View style={GlobalStyle.navigationPages}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Animated component')}>
          <View>
            <Text style={GlobalStyle.nextConcept}>Animated component</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Animated styles and props')}>
          <View>
            <Text style={GlobalStyle.nextConcept}>Animating styles and props</Text>
          </View>
        </TouchableNativeFeedback>
        </View>
        

      </ScrollView>
    </View>
  )
}

export default WithSpring

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})