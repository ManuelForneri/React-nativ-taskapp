import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnnotationsScreen from "../screens/AnnotationsScreen";

const Stack = createNativeStackNavigator();

const AnnotationsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Anotaciones" component={AnnotationsScreen} />
    </Stack.Navigator>
  );
};

export default AnnotationsStack;
