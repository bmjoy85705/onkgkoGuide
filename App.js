import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,Text} from 'react-native';

import HomeScreen from './Screen/HomeScreen';
import SixScreen from './Screen/SixScreen';
import SevenScreen from './Screen/SevenScreen';
import EightScreen from './Screen/EightScreen';
import NineTenScreen from './Screen/NineTenScreen';
import HigherMathScreen from './Screen/HigherMathScreen'



const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      {
         <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={HomeScreen}
           options={{ title: 'অংক গাইড' }}
         />
         <Stack.Screen name="SixScreen" component={SixScreen} options={{ title: 'Class Six' }} />
         <Stack.Screen name="SevenScreen" component={SevenScreen} options={{ title: 'Class Seven' }} />
         <Stack.Screen name="EightScreen" component={EightScreen} options={{ title: 'Class Eight' }} />
         <Stack.Screen name="NineTenScreen" component={NineTenScreen} options={{ title: 'Class Nine-Ten(General Math)' }} />
         <Stack.Screen name="HigherMathScreen" component={HigherMathScreen} options={{ title: 'Class Nine-Ten(Higher Math)' }} />
        
       </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;