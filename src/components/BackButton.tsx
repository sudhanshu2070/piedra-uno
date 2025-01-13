import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ color: 'blue', fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;