import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';

export default class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: '' ,loading:false};
  }
  onSignout = () => {
    firebase.auth().signOut();
  };
  render() {
    const { currentUser } = firebase.auth();
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log('dismissed keyboard');
        }}
      >
        <View style={styles.m}>
        <View>
               {this.state.loading ?(
              <ActivityIndicator size= {60}/>
              ) :(
                  <>
        <View style={{paddingTop:150}} />

          <Text style={styles.m}> Hello {currentUser.email}</Text>
          <View style={{paddingTop:150}} />
          <Button title='SignOut' color='red' onPress={this.onSignout} />
          </>
  )}
  </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
} 

const styles = StyleSheet.create({
  m:{
      marginLeft: 20,
      marginRight:20,
  },
input: {
  marginBottom: 10,
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd'
}
});