import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetTaskByIdQuery } from "../services/tasksServices";
import { Card, Badge, Button } from "react-native-elements";
import MyLoader from "../components/MyLoader";

const TaskScreen = ({ route }) => {
  const { id } = route.params;
  const { data, isError, isSuccess, error, isLoading } =
    useGetTaskByIdQuery(id);
  if (isSuccess && data) {
    console.log(data);
  }
  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const onDeleteTask = () => {
    console.log("notificacion");
  };
  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title>{data.name}</Card.Title>
            <Card.Divider />
            <Text style={styles.note}>{data.note}</Text>
            <Badge
              value={data.stateTask}
              status={data.stateTask === "Completed" ? "success" : "warning"}
              containerStyle={styles.badgeContainer}
              textStyle={styles.badgeText}
            />
            <Badge
              value={data.tag}
              status="primary"
              containerStyle={styles.badgeContainer}
              textStyle={styles.badgeText}
            />
            <Button
              buttonStyle={{ marginBottom: 5 }}
              title="Terminado"
              onPress={() => onDeleteTask()}
            />
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              title="Eliminar"
              onPress={() => onDeleteTask()}
            />
          </Card>
        </View>
      )}
    </>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  note: {
    margin: 10,
    fontSize: 16,
    color: "#333",
  },
  badgeContainer: {
    margin: 5,
  },
  error: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: 500,
    height: 500,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
