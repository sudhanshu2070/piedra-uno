import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import UserTypeScreen from './src/screens/UserTypeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import { RootStackParamList } from './src/types/types';
import { View } from 'react-native';
import ProgressBar from './src/components/ProgressBar';
import { BackButton } from './src/components/BackButton';
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
            headerShown: true,
            title: '', // No title for the header
            headerLeft: () => (
              <View style={{ flexDirection: 'row', alignItems:'center', paddingLeft: 30 }}>
                {/* Custom back button */}
                <BackButton/>
              </View>
            ),
            headerRight:() =>(
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight:'12%' }}>                
                {/* Progress Bar */}
                <ProgressBar steps={4} currentStep={2} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;