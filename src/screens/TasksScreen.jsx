import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../services/tasksServices";
import MyLoader from "../components/MyLoader";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

const TasksScreen = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, error, isLoading } = useGetTasksQuery();

  const filteredData = data?.filter((task) => task.localId === localId);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View style={styles.container}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Crear Tarea")}
          >
            Añadir tarea
          </Button>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard item={item} navigation={navigation} />
            )}
          />
        </View>
      )}
    </>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
