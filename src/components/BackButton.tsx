import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ color: 'blue', fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
  );
};