import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Wave from 'react-wavify';


const UserTypeScreen = ({ navigation }: any) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      navigation.navigate('LoginScreen');
    }
  };

  return (
  //   <View style={styles.container}>
  //     {/* Curve Image */}
  //     <View style={styles.curveContainer}>
  //       {/* <Image
  //         source={require('../../assets/curve.png')} // Replace with your curve image path
  //         style={styles.curveImage}
  //       /> */}
  //       {/* Logo Image */}
  //       <Image
  //         source={require('../../assets/logo.png')} // Replace with your logo image path
  //         style={styles.logoImage}
  //       />
  //     </View>

  //     {/* Question */}
  //     <Text style={styles.question}>What are you joining as?</Text>

  //     {/* Options */}
  //     <View style={styles.options}>
  //       <TouchableOpacity
  //         style={[
  //           styles.option,
  //           selectedType === 'Agent' && styles.selectedOption,
  //         ]}
  //         onPress={() => setSelectedType('Agent')}
  //       >
  //         <Text
  //           style={[
  //             styles.optionText,
  //             selectedType === 'Agent' && styles.selectedOptionText,
  //           ]}
  //         >
  //           Agent
  //         </Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={[
  //           styles.option,
  //           selectedType === 'Customer' && styles.selectedOption,
  //         ]}
  //         onPress={() => setSelectedType('Customer')}
  //       >
  //         <Text
  //           style={[
  //             styles.optionText,
  //             selectedType === 'Customer' && styles.selectedOptionText,
  //           ]}
  //         >
  //           Customer
  //         </Text>
  //       </TouchableOpacity>
  //     </View>

  //     {/* Continue Button */}
  //     <TouchableOpacity
  //       style={[styles.continueButton, !selectedType && styles.disabledButton]}
  //       disabled={!selectedType}
  //       onPress={handleContinue}
  //     >
  //       <Text style={styles.continueText}>Continue</Text>
  //     </TouchableOpacity>
  //   </View>

  //   <View style=  {styles.container}>
  // {/* Upper Section with the wave */}
  // <View style={styles.upperSection}>
  //       {/* <Svg
  //         height="80"
  //         width="100%"
  //         viewBox="0 0 1440 320"
  //         style={styles.wave}>
  //         <Path
  //           fill="red" // Change this to match your design
  //           d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,176C672,181,768,203,864,213.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  //         />
  //       </Svg> */}
  //       <Wave fill='#f79902'
  //         paused={false}
  //         style={{ display: 'flex' }}
  //         options={{
  //           height: 20,
  //           amplitude: 20,
  //           speed: 0.15,
  //           points: 3
  //         }}
  //       />
  //     </View>

  //     {/* Lower Section */}
  //     <View style={styles.lowerSection}>
  //       {/* Content of the lower section */}
  //     </View>
  //   </View>

  <View style={styles.container}>
    <View style={styles.top}>
        <Svg
          height='100%'
          width='100%'
          // viewBox='0 0 1440 320'
          // style={styles.wave}
          >
            <Path
              fill='#40E0D0' //gray
              d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,165.3C672,171,768,117,864,117.3C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
          </Svg>

    </View>
    <View style={styles.bottom}></View>
    
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  top:{
    flex: 0.25,
    backgroundColor: '#DE3163',  //Red
  },
  bottom:{
    flex: 0.75,
    backgroundColor: '#6495ED', //Blue
  },
  // wave: {
  //       backgroundColor: '#000000', 
  //   },
  // box:{
  //   backgroundColor:'#2471A3',
  //   height:10
  // },
  // upperSection: {
  //   flex: 1,
  //   backgroundColor: '#c3f6d2', // Matches the SVG wave fill color
  // },
  //   
  // lowerSection: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },
  // curveContainer: {
  //   flex:1,
  //   backgroundColor:'white'
  // },
  // curveImage: {
  //   width: '120%',
  //   height: '145%',
  //   resizeMode: 'cover',
  // },
  // logoImage: {
  //   position: 'absolute',
  //   bottom: -25,
  //   alignSelf: 'center',
  //   width: 70, // Adjust size based on design
  //   height: 70, // Adjust size based on design
  //   resizeMode: 'contain',
  // },
  // question: {
  //   marginTop: 40,
  //   textAlign: 'center',
  //   fontSize: 20,
  //   fontWeight: '600',
  //   color: '#333',
  // },
  // options: {
  //   marginTop: 313,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginVertical: 0,
  // },
  // option: {
  //   padding: 14,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 8,
  //   width: '40%',
  //   alignItems: 'center',
  // },
  // selectedOption: {
  //   backgroundColor: '#007BFF',
  //   borderColor: '#007BFF',
  // },
  // optionText: {
  //   fontSize: 16,
  //   color: '#333',
  // },
  // selectedOptionText: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  // },
  // continueButton: {
  //   backgroundColor: '#007BFF',
  //   paddingVertical: 12,
  //   borderRadius: 8,
  // },
  // disabledButton: {
  //   backgroundColor: '#ccc',
  // },
  // continueText: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  // curvedLine: {
  //   width: "20%",
  //   height: 100,
  //   position: "absolute",
  //   bottom: -25,
  //   left: "40%",
  //   borderRadius: 35,
  //   backgroundColor: "black",
  //   transform: [{ scaleX: 5 }, { scaleY: 1 }],
  // },
});

export default UserTypeScreen;