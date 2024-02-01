import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AnnotationsScreen from "../screens/AnnotationsScreen";
import DebtScreen from "../screens/DebtScreen";
import TasksStack from "./TasksStack";

const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tareas" component={TasksStack} />
      <Tab.Screen name="Deudas" component={DebtScreen} />
      <Tab.Screen name="Anotador" component={AnnotationsScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;
