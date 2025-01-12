import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal, FlatList, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import { Ionicons } from '@expo/vector-icons'; // For the dropdown arrow icon
import { countries } from '../utils/Countries';
import Svg, { Path } from 'react-native-svg';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ route }) => {
  const { role } = route.params; // Accessing the role  
  const navigation = useNavigation<LoginScreenNavigationProp>(); 
  const phoneInputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default to India
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePhoneNumberChange = (text: string) => {
    // Allowing only numbers
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const handleContinue = () => {

    // Validating phone number for non-numeric characters
    if (/[^0-9]/.test(phoneNumber)) {
      Alert.alert('Invalid Input', 'Please enter numbers only.');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Empty Field', 'Please enter your phone number.');
      return;
    }
    
    if (phoneNumber) { 
      // Extracting the last four digits of the phone number
      const lastFourDigits = phoneNumber.slice(-4);

      navigation.navigate('OTPScreen', { last4Digits : lastFourDigits});
    }
  };

  const handleCountrySelect = (code: any) => {
    setCountryCode(code);
    setModalVisible(false);
  };

  return (
<View style={styles.container}>
  {/* Top Wave Section */}
  <View style={styles.topSection}>
    <Svg height="100%" width="340%" viewBox="180 50 1440 320" style={styles.wave}>
      <Path
        fill="#CCFFCC"
        d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,245.3C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </Svg>
    <Image 
      source={require('../../assets/Bharatgrow_symbol.png')} 
      style={styles.logo}
      resizeMode="contain" 
    />
    <Text style={styles.logoText}>Bharat Grow</Text>
  </View>

  {/* Card Section */}
  <View style={styles.card}>
    <Text style={styles.welcomeText}>Welcome {role}, to the Company</Text>

    <View style={styles.lineContainer}>
      <View style={styles.line} />
      <Text style={styles.loginSignupText}>Login/ Signup</Text>
      <View style={styles.line} />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.aadhaarText}>Enter Aadhaar-linked mobile number</Text>

      <View style={styles.phoneInputWrapper}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.codeContainer}>
          <Text style={styles.codeText}>{countryCode}</Text>
          <Ionicons name="caret-down" size={20} color="#666" style={styles.iconDownArrow} />
        </TouchableOpacity>

        <View style={styles.phoneInputContainer}>
          <TextInput
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            style={styles.phoneInputWithCountryCode}
            ref={phoneInputRef}
          />
        </View>
      </View>

      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleCountrySelect(item.code)}
                >
                  <Text style={styles.countryText}>{`${item.name} (${item.code})`}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>

    <TouchableOpacity
      style={[
        styles.continueButton,
        !phoneNumber && styles.disabledButton,
      ]}
      disabled={!phoneNumber}
      onPress={handleContinue}
    >
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>

    <Text style={styles.footerText}>
      By Continuing, you agree to BharatGrow's Terms of Use and Privacy Policy
    </Text>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logo: { 
    width: '15%', 
    height: undefined, 
    aspectRatio: 0.45,
    top: 65,
  },
  logoText: {
    fontSize: 17,
    color: '#FF9900',
    top: 35,
    left: 1,
  },
  card: {
    flex: 0.7,
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  loginSignupText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    marginVertical: 20,
  },
  aadhaarText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeContainer: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    marginRight: 10,
  },
  codeText: {
    fontSize: 16,
    color: '#333',
  },
  phoneInputContainer: {
    flex: 1,
  },
  phoneInputWithCountryCode: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#FF9900',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#DDD',
  },
  continueText: {
    color: '#FFF',
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  countryItem: {
    paddingVertical: 10,
  },
  countryText: {
    fontSize: 16,
  },
  iconDownArrow:{
    marginStart:10,
  },
});


export default LoginScreen;