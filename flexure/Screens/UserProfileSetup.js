import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UserProfileSetup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');

  const handleNext = () => {
    // You could save the data here or pass it to the next screen
    navigation.navigate('HealthHistoryPreferences');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('./scream.png')} style={styles.image} />
        <Text style={styles.title}>
          <Text style={{ fontWeight: 'bold' }}>Back pain got you down?</Text>
        </Text>
        <Text style={styles.subtitle}>Let’s turn that annoyance into action!</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Height (cm)"
          value={height}
          onChangeText={setHeight}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Weight (kg)"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
          keyboardType="numeric"
        />
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <TextInput
          placeholder="Fitness Goal"
          value={goal}
          onChangeText={setGoal}
          style={styles.input}
        />
        <Button title="Next" onPress={handleNext} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EDE8DC',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default UserProfileSetup;
