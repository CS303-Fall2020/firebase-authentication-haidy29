import React from 'react';
import { StyleSheet, View, Text ,TextInput,Button, Alert,TouchableWithoutFeedback,Keyboard,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class ForgetPasswordscreen extends React.Component{ 
    constructor(props){
        super(props);
        this.state ={
            email:'',
            errormessage:null,
            loading:false

        };
      

    }
    onCreatAccountPress= () =>  {
        this.props.navigation.navigate('Signup')

    }
    onResetpasswordPress = () =>{
firebase.auth().sendPasswordResetEmail(this.state.email).then(() =>
{this.setState({errormessage:'password reset email has been sent'})
// Alert.alert('password reset email has been sent.')
}, (error) => {
Alert.alert(error.message);
});

    }
    onBackToLoginPress= () =>  {
        this.props.navigation.navigate('Login')

    }


    render(){
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
            <View style={{paddingTop:50}}/>

            <Text style={{fontWeight:'bold',fontSize:20}} >Forgot Password?</Text>
                <View style={{paddingTop:30}}/>
            <TextInput style={styles.input}
             value={this.state.email} 
             onChangeText={(text) => {this.setState({email: text})}}
             placeholder='email' 
           keyboardType='email-address'
           autoCapitalize='none'
           autoCorrect={false}/>

                <View style={{paddingTop:10}}/>
                <Text>{this.state.errormessage}</Text>
                <View style={{paddingTop:10}}/>


            <Button title='send reset email' onPress={this.onResetpasswordPress }color='blue'/>
            </>
       )}
       </View>
            <View style={{paddingTop:50}}/>
            <Button title='Signup' onPress={this.onCreatAccountPress}color='coral'/>
            <View style={{paddingTop:50}}/>

            <Button title='Back to Login' onPress={this.onBackToLoginPress} color='coral'/>
            
           
     
            </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    m:{
        marginLeft: 20,
        marginRight:20,
    },
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:2,
        borderBottomColor:'#ddd'
    }
      
});