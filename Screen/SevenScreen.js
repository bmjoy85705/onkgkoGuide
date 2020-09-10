import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput, ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
import ClassEight from '../Copmponents/ClassEight/ClassEight'
import HigherMath from '../Copmponents/HigherMath/HigherMath'
const  SevenScreen = () =>

  
    
<View style={styles.container}>
<View style={styles.userInterface}>
<View style={styles.userInput}> 
<TextInput placeholder="search here"/> 
</View>
<View style={styles.userBtn}> 
<Button
title="Search"
/>  
</View>
</View>    
 <View >

 </View>
</View>

export default SevenScreen;


const styles = StyleSheet.create({
container:{
flex:1,
margin:"2%"

},
userInterface:{
flexDirection:"row",
padding:2

},
userInput:{
width:"80%",
borderColor:"red",
borderWidth:1,
padding:"1.5%",
borderRadius:5
},
userBtn:{

},


});
