import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetTaskByIdQuery } from "../services/tasksServices";
import { Card, Badge } from "react-native-elements";

const TaskScreen = ({ route }) => {
  const { id } = route.params;
  const { data, isError, isSuccess, error, isLoading } =
    useGetTaskByIdQuery(id);
  if (isSuccess && data) {
    console.log(data);
  }
  if (isError) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      {data ? (
        <Card style={styles.card}>
          <Card.Title>{data.name}</Card.Title>
          <Card.Divider />
          <Text style={styles.note}>{data.note}</Text>
          <Badge
            value={data.stateTask}
            status={data.stateTask === "Completed" ? "success" : "warning"}
            containerStyle={styles.badgeContainer}
            textStyle={styles.badgeText} // Añade el estilo badgeText al texto del badge
          />
          <Badge
            value={data.tag}
            status="primary"
            containerStyle={styles.badgeContainer}
            textStyle={styles.badgeText} // Añade el estilo badgeText al texto del badge
          />
        </Card>
      ) : (
        <Text style={styles.error}>Lo sentimos, hubo un error</Text>
      )}
    </View>
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
