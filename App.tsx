import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [name,setName] = useState("");
  const [submit,setSubmit] = useState(false);
  const onChangeSubmit = () => {
    setSubmit(!submit)
  }


  return (
    <View style={styles.box}>
      <Text style={styles.title}>Enter your name</Text>
      <TextInput multiline style={styles.textinput}
      placeholder='eg Do HUU TUNG'
      onChangeText={(value)=>setName(value)}
      />
      
      {/* <Button title='Submit' onPress={onChangeSubmit}></Button> */}
      <TouchableOpacity style={styles.button} onPress={onChangeSubmit}>
        <Text style={styles.title}>{submit ? "Clear" : "Submited"}</Text>
      </TouchableOpacity>
      {submit ?
      <Text style={styles.title}> Your name is {name}</Text>
      : null
       }
      
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 20,
    color: '#0f172a',
    marginBottom: 12,
  },
  textinput:{
    fontSize:15,
    borderWidth:1,
    borderRadius:5,
  },
  button:{
    alignItems:'center',
    width:200,
    backgroundColor:'green'
  }
});

export default App;