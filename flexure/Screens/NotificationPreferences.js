import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NotificationPreferences = ({ navigation }) => {
  const [frequency, setFrequency] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../Screens/kl.png')} style={styles.image} />
      <Text style={styles.title}>
        <Text style={{ fontWeight: 'bold' }}>Tired of feeling like you’re not progressing?</Text>
      </Text>
      <Text style={styles.subtitle}>Weekly updates will keep you motivated!</Text>

      <Text style={styles.label}>Set frequency of workout/week:</Text>
      <Picker
        selectedValue={frequency}
        onValueChange={(itemValue) => setFrequency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select frequency" value="" />
        {[...Array(7).keys()].map(i => (
          <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
        ))}
      </Picker>

      <View style={styles.buttonContainer}>
        <Button
          title="Save Preferences"
          onPress={() => navigation.navigate('FinalConfirmation')}
          color="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff3e0',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default NotificationPreferences;
