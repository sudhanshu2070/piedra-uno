import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const handleVerify = () => {
    console.log('Verify OTP:', otp.join(''));
    Alert.alert(
      "Verified Succesfully",
      "How are you!?",
      [
        {
          text: "Cancel",
        },
        {
          text: "OK",
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
      UIDAI has sent an OTP to your mobile ending with 2156
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
      marginBottom: 100,
    },
    otpBox: {
      width: 50,
      height: 50,
      borderColor: '#EDEEF1',
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center',
      fontSize: 20,
      backgroundColor: '#F7F8FA',
    },
    resendText: {
      fontSize: 14,
      color: '#007BFF',
      textAlign: 'center',
      marginTop: 10,
      marginBottom:15,
    },
    verifyButton: {
      backgroundColor: '#F58320',
      paddingVertical: 15,
      width: '95%',
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