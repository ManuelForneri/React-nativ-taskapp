import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../services/tasksServices";
import MyLoader from "../components/MyLoader";
import { Button } from "react-native-elements";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const TasksScreen = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, error, isLoading } = useGetTasksQuery();

  const filteredData = data?.filter((task) => task.localId === localId);
  console.log("soy la data filtrada");
  console.log(filteredData);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View style={styles.container}>
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
    marginBottom: 50,
  },
});
