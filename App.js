// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import  * as firebase from 'firebase';
import  Firebase  from './config/Firebase';
import { render } from 'react-dom';

export default class App extends React.Component {

constructor(props){
  super(props);
  this.state ={

  };
  if(!firebase.apps.length){
    firebase.initializeApp(Firebase.FirebaseConfig);
  }
}

render(){
  return (
    <Navigator/>
  )
}
}




