
    
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Dev!</Text>
      <Text style={styles.smallText}>14 tasks today</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
      />
      <Text style={styles.randomtext}>Categories</Text>
      <TextInput
        style={styles.exercise} 
        placeholder="EXERCISE"
        <Text>12 Tasks</Text>
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 52,
  },
  text: {
    textAlign: 'left',
    fontSize: 40,
  },
  smallText: {
    textAlign: 'left',
    fontSize: 20,
  },
  textInput: {
    marginTop: 50, 
    paddingLeft: 20,
    width: 353,
    height: 49,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  randomtext: {
    marginTop: 25,
    fontSize: 25,
  },
  exercise: { 
    marginTop: 10,
    paddingLeft: 5,
    width: 150, 
    height: 150, 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    textAlign:"center",
  }
});
