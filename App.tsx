import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import logo1 from './assets/egg.images/egg01.png';
import logo2 from './assets/egg.images/egg02.png';
import logo3 from './assets/egg.images/egg03.png';
import monster1 from './assets/attak1.png'
import monster2 from './assets/spartcamp.png'
import monster3 from './assets/ritch02.png'

// エッグイメージ
let imgArry = [logo1,logo2,logo3];
let imgNum = imgArry.length
let msg = ""
let resultImasge = imgArry[imgNum] || rand

// 生まれてくるモンスターの配列
let monster = [monster1,monster2,monster3];
var rand = monster[ Math.floor( Math.random() * monster.length ) ] ;

// エッグ画像表示の配列
export default function App() {
  var [count, setCount] = useState(100);
  resultImasge = imgArry[0];

  if (count <= 50 && count > 0) {
    resultImasge = imgArry[1];
  }
  if (count <= 0) {
    resultImasge = rand;
  } 

  // コメント
  if (count === 75) {
    msg = "残り75";
  }else if (count === 50) {
    msg = "あと半分";
  }else if (count === 25) {
    msg = "あとすこし！";
  }else if (count === 0) {
    msg = "モンスターが生まれました🐣";
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setCount((current) => current - 1);
        }}
      >
        <Text style={{ color: "#195", fontSize: 18 }}>{count}</Text>
        <StatusBar style="auto" />

        <Image
          source={resultImasge}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
        />
        <Text>{msg}</Text>
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