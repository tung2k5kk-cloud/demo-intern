import React, { useState } from 'react';
import { StyleSheet,View, Text, Button, ScrollView, RefreshControl } from 'react-native';



const App = () => {
  const [refershing , setRefershing] = useState(false)
  const [item,setItem] = useState([ {key:1,name:"iteam 1"},
    {key:2,name:"iteam 1"},
    {key:3,name:"iteam 2"},
    {key:4,name:"iteam 3"},
    {key:5,name:"iteam 4"},
    {key:6,name:"iteam 5"}, 
    {key:7,name:"iteam 6"},
    {key:8,name:"iteam 7"},
    {key:9,name:"iteam 8"},
    {key:10,name:"iteam 9"},
    {key:11,name:"iteam 10"}]
  )
  const onChangeNumber = () => {
    setItem([{key:12,name:"iteam12"}])
  }
  const onChangeRefreshing = () => {
    setRefershing(true)
    setItem([...item,{key:13,name:"iteam 27"}])
    setRefershing(false)
  }
  
  return (
    <View style={styles.box}>
      <ScrollView
      refreshControl={
        <RefreshControl
        refreshing= {refershing}
        onRefresh={onChangeRefreshing}
        />
      }
      >

       
      {
        item.map((key) => {
          return(
            <View style={styles.item}>
        <Text style={styles.text}>{key.name}</Text>
        </View>
          )
        }
      )
      }
      <Button title='Change Number' onPress={onChangeNumber}></Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex:1,
    flexDirection:'column',
    backgroundColor:'white'
  },
  item:{
    margin:10,
    backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:50,
    fontStyle:'italic',
  }
});

export default App;