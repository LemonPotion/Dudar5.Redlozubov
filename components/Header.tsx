import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() { 
  return (
    <View style={styles.main}>
      <Text style= {styles.text}>Task List</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  main:
  {
    paddingTop: 60,
    height:100,
    backgroundColor:"silver"
  },
  text:
  {
    fontSize:18,
    color:'red',
    fontStyle:'italic'
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
