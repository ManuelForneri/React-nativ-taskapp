import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="Editar Perfil" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
