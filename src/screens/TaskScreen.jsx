import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
