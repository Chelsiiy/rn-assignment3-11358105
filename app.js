
    
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

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
      <ScrollView>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="EXERCISE"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="STUDY"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="PRAYER"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="EATING"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="OUTINGS"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      <View style={styles.exerciseContainer}>
        <View style={styles.exercise}>
          <TextInput
            placeholder="JOGGING"
          />
          <Text style={styles.taskText}>12 Tasks</Text>
        </View>
      </View>
      </ScrollView>
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
  exerciseContainer: {
    marginTop: 10,
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
  },
 
  taskText: {
    fontSize: 16,
    color: 'gray',
  },
});
