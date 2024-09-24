import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import AuthScreen from './Screens/AuthScreen';
import UserProfileSetup from './Screens/UserProfileSetup';
import HealthHistoryPreferences from './Screens/HealthHistoryPreferences';
import NotificationPreferences from './Screens/NotificationPreferences';
import FinalConfirmation from './Screens/FinalConfirmation';
import HomeScreen from './Screens/HomeScreen';
import HistoryScreen from './Screens/HistoryScreen';
import FavoritesScreen from './Screens/FavoritesScreen'; 


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserProfileSetup" component={UserProfileSetup} options={{ headerShown: false }} />
        <Stack.Screen name="HealthHistoryPreferences" component={HealthHistoryPreferences} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationPreferences" component={NotificationPreferences} options={{ headerShown: false }} />
        <Stack.Screen name="FinalConfirmation" component={FinalConfirmation} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Favourite" component={FavoritesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
