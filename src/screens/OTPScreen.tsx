import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RootStackParamList } from '../types/types';
import {  RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type OTPScreenRouteProp = RouteProp<RootStackParamList, 'OTPScreen'>;

type Props = {
  route: OTPScreenRouteProp; 
};

const OTPScreen: React.FC<Props> = ({ route }) => {

  const { last4Digits } = route.params;
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = React.useState(Array(6).fill('')); // Array of 6 digits for OTP
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null)); // a refs for each input
  
  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join(''); // the OTP array into a single string
  
    if (enteredOtp === '890980') {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Welcome to the new Experience',
      });

      Alert.alert(
        "Verified Succesfully",
        "How are you!?",
        [
          {
            text: "Super Okay",
            onPress: () => {
              Toast.show({
                type: 'info',
                text1: 'Welcome',
                text2: 'Khamma Gani, Happy Diwali',
                visibilityTime: 10000,
              });
            },
          },
          {
            text: "OK",
            onPress: () => {
              Toast.show({
                type: 'info',
                text1: 'Will welcome you soon',
                text2: "Don't worry, It'll be Super Okay Soon!!",
                visibilityTime: 10000,
              });
            },
          }
        ]
      );

    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Invalid OTP. Please try again.',
      });

      Alert.alert(
        "Wrong OTP, try again."
      );
    }

    
  };

  useEffect(() => {
    // If seconds reach 0, stopping the countdown
    if (seconds === 0) {
      setSeconds(30); // Reset to 30 seconds
      return;
    }

    // Setting up the timer to decrease seconds every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clearing the interval when the component unmounts or seconds reach 0
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        UIDAI has sent an OTP to your mobile ending with{' '}
          <Text style={{color:'#28282B', fontWeight:'500'}}>{last4Digits}</Text>   
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            value={otp[index]}
            onChangeText={(value) => handleChange(value, index)}
            ref={inputRefs[index]}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(otp[index], index);
              }
            }}
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Resend OTP {''}
        <Text style= {{color:'#172B4D '}}>
          in {''} 
        </Text>
          <Text style= {{color:'#3D89EF'}}>
            {seconds > 9 ? `0:${seconds}` : `0:0${seconds}`}
          </Text>
      </Text>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      {/* Toast to display the message */}
      <Toast/>

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
      fontSize: 20,
      color: '#3D495B',
      textAlign: 'left',
      marginBottom: 30,
      marginLeft:15,
      width:'90%',
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 100,
      marginTop:50,
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
      color: '#F58320',
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