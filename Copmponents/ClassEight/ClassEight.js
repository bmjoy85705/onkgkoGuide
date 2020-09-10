import React from 'react';
import{View,Image,TouchableOpacity,StyleSheet} from 'react-native';

const ClassEight = (props) => {
    return (
        
        <View style={styles.bodyInner}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=> props.EightScreen()}>
        <Image
        style={styles.imageStyle}
        source={require(".//../../images/hiclipart.com.png")} 
        />
        </TouchableOpacity>
        </View>
        
    );
};

const styles=StyleSheet.create({
    bodyInner:{
        height:'30%',
        width:'50%',
        padding:10,
    },
    imageStyle:{
        height:150,
        width:150,
        padding:10
      }
})

export default ClassEight;