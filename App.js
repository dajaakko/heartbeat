import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState("")
  const [lowlimits, setlowlimits] = useState(0)
  const [hiLimits, sethiLimits] = useState(0)

  function calculate() {
    var number= 220
    var lower = ((number-age)*0.65)
    setlowlimits(lower)
    var higher=((number-age)*0.85)
    sethiLimits(higher)
  }

  return (
    <View style={styles.container}>
      <Text>Set your Age</Text>
      <TextInput style ={styles.textinputs} value={age} onChangeText={text => setAge(text)} keyboardType="decimal-pad" />
       
      <Text>Limits</Text>
      <Text style= {styles.textmod}>{lowlimits.toFixed(0)} - {hiLimits.toFixed(0)}</Text>
      <Button 
      title="Calculate" 
      onPress={calculate}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:40,
    marginTop:50,
  },
  textinputs: {
   
    backgroundColor: '#D3D3D3',
    marginTop:20,
    marginBottom:20,
    height:20,
    width:40,
   
    },

    textmod: {
      marginTop:20,
      marginBottom:40,
    }
  
});
