import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordconfirm: '',
      loading:false
    };
  }
  onSignupPress = () => {
    if (this.state.password !== this.state.passwordconfirm) {
      Alert.alert('password do not match');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };
  onBackToLoginPress = () => {
    this.props.navigation.navigate('Login');
  };
  onForgotPasswordPress = () => {
    this.props.navigation.navigate('ForgetPassword');
  };

  render() {
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
          <View style={{ paddingTop: 30 }} />

          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
          <View style={{ paddingTop: 10 }} />

          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            placeholder='email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <View style={{ paddingTop: 10 }} />

          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            placeholder='password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <View style={{ paddingTop: 10 }} />

          <TextInput
            style={styles.input}
            value={this.state.passwordconfirm}
            onChangeText={text => {
              this.setState({ passwordconfirm: text });
            }}
            placeholder='confirm password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <View style={{ paddingTop: 10 }} />

          <Button title='Signup' onPress={this.onSignupPress} color='blue' />
          </>
       )}
       </View>
          <View style={{ paddingTop: 50 }} />

          <Button
            title='Back to Login'
            onPress={this.onBackToLoginPress}
            color='coral'
          />
          <View style={{ paddingTop: 50 }} />

          <Button
            title='FORGET PASSWORD'
            onPress={this.onForgotPasswordPress}
            color='red'
          />
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
