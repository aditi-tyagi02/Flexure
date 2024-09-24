import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (isSignUp) {
      // Simulate signup logic
      if (!username || !email || !password) {
        setErrorMessage('Please fill all fields');
      } else {
        Alert.alert('Success', `Signed up with ${username}`);
        // Navigate to UserProfileSetup after successful signup
        navigation.navigate('UserProfileSetup');
        // Clear fields
        setUsername('');
        setEmail('');
        setPassword('');
      }
    } else {
      // Simulate login logic
      if (!email || !password) {
        setErrorMessage('Please fill all fields');
      } else {
        Alert.alert('Success', `Logged in with ${email}`);
        // Navigate to UserProfileSetup after successful login
        navigation.navigate('UserProfileSetup');
        // Clear fields
        setEmail('');
        setPassword('');
      }
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password recovery not implemented');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#9a552c' }}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {isSignUp && (
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={{ borderWidth: 1, borderColor: '#9a552c', padding: 10, marginVertical: 10, borderRadius: 5, placeholderTextColor: "#FFFFFF" }}
        />
      )}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#9a552c', padding: 10, marginVertical: 10, borderRadius: 5, placeholderTextColor: "#FFFFFF" }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#9a552c', padding: 10, marginVertical: 10, borderRadius: 5, placeholderTextColor: "#FFFFFF" }}
      />

      <Button title={isSignUp ? 'Sign Up' : 'Login'} onPress={handleSubmit} color="#9a552c" />

      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
        </Text>
      </TouchableOpacity>

      {!isSignUp && (
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#eed4c3',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  toggleText: {
    color: '#9a552c',
    textAlign: 'center',
    marginVertical: 10,
  },
  forgotPassword: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AuthScreen;