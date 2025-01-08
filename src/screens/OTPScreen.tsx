import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RootStackParamList } from '../types/types';
import {  RouteProp } from '@react-navigation/native';

type OTPScreenRouteProp = RouteProp<RootStackParamList, 'OTPScreen'>;

type Props = {
  route: OTPScreenRouteProp; 
};

const OTPScreen: React.FC<Props> = ({ route }) => {

  const { last4Digits } = route.params;
  const [seconds, setSeconds] = useState(30);
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

  useEffect(() => {
    // If seconds reach 0, stop the countdown
    if (seconds === 0) {
      setSeconds(30); // Reset to 30 seconds
      return;
    }

    // Set up the timer to decrease seconds every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval when the component unmounts or seconds reach 0
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
            onChangeText={(value) => {
              const newOtp = [...otp];
              newOtp[index] = value;
              setOtp(newOtp);
            }}
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Resend OTP {''}
        <Text style= {{color:'#172B4D'}}>
          in {''} 
        </Text>
          <Text style= {{color:'#3D89EF'}}>
            {seconds > 9 ? `0:${seconds}` : `0:0${seconds}`}
          </Text>
      </Text>
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