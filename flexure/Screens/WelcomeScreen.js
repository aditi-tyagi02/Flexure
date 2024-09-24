import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Display the image */}
      <Image source={require('./home.jpg')} style={styles.image} />

      {/* Display the heading */}
      <Animated.Text style={styles.heading}>
        Welcome to Flexure! 
      </Animated.Text>
      <Text style={styles.head}>
      Cure your back pain with personalized exercises.
      </Text>

      {/* "Get Started" button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eed4c3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#9a552c',
    marginBottom: 10,
  },
  head: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#9a552c',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9a552c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;