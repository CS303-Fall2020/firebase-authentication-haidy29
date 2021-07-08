import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    TextInput,
  } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    const[title,setTitle]=useState(navigation.getParam('item').title)
    const changeHandler = val => {
        setTitle(val);
    }
    const f =navigation.getParam('edit');
return(
    <View> 
    <TextInput 
         style={globalStyles.container}
         value={title =='' ?navigation.getParam('item').title:title}
         onChangeText={(title)=>changeHandler(title)}
         multiline={true}
         />
         {/* <Text>{ navigation.getParam('item'.title)}</Text> */}
         <Button onPress={()=> f(navigation.getParam('item').id,title)} title ='Done' color='coral'/> 
    </View>
)}

