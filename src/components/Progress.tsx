import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressProps {
  steps: number;
  currentStep: number;
}

const Progress: React.FC<ProgressProps> = ({ steps, currentStep }) => {
  return (
    <View style={styles.progressContainer}>
      {Array.from({ length: steps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index < currentStep && styles.activeStep,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc', // Inactive step color
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#007BFF', // Active step color (blue)
  },
});

export default Progress;