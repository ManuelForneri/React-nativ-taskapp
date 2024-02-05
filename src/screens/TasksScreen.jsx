import { StyleSheet, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../services/tasksServices";

const TasksScreen = () => {
  const { data, error, isLoading } = useGetTasksQuery();

  if (!isLoading) console.log(data);
  return (
    <View>
      <TaskCard />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({});
