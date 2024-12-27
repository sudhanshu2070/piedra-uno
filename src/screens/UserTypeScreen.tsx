import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserTypeScreen = ({ navigation }: any) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.curve} />
      <Text style={styles.logo}>Jaha</Text>
      <Text style={styles.question}>What are you joining as?</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedType === 'Agent' && styles.selectedOption,
          ]}
          onPress={() => setSelectedType('Agent')}
        >
          <Text style={styles.optionText}>Agent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedType === 'Customer' && styles.selectedOption,
          ]}
          onPress={() => setSelectedType('Customer')}
        >
          <Text style={styles.optionText}>Customer</Text>
        </TouchableOpacity>
      </View>
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
    padding: 16,
    backgroundColor: '#fff',
  },
  curve: {
    height: 100,
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  question: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#007BFF',
  },
  optionText: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserTypeScreen;