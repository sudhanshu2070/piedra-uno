import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import PhoneInput from 'react-native-phone-number-input';
import { Picker } from '@react-native-picker/picker';
// import { CountryCode } from "react-native-country-picker-modal";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

const countries = [
  { label: 'India (+91)', value: '+91' },
  { label: 'United States (+1)', value: '+1' },
  { label: 'United Kingdom (+44)', value: '+44' },
  { label: 'Canada (+1)', value: '+1' },
  { label: 'Australia (+61)', value: '+61' },
];

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ route }) => {
  const { role } = route.params; // Accessing the role  
  const navigation = useNavigation<LoginScreenNavigationProp>(); 
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [countryCode, setCountryCode] = useState<CountryCode>("IN"); // Default country code, India (+91)
  // const [modalVisible, setModalVisible] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [selectedCode, setSelectedCode] = useState('+91'); // Default to India
  const [modalVisible, setModalVisible] = useState(false);
  const phoneInput = useRef(null);
  const phoneInputRef = useRef(null);


  const handleContinue = () => {
    if (valid) {
      navigation.navigate('OTPScreen');
    }
    else{
      alert("Please enter a valid phone number.");
    }
  };

  // const handleCountrySelect = (country: { cca2: CountryCode }) => {
  //   setCountryCode(country.cca2);
  //   setModalVisible(false);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.curve} />
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
      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCode}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCode(itemValue)}
        >
          {countries.map((country) => (
            <Picker.Item
              key={country.value}
              label={country.label}
              value={country.value}
            />
          ))}
        </Picker>
      </View>
      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.codeText}>{selectedCode}</Text>
        <TextInput
          ref={phoneInputRef}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          style={styles.textInput}
        />
      </View>

      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          (!valid || !phoneNumber) && styles.disabledButton,
        ]}
        disabled={!valid || !phoneNumber}
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
    width: '125%',
    marginBottom: 20,
    marginStart:'auto'
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
  phoneInputContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff', // White background
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light gray border
    shadowColor: '#000', // Subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  phoneTextContainer: {
    backgroundColor: 'transparent', // Keep input transparent
    borderRadius: 8,
  },
  phoneInputText: {
    fontSize: 16,
    color: '#333', // Dark gray text
  },
  codeTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333', // Dark gray code
  },
  picker: {
    height: 50,
  },
  codeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;