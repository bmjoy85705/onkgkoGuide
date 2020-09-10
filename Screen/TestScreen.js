import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import Screen2 from '../Screen/Screen2';

const TestScreen = (props)=>
<View>
    <Text>hello</Text>
    <Button
    title="click me"
    onPress={()=> props.navigation.navigate("SixScreen")}
    />
</View>

export default TestScreen;