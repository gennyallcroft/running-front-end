import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [distance, setDistance] = useState('');

 function postRoutesData() {
      console.log("coming into postroutesdata");

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({"route":{"distance":distance}});
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://running.loca.lt/routes", requestOptions)  
      .then(response => response.json())
      .then(data => console.log(data));
     
 }



  return (

  //   <FlatList
  //   data={distance}
  //   contentContainerStyle={styles.container}
  //   keyExtractor={item => item.name}
  //   renderItem={({item})=> <Text style={styles.text}>{item.name}</Text>}
  // />

    
    <View style={styles.container}>
      <Text> Runnning Routes </Text>
      <Text> How far do you want to run? </Text>
      <TextInput
        style={{height: 40}}
        placeholder="How long's your run today?"
        onChangeText={distance => setDistance(distance)}
        defaultValue={distance}
      />
       <Text> You want to run {distance} miles </Text>
      <StatusBar style="auto" />

      <Button
      onPress={postRoutesData}
      title="Let's go mofo"
      color="#841584"
      accessibilityLabel="Let's go!"
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
