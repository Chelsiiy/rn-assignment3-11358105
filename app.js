import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Dev!</Text>
      <Text style={styles.smallText}>14 tasks today</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
    paddingLeft: 20,
    paddingTop: 20,
  },
  text: {
    textAlign: 'left',
    fontSize: 35,
  },
  smallText: {
    textAlign: 'left',
    fontSize: 15,
  },
});

});



