import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; // Import the types

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList,'SplashScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('UserTypeScreen');
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
     <Image 
     source={require('../../assets/logo.png')} // Replace with your actual logo path
     style={styles.logo}
     resizeMode="contain" // Ensures the logo maintains its aspect ratio
   />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '30%', // Makes the logo responsive
    height: undefined, // Allows height to adjust based on aspect ratio
    aspectRatio: 1, // Ensures the logo is square (adjust as per your logo's aspect ratio)
  },
});

export default SplashScreen;