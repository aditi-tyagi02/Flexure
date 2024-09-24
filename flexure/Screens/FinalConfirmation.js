import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const FinalConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./ugh.png')} // Ensure the image path is correct
        style={styles.image}
      />
      <Text style={styles.title}>Sick of hearing “Take rest”?</Text>
      <Text style={styles.subtitle}>
        It’s time for a proactive approach to back pain!
      </Text>

      <Button 
        title="Let's Get Started" 
        onPress={() => navigation.navigate('Home')}
        color="#9a552c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eed4c3',
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9a552c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9a552c',
    marginBottom: 30,
  },
});

export default FinalConfirmation;
