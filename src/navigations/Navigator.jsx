import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AnnotationsScreen from "../screens/AnnotationsScreen";
import DebtScreen from "../screens/DebtScreen";
import TasksStack from "./TasksStack";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tareas"
        component={TasksStack}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="tasks" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Deudas"
        component={DebtScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="attach-money" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Anotador"
        component={AnnotationsScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
