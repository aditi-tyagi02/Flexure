import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HistoryScreen = ({ route, navigation }) => {
  const { selectedEmojis } = route.params || {};  // Retrieve selected emojis from navigation params

  // Filter for only happy emoji exercises
  const happyExercises = Object.keys(selectedEmojis).filter(
    (exerciseId) => selectedEmojis[exerciseId] === '😊'
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Completed Goals</Text>
      </View>
      
      {/* Show happy exercises */}
      <ScrollView style={styles.content}>
        {happyExercises.length > 0 ? (
          happyExercises.map((exerciseId) => (
            <View key={exerciseId} style={styles.exerciseEntry}>
              <Text>Exercise {exerciseId}</Text>
              <Text>😊</Text>
            </View>
          ))
        ) : (
          <Text>No exercises marked as completed with a happy emoji yet!</Text>
        )}
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerIcon}>↤</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={styles.footerIcon}>✔</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Settings')}>
          <Text style={styles.footerIcon}>✎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8DC', // Updated background color
  },
  header: {
    padding: 20,
    backgroundColor: '#E7CCCC', // Navbar color for top
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9A552C',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  exerciseEntry: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#E7CCCC', 
  },
  footerIcon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HistoryScreen;
