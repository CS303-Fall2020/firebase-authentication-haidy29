import React, { useState , useEffect ,Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  CheckBox,
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoitem';
import AddTodo from '../components/addtodo';
import Sandbox from '../components/sandbox';

export default function App({ navigation }) {
  // const [todos, setTodos] = useState([
  //   { text: 'buy coffee', key: '1',completed: false },
  //   { text: 'create an app', key: '2' ,completed: false},
  //   { text: 'play on the switch', key: '3',completed: false }
  // ]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] =useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then(response => response.json())
    .then(response => {
      setTodos(response),
      setLoading(false);
    })
    .catch(e => {
      console.error(e);
    })
  },[]);
  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);

    });
  };
  const submitHandler = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        return [{ title: title, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todo must over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  const Refresh = async () => {
    setLoading(!loading);
    return  fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then(response => response.json())
    .then(response => {
      setTodos(response),
      setLoading(false);
    })
    .catch(e => {
      console.error(e);
    })
  
  }
  // const pressHandler1 = () => {
  //   navigation.navigate('ReviewDetails')
  //  //navigation.push('ReviewDetails')

  // }
  const pressHandler3 = id => {
  setTodos(prevTodos=> {
    return prevTodos.filter(todo => {
    if((todo.id !=id)== false){
      todo.completed = !todo.completed;
    }
    return true;
  })
  })
}

  const pressHandler2 = (item) => {
    navigation.navigate('ReviewDetails',{item,edit})
   //navigation.push('ReviewDetails')

  }
  const edit = (id,title)=>{
    setTodos(prevTodos=> {
      return prevTodos.filter(todo => {
      if((todo.id !=id)== false){
        todo.title = title;
      }
      return true;
    })
    })
navigation.navigate('Home');
  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dimissed keyboard');
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {(loading)?(
              <ActivityIndicator size= 'large' color ='coral'/>

            )
            :(
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} 
                pressHandler={pressHandler}
                //pressHandler1={pressHandler1} 
                pressHandler2={pressHandler2} 
                pressHandler3={pressHandler3} 
                edit={edit}

                 />
              )}
            />
            )}
          </View>
        </View>
        {/* <Button title='go to review dets' onPress={pressHandler2} /> */}
        <Button title='Refresh' color='coral'onPress={Refresh} />

      </View>
    </TouchableWithoutFeedback>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
