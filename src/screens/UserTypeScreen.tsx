import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; 
import { RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

type UserTypeNavigationProp = StackNavigationProp<RootStackParamList,'UserTypeScreen'>;

const UserTypeScreen = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null); //Tracking selected role
  const navigation = useNavigation<UserTypeNavigationProp>(); 

  // Handling role selection
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };
  
  // Handling continue button press
  const handleContinue = () => {
    if (selectedRole) {
      navigation.navigate('LoginScreen', { role: selectedRole }); // Passing role to the next screen
    }
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
    height:'240%',
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
  middleSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:60
  },
  question: {
    fontSize: 18,
    fontWeight: '400',
    color: '#3D495B',
    marginBottom: 40,
    fontFamily:'Proxima Nova', //gotta add the font manually and import 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    width:'54%',
    height:95,
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  selectedButton: {
    borderColor: '#FF9900', 
    backgroundColor: '#FF9900',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    textAlign:'center', 
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
    width:450,
    height:60,
    justifyContent: 'center', 
    alignItems: 'center',  
    bottom:200
  },
  continueButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign:'center'
  },
  disabledButton: {
    backgroundColor: '#ccc', 
  },
});

export default UserTypeScreen;