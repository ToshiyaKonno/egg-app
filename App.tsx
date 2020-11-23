import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import logo1 from './assets/egg.images/egg01.png';
import logo2 from './assets/egg.images/egg02.png';
import logo3 from './assets/egg.images/egg03.png';

let imgArry = [logo1,logo2,logo3];
var imgNum = imgArry.length

export default function App() {
  var [count, setCount] = useState(10);
  
  
  imgNum = 1;
  
  if (count == 5) {
    imgNum += 1;
  } else if (count == 0) {
    imgNum += 1;
  }; 
  
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setCount((current) => current - 1);
        }}
        >
        <Image
          source={imgNum}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
          />

      <Text>{count}</Text>
      <StatusBar style="auto" />
      </Pressable>
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


// switch(imgNum) {
//   case count = 5:
//     imgNum = +1;
//     break;
//   case count = 0 :
//     imgNum = + 1;
//     break;
//     default:
// }