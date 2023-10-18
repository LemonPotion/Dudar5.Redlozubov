import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function ListItem({ el }: { el: { text: string } }) {
  return (
    <TouchableHighlight>
      <Text style= {styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:
  {
    padding:20,
    textAlign: 'center',
    borderRadius:5,
    backgroundColor: '#fafafa',
    borderWidth:1,
    marginTop:20,
    width: '60%',
    marginLeft:'20%',
    color:'red',
    fontStyle:'italic'
  }
});
