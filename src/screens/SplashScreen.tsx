import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; 

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList,'SplashScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('UserTypeScreen');
    }, 2000); // Navigating after 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
     <Image 
     source={require('../../assets/logo.png')} 
     style={styles.logo}
     resizeMode="contain" 
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
    width: '30%', 
    height: undefined, 
    aspectRatio: 1, 
  },
});

export default SplashScreen;