import { StatusBar} from 'expo-status-bar';
import React, {Component, useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput, FlatList,Image,TouchableOpacity} from 'react-native';
import ClassEight from '../Copmponents/ClassEight/ClassEight'
import HigherMath from '../Copmponents/HigherMath/HigherMath'
import Data from '../Data/DataForSix'
import DataForSix from '../Data/DataForSix';
//const  sixScreen = () =>

 
class App extends Component {
  state = {
    search:"",
  };

  filterList(Data) {
    return Data.filter(listItem => listItem.id.includes(this.state.search));
  }

  render() {

    return (
      <View style={styles.container}>
       <View>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
          placeholder="Search here.."
        />
       </View>
        <View style={styles.textItem}>
        <FlatList
        data={this.filterList(Data)}
        renderItem={itemData =>(
          <View style={styles.allItem}>
            <Text style={styles.mathTitle}><Text style={styles.mathNumber}>{itemData.item.id}</Text> {itemData.item.name}</Text>
            <View style={styles.mathSolutionPart}>
              <View>
                <Text>Solution:</Text>
                </View>
                <View style={styles.solutionContainer}>
              <Text  style={styles.solutionText}>{itemData.item.instructor}</Text>
              </View>
              </View>

          </View>
        )}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   margin:"2%"
  },
  searchBar: {
    fontSize: 25,
    width: '100%',
    height:50,
    backgroundColor: 'white',
  },
  textItem:{
    marginTop:"5%",
    
  },
  allItem:{
   
    marginBottom:"5%"
  },
  mathTitle:{
    backgroundColor: "#fffafa",
    fontSize:20
  },
  mathSolutionPart:{
    fontSize:15,
    marginTop:"2%"
    
  },
  mathNumber:{
    backgroundColor:'#99ff33'
  },
  solutionContainer:{
    borderWidth: 0,
    borderRadius: 2,
    borderColor: '#fffaf0',
    borderBottomWidth: 0,
    shadowColor: '#fffaf0',
    
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding:10

   
  },
  solutionText: {
    fontSize:20
  }
});

export default App;