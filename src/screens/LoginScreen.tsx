import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ route }) => {
  const { role } = route.params; // Accessing the role  
  const navigation = useNavigation<LoginScreenNavigationProp>(); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>("IN"); // Default country code, India (+91)
  const [modalVisible, setModalVisible] = useState(false);

  const handleContinue = () => {
    if (phoneNumber) {
      navigation.navigate('OTPScreen');
    }
  };

  const handleCountrySelect = (country:any) => {
    setCountryCode(country.CountryCode);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.curve} />
      {/* <Text style={styles.logo}>Company</Text> */}
      <Image 
          source={require('../../assets/Bharatgrow_symbol.png')} 
          style={styles.logo}
          resizeMode="contain" 
      />
      <Text style={styles.logoText}>Bharat Grow</Text>
      <Text style={styles.welcomeText}>Welcome {role}, to the Company</Text>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.loginSignupText}>Login/ Signup</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.aadhaarText}>Enter Aadhaar-linked mobile number</Text>
      <View style={styles.countryInputContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.countryCodeButton}>
            <Text style={styles.countryCodeText}>+91</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>
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

    {/* Country Code Picker Modal */}
    <CountryPicker
        withFilter
        withFlag
        withCountryNameButton
        countryCode='IN'
        onSelect={handleCountrySelect}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
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
    backgroundColor: '#E5FFEF',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: '15%', 
    height: undefined, 
    aspectRatio: 0.45,
    // top:1,
    bottom:90
  },
  logoText: {
    fontSize: 17,
    color: '#FF9900',
    // top:35,
    bottom:120,
    left:1,
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
   countryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#007BFF',
    marginBottom: 10,
  },
  countryCodeButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  countryCodeText: {
    fontSize: 16,
    color: '#007BFF',
  },
  input: {
    height: 50,
    width: '80%',
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
    textAlign: 'left',
    // left:0,
    right:30
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    color:'#666C8933',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loginSignupText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '400',
    color: '#3D495B',
  },
  aadhaarText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#333333',
    textAlign:'left',
    bottom:10
  },
});

export default LoginScreen;
//++4