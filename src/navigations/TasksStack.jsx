import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskScreen from "../screens/TaskScreen";
import TasksScreen from "../screens/TasksScreen";

const Stack = createNativeStackNavigator();

const TasksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={TasksScreen} />
      <Stack.Screen name="Tarea" component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default TasksStack;
