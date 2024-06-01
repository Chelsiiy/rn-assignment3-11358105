import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const activities = [
    { key: '1', activity: 'Sports' },
    { key: '2', activity: 'Laundry' },
    { key: '3', activity: 'Classes' },
    { key: '4', activity: 'Cell meeting' },
    { key: '5', activity: 'Jogging' },
    { key: '6', activity: 'cooking' },
    { key: '7', activity: 'Archery' },
    { key: '8', activity: 'Gaming' },
    { key: '9', activity: 'Planting' },
    { key: '10', activity: 'Cleaning' },
    { key: '11', activity: 'Studying' },
    { key: '12', activity: 'Playing' },
    { key: '13', activity: 'Sleeping' },
    { key: '14', activity: 'Golfing' },
    { key: '15', activity: 'Watching movies' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView vertical style={styles.scrollView}>
        <Text style={styles.text}>Hello, Dev!</Text>
        <Text style={styles.smallText}>14 tasks today</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
        />
        <Text style={styles.randomtext}>Categories</Text>
        <ScrollView horizontal style={styles.horizontalScrollView}>
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
          </View>
          <View style={styles.exerciseContainer}>
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
        <FlatList
          data={activities}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>{item.activity}</Text>
            </View>
          )}
        />
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
  scrollView: {
    marginTop: 10,
  },
  horizontalScrollView: {
    marginTop: 10,
  },
  exerciseContainer: {
    marginTop: 10,
    paddingRight: 15,
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
    textAlign: "left",
  },
  exerciseText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "left",
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
  activityItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:10,
    height:5,
  },
  activityText: {
    fontSize: 18,
  },
});

