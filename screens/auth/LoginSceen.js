import React from 'react';
import { StyleSheet, View, Text, TextInput ,Button,Alert,TouchableWithoutFeedback,Keyboard,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
export default class LoginSceen extends React.Component{ 
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            loading:false
        };
      

    }
    onLoginPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() =>{ this.setState({loading:true});
        setTimeout(() => {this.setState({loading:false}),1000});
    },
        (error) =>{
            Alert.alert(error.message)
        }
        ) 

    }
    onCreatAccountPress= () =>  {
        this.props.navigation.navigate('Signup')

    }
    onForgotPasswordPress=()=>{
        this.props.navigation.navigate('ForgetPassword')

    }
    render(){
        return ( 
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed keyboard');

            }}
            >
            <View style={styles.m} >
                <View>
               {this.state.loading ?(
              <ActivityIndicator size= {60}/>
              ) :(
                   <>
            <View style={{paddingTop:50}}/>

                 <Text style={{fontWeight:'bold',fontSize:20}} >Login</Text>
                <View style={{paddingTop:30}}/>

       <TextInput 
        style={styles.input}
         value={this.state.email} 
         placeholder='email' 
         keyboardType='email-address'
         autoCapitalize='none'
         autoCorrect={false}
          onChangeText={(text) => {this.setState({email: text})}}/>
       <View style={{paddingTop:30}}/>

       <TextInput   
       style={styles.input} 
       value={this.state.password} onChangeText={(text) => {this.setState({password: text})}} 
       placeholder='password' 
       secureTextEntry={true}
         autoCapitalize='none'
       onChangeText={text => {
           this.setState ({password:text})
       }}/>
       <View style={{paddingTop:10}}/>

       <Button title='Login' onPress={this.onLoginPress} color='blue'/>
       </>
       )}
       </View>
       <View style={{paddingTop:50}}/>

       <Button title='sign up' onPress={this.onCreatAccountPress}color='coral'/>
       <View style={{paddingTop:50}}/>

       <Button title='Forgot password...' onPress={this.onForgotPasswordPress }color='red'  />
              
    
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
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
      
});