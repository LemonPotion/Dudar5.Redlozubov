import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import React , {useState} from 'react';
export default function App() {
  const [listofItems,setListOfItems] = useState([
    {text: 'Buy milk', index:1},
    {text: 'Wash car', index:2},
    {text: 'Buy potatoes', index:3},
    {text: 'Becoma a millioneir', index:4},
  ])

  const addHandler = (text: string) => {
    setListOfItems((list) => {
      return [
        { text, index: 5 },
        ...list
      ];
    });
  }
  
  return (
    <View >
      <Header />
      <Form addHandler={addHandler} />

      <View>
          <FlatList data={listofItems} renderItem={( { item} )=> (
             <ListItem el= {item}/>
          )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
