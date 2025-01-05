import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; 
import { RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

type UserTypeNavigationProp = StackNavigationProp<RootStackParamList,'UserTypeScreen'>;

const UserTypeScreen = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null); //Tracking selected role
  const navigation = useNavigation<UserTypeNavigationProp>(); 

  // Handle role selection
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };
  
  // Handle continue button press
  const handleContinue = () => {
    if (selectedRole) {
      // navigation.navigate('LoginScreen'); // Navigating to LoginScreen
      navigation.navigate('LoginScreen', { role: selectedRole }); // Passing role as a parameter
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Wave Section */}
      <View style={styles.topSection}>
        <Svg height="100%" width="100%" viewBox="0 0 1440 320" style={styles.wave}>
          <Path
            fill="#CCFFCC"
            d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,144C672,139,768,117,864,112C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </Svg>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Bharat Grow</Text>
        </View>
      </View>

      {/* Middle Section for type of user */}
      <View style={styles.middleSection}>
        <Text style={styles.question}>What are you joining as?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedRole === 'Agent' && styles.selectedButton, 
            ]}
            onPress={() => handleRoleSelection('Agent')}
          >
            <Text style={styles.buttonText}>Agent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedRole === 'Customer' && styles.selectedButton, 
            ]}
            onPress={() => handleRoleSelection('Customer')}
          >
            <Text style={styles.buttonText}>Customer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            selectedRole ? { backgroundColor: '#F58320' } : styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={!selectedRole} 
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 0.3,
    position: 'relative',
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
  logoContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9900',
  },
  middleSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  selectedButton: {
    borderColor: '#FF9900', 
    backgroundColor: '#FF9900',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#FFDAB9', // Peach color
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 80,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', 
  },
});

export default UserTypeScreen;