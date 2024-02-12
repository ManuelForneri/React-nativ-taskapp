import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DebtScreen from "../screens/DebtScreen";

const Stack = createNativeStackNavigator();

const DebtStack = () => {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Deudas" component={DebtScreen} />
    </Stack.Navigator>
  );
};

export default DebtStack;
