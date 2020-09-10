import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput, ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
import Classsix from '../Copmponents/Classsix/Classsix'
import Classseven from '../Copmponents/Classseven/Classseven'
import ClassNineTen from '../Copmponents/ClassNineTen/ClassNineTen'
import ClassEight from '../Copmponents/ClassEight/ClassEight'

import HigherMath from '../Copmponents/HigherMath/HigherMath'
const  HomeScreen = (props) =>

  
    
    <View style={styles.container}>
    
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text>অংক গাইড</Text>
      </View>
    </View>
    <View style={styles.body}>
     <Classsix sixScreen={()=>props.navigation.navigate("SixScreen")}></Classsix>
     <Classseven SevenScreen={()=>props.navigation.navigate("SevenScreen")}></Classseven>
     <ClassEight EightScreen={()=>props.navigation.navigate("EightScreen")}></ClassEight>
     <ClassNineTen NineTenScreen={()=>props.navigation.navigate("NineTenScreen")}></ClassNineTen>
     <HigherMath HigherMathScreen={()=>props.navigation.navigate("HigherMathScreen")}></HigherMath>
     
        
    </View>
   
    
    </View>
    
  export default HomeScreen;
  

const styles = StyleSheet.create({
container:{
flex:1,

},
header:{
  height:"20%",
  backgroundColor:"red",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:'center'
},
body:{
  height:"80%",
  flexDirection:"row",
  flexWrap:"wrap",
  padding:5
  
},
headerInner:{
 

},
});
