import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ color: 'blue', fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
  );
};