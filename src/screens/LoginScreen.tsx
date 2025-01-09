import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal, FlatList, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import { Ionicons } from '@expo/vector-icons'; // For the dropdown arrow icon
import { countries } from '../utils/Countries';

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
    // Allow only numbers
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const handleContinue = () => {

    // Validate phone number for non-numeric characters
    if (/[^0-9]/.test(phoneNumber)) {
      Alert.alert('Invalid Input', 'Please enter numbers only.');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Empty Field', 'Please enter your phone number.');
      return;
    }

    
    if (phoneNumber) {
      Alert.alert('Success', `Your phone number is ${phoneNumber}`);
      
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

        <View style={styles.phoneInputWrapper}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.codeContainer}>
            <Text style={styles.codeText}>{countryCode}</Text>
            <Ionicons name="caret-down" size={20} color="#666" style ={styles.iconDownArrow}/>
          </TouchableOpacity>
          
          {/* Phone number input field */}
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

        {/* Country Code Modal */}
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
          (!phoneNumber) && styles.disabledButton,
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
    bottom: 90,
  },
  logoText: {
    fontSize: 17,
    color: '#FF9900',
    bottom: 120,
    left: 1,
  },
  welcomeText: {
    fontSize: 22,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
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
    fontWeight: '500',
    color: '#333333',
    textAlign: 'left',
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 40,
    width: '100%',
    marginBottom: 20,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  codeContainer: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 16,
    color: '#333',
    fontWeight:'500'
  },
  continueButton: {
    backgroundColor: '#F58320',
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
    marginEnd: 85,
    alignItems:'baseline'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  countryItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  countryText: {
    fontSize: 16,
    color: '#333',
  },
  phoneInputWithCountryCode: {
    height: 40,
    fontSize: 16,
    color: '#333',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  phoneInputContainer: {
    flex: 1,
    height:50,
  },
  iconDownArrow:{
    marginStart:10,
    // paddingEnd:100,
  },
});

export default LoginScreen;