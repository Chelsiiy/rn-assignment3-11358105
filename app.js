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
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>EXERCISE</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>STUDY</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Classes</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Production</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Prayer</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View><View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Party</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
          </View>
          <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Sports</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.exerciseContainer}>
          <View style={styles.exercise}>
            <Text style={styles.exerciseText}>Cooking</Text>
            <Text style={styles.taskText}>12 Tasks</Text>
          </View>
        </View>
       
      </ScrollView>
      <Text style={styles.randomtext}>Ongoing Activities</Text>
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
  scrollView: {
    marginTop: 10,
  },
  exerciseContainer: {
    marginTop: 10,
    paddingRight:15,
  },
  exercise: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    textAlign:"left",
  },
  exerciseText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"left",
  },
  taskText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  taskCount: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
