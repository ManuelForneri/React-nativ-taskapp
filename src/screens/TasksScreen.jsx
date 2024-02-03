import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../app/services/tasksServices";

const TasksScreen = () => {
  const [task] = useGetTasksQuery();
  console.log(task);
  return (
    <View>
      <TaskCard />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({});
