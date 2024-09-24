import React, { useState } from 'react'; 
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedEmojis, setSelectedEmojis] = useState({});

  const exercises = [
    { id: 1, name: 'Exercise 1', image: require('./a.png') },
    { id: 2, name: 'Exercise 2', image: require('./b.png') },
    { id: 3, name: 'Exercise 3', image: require('./c.png') },
    { id: 4, name: 'Exercise 4', image: require('./d.png') },
    { id: 5, name: 'Exercise 5', image: require('./e.png') },
    { id: 6, name: 'Exercise 6', image: require('./f.png') },
    { id: 7, name: 'Exercise 7', image: require('./a.png') },
    { id: 8, name: 'Exercise 8', image: require('./a.png') },
  ];

  const handleEmojiPress = (exerciseId, emoji) => {
    setSelectedEmojis((prev) => ({ ...prev, [exerciseId]: emoji }));
  };

  const navigateToHistory = () => {
    navigation.navigate('History', { selectedEmojis });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>Strength today, relief tomorrow!</Text>
          <Text style={styles.goalsText}>Today's Goals</Text>
        </View>

        <ScrollView contentContainerStyle={styles.gridContainer}>
          {exercises.map((exercise) => (
            <View key={exercise.id} style={styles.card}>
              <Image source={exercise.image} style={styles.cardImage} />
              <View style={styles.cardButtons}>
                <TouchableOpacity style={styles.emojiButton} onPress={() => handleEmojiPress(exercise.id, '😊')}>
                  <Text>😊</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emojiButton} onPress={() => handleEmojiPress(exercise.id, '😞')}>
                  <Text>😞</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Text>🖤</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Text style={styles.navIcon}>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToHistory}>
            <Text style={styles.navIcon}>✔</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.navIcon}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EDE8DC',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  quoteContainer: {
    padding: 20,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9A552C',
  },
  goalsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#9A552C',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 20,
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  emojiButton: {
    padding: 10,
    backgroundColor: '#EDE8DC', // Emoji button background
    borderRadius: 5,
    marginHorizontal: 5,
  },
  favoriteButton: {
    padding: 10,
    backgroundColor: '#EED4C3', // Updated heart button background color
    borderRadius: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E7CCCC', // Navbar color
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HomeScreen;
