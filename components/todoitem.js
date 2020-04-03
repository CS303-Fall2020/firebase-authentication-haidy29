import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,CheckBox} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function TodoItem({ item ,pressHandler,pressHandler2,pressHandler3,edit}) {
  return (
    <TouchableOpacity onPress={()=> pressHandler2(item,edit)}>
      <View style={styles.item}> 
      <TouchableOpacity onPress={()=> pressHandler(item.id)}>

      <MaterialIcons name='delete' size={18} color='#333'/>
      </TouchableOpacity>
      <View style={styles.itemText}>
      <Text style={Boolean(item.completed)&&{textDecorationLine:'line-through'}}>{item.title}</Text>
      </View>
      <CheckBox value ={item.completed} onChange={()=>pressHandler3(item.id)}/>
      </View>
    </TouchableOpacity>
  )
 }

 const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    flex:1

  },
  itemText: 
  {
    marginLeft: 10,
    width: 160

  }
})
