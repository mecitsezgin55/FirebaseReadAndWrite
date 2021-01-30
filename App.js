
import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

import { FirebaseWrite } from "./src/FirebaseWrite";


const App = () =>{
  return(
      <View style={myStyle.container}>
          <Text>sdfsdf</Text>

          <FirebaseWrite />
      </View>
  );
};

const myStyle = StyleSheet.create({
  container:{
      flex:1
  }
});
export {App};