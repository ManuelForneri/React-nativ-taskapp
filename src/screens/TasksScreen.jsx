import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";

const TasksScreen = () => {
  return (
    <View>
      <Text>TasksScreen</Text>
      <TaskCard />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({});
