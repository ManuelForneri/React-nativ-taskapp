import { StyleSheet, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../services/tasksServices";
import MyLoader from "../components/MyLoader";
import { Button } from "react-native-elements";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../global/colors";

const TasksScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetTasksQuery();

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View>
          <Button
            title="Añadir tarea"
            buttonStyle={{
              borderRadius: 3,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: colors.fuchsiablue500,
            }}
            onPress={() => navigation.navigate("Crear Tarea")}
          />
          <TaskCard />
        </View>
      )}
    </>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({});
