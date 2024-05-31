import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <br> <Text style={styles.text}>Hello, Dev!</Text> </br>
      <text style={styles.Smalltext}> 14 tasks today</text> ,
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end', 
    justifyContent: 'center',
  },
  text: {
    textAlign: 'left',
    fontSize:40 ,
  },
});



