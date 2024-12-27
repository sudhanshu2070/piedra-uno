import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const handleVerify = () => {
    console.log('Verify OTP:', otp.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Jaha has sent an OTP to your mobile number ending with 9876
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            value={otp[index]}
            onChangeText={(value) => {
              const newOtp = [...otp];
              newOtp[index] = value;
              setOtp(newOtp);
            }}
          />
        ))}
      </View>
      <Text style={styles.resendText}>Resend OTP in 0:30</Text>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
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
    message: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
      marginBottom: 30,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 30,
    },
    otpBox: {
      width: 40,
      height: 50,
      borderColor: '#007BFF',
      borderWidth: 1,
      borderRadius: 8,
      textAlign: 'center',
      fontSize: 20,
      backgroundColor: '#F5F5F5',
    },
    resendText: {
      fontSize: 14,
      color: '#007BFF',
      textAlign: 'center',
      marginTop: 10,
    },
    verifyButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 15,
      width: '80%',
      borderRadius: 8,
      alignItems: 'center',
    },
    verifyText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
});  

export default OTPScreen;