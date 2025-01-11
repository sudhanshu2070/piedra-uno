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
            d='M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,245.3C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          />
        </Svg>
        <Image 
            source={require('../../assets/Bharatgrow_symbol.png')} 
            style={styles.logo}
            resizeMode="contain" 
        />
         <Text style={styles.logoText}>Bharat Grow</Text>
      </View>
      {/* <Text style={styles.welcomeText}>Welcome {role}, to the Company</Text> */}

      {/* <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.loginSignupText}>Login/ Signup</Text>
        <View style={styles.line} />
      </View> */}

      {/* <View style={styles.inputContainer}>
        <Text style={styles.aadhaarText}>Enter Aadhaar-linked mobile number</Text>

        <View style={styles.phoneInputWrapper}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.codeContainer}>
            <Text style={styles.codeText}>{countryCode}</Text>
            <Ionicons name="caret-down" size={20} color="#666" style ={styles.iconDownArrow}/>
          </TouchableOpacity> */}
          
          {/* Phone number input field */}
          {/* <View style={styles.phoneInputContainer}>
            <TextInput
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={styles.phoneInputWithCountryCode}
              ref={phoneInputRef}
            />
          </View>
        </View> */}

        {/* Country Code Modal */}
        {/* <Modal visible={isModalVisible} transparent>
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
      </View> */}

      {/* <TouchableOpacity
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
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // padding: 16,
  },
  topSection: {
    flex: 0.3,
    height:'240%',
    // position: 'relative',
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
    top:65,
  },
  logoText: {
    fontSize: 17,
    color: '#FF9900',
    top:35,
    left:1,
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