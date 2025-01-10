import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import UserTypeScreen from './src/screens/UserTypeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import { RootStackParamList } from './src/types/types';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // Hiding the header for all screens
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{
              headerShown: true, // Show the header for this screen
              title: '', // Leave the title empty for only the back arrow
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;