
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


class FirebaseWrite extends Component{

    componentDidMount(){
        database()  // okuma
            .ref('/users/123')
            .set({
                name: 'Ada Lovelace',
                age: 31,
        })
        .then(() => console.log('Data set.'));


        database() //yazma
            .ref('/users/123')
            .once('value')
            .then(snapshot => {
                console.log('User data: ', snapshot.val());
        });
    }

    render() {
        return(
            <View>
                <Text>Write</Text>
            </View>
        );
    }
}

const myStyle = StyleSheet.create({
  container:{
      flex:1
  }
});
export {FirebaseWrite};