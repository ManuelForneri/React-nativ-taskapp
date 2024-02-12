import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AnnotationsStack from "./AnnotationsStack";
import DebtStack from "./DebtStack";
import ProfileStack from "./ProfileStack";
import TasksStack from "./TasksStack";

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
        component={DebtStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="attach-money" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Anotador"
        component={AnnotationsStack}
        options={{
          tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
