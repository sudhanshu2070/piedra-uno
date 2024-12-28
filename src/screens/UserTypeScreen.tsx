import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserTypeScreen = ({ navigation }: any) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      {/* Curve Image */}
      <View style={styles.curveContainer}>
        <Image
          source={require('../../assets/curve.png')} // Replace with your curve image path
          style={styles.curveImage}
        />
        {/* Logo Image */}
        <Image
          source={require('../../assets/logo.png')} // Replace with your logo image path
          style={styles.logoImage}
        />
      </View>

      {/* Question */}
      <Text style={styles.question}>What are you joining as?</Text>

      {/* Options */}
      <View style={styles.options}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedType === 'Agent' && styles.selectedOption,
          ]}
          onPress={() => setSelectedType('Agent')}
        >
          <Text
            style={[
              styles.optionText,
              selectedType === 'Agent' && styles.selectedOptionText,
            ]}
          >
            Agent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedType === 'Customer' && styles.selectedOption,
          ]}
          onPress={() => setSelectedType('Customer')}
        >
          <Text
            style={[
              styles.optionText,
              selectedType === 'Customer' && styles.selectedOptionText,
            ]}
          >
            Customer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedType && styles.disabledButton]}
        disabled={!selectedType}
        onPress={handleContinue}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  curveContainer: {
    height: 200,
    position: 'relative',
  },
  curveImage: {
    width: '120%',
    height: '145%',
    resizeMode: 'cover',
  },
  logoImage: {
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
    width: 70, // Adjust size based on design
    height: 70, // Adjust size based on design
    resizeMode: 'contain',
  },
  question: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  options: {
    marginTop: 313,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 0,
  },
  option: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserTypeScreen;