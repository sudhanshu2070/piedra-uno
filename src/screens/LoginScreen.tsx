import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation<LoginScreenNavigationProp>(); 


  const handleContinue = () => {
    if (phoneNumber) {
      navigation.navigate('OTPScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.curve} />
      <Text style={styles.logo}>Company</Text>
      <Text style={styles.welcomeText}>Welcome to the Company</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your mobile number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={[styles.continueButton, !phoneNumber && styles.disabledButton]}
        disabled={!phoneNumber}
        onPress={handleContinue}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        By continuing, you agree to the terms of use and privacy policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  curve: {
    width: '100%',
    height: 250,
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 80,
  },
  welcomeText: {
    fontSize: 22,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 40,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#D1D1D1',
  },
  continueText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#7A7A7A',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;