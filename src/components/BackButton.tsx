import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color="#0F1828" />
      </TouchableOpacity>
  );
};