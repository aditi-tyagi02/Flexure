import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

const HealthHistoryPreferences = ({ navigation }) => {
  const [hasBackPain, setHasBackPain] = useState(false);
  const [exerciseTypes, setExerciseTypes] = useState({
    strength: false,
    stretching: false,
    cardio: false,
  });

  const toggleExerciseType = (type) => {
    setExerciseTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ fontWeight: 'bold' }}>Frustrated with the cycle of pain and rest?</Text>
      </Text>
      <Text style={styles.subtitle}>Break the cycle with targeted exercises!</Text>

      <Text style={styles.question}>Do you have a history of back pain?</Text>
      <Switch value={hasBackPain} onValueChange={setHasBackPain} />
      
      <Text style={styles.question}>Preferred Exercise Types:</Text>
      {['strength', 'stretching', 'cardio'].map(type => (
        <View key={type} style={styles.checkboxContainer}>
          <Switch 
            value={exerciseTypes[type]} 
            onValueChange={() => toggleExerciseType(type)} 
          />
          <Text>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        </View>
      ))}
      
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="Skip" 
            onPress={() => navigation.navigate('NotificationPreferences')} 
            color="#000" 
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Next" 
            onPress={() => navigation.navigate('NotificationPreferences')} 
            color="#000" 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EDE8DC',
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
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default HealthHistoryPreferences;
