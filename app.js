import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image } from 'react-native';

export default function App() {
  const activities = [
    { key: '1', activity: 'Sports' },
    { key: '2', activity: 'Laundry' },
    { key: '3', activity: 'Classes' },
    { key: '4', activity: 'Cell meeting' },
    { key: '5', activity: 'Jogging' },
    { key: '6', activity: 'Cooking' },
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
        <View style={styles.header}>
          <Text style={styles.text}>Hello, Dev!</Text>
          <Image source={require('./assets/person.png')} style={styles.picture}/>
        </View>
        <Text style={styles.smallText}>14 tasks today</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
          />
          <Image source={require('./assets/orange.jpeg')} style={styles.orangePicture}/>
        </View>
        <Text style={styles.randomtext}>Categories</Text>
        <ScrollView horizontal style={styles.horizontalScrollView}>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>EXERCISE</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/yoga.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>STUDY</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/study.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Classes</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/class.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Driving</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/driving.jpeg')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Prayer</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/prayer.jpg')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Party</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/party.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Sports</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/sports.jpeg')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Cooking</Text>
              <Text style={styles.taskText}>12 Tasks</Text>
              <Image source={require('./assets/cooking.jpg')} style={styles.largeActivityIcon}/>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    flex: 1,
  },
  smallText: {
    fontSize: 20,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    paddingLeft: 20,
    width: 300,
    height: 49,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  orangePicture: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  randomtext: {
    marginTop: 25,
    fontSize: 25,
  },
  scrollView: {
    width: '100%',
  },
  horizontalScrollView: {
    marginTop: 10,
    paddingBottom: 10,
  },
  exerciseContainer: {
    marginRight: 15,
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
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  taskText: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },
  activityItem: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 350,
    height: 90,
  },
  activityText: {
    fontSize: 20,
    textAlign: 'center',
  },
  largeActivityIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  picture: {
    width: 50,
    height: 50,
  }
});
