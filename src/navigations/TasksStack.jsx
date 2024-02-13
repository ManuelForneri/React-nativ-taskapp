import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskScreen from "../screens/TaskScreen";
import TasksScreen from "../screens/TasksScreen";
import CreateTaskScreen from "../screens/CreateTaskScreen";

const Stack = createNativeStackNavigator();

const TasksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={TasksScreen} />
      <Stack.Screen name="Tarea" component={TaskScreen} />
      <Stack.Screen name="Crear Tarea" component={CreateTaskScreen} />
    </Stack.Navigator>
  );
};

export default TasksStack;
