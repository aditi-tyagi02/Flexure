import React from 'react'; 
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FavoritesScreen = ({ route }) => {
  const { favorites } = route.params || {}; // Retrieve favorites from navigation params

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorite Exercises</Text>
      </View>
      
      {/* Show favorite exercises */}
      <ScrollView style={styles.content}>
        {favorites && favorites.length > 0 ? (
          favorites.map((exercise, index) => (
            <View key={index} style={styles.exerciseEntry}>
              <Text>{exercise.name}</Text>
            </View>
          ))
        ) : (
          <Text>No favorite exercises yet!</Text> // Wrapped in <Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
  },
  header: {
    padding: 20,
    backgroundColor: '#66bb6a',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
});

export default FavoritesScreen;
