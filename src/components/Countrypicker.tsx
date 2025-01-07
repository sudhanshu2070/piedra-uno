import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

const countries = [
  { label: 'India (+91)', value: 'IN' },
  { label: 'United States (+1)', value: 'US' },
  { label: 'United Kingdom (+44)', value: 'GB' },
  { label: 'Canada (+1)', value: 'CA' },
  { label: 'Australia (+61)', value: 'AU' },
];

const CountryPicker = ({ selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
});

export default CountryPicker;