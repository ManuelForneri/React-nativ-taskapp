import { StyleSheet, View } from "react-native";
import React from "react";
import {
  useDeleteTaskMutation,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from "../services/tasksServices";
import {
  ActivityIndicator,
  Button,
  Card,
  Title,
  Paragraph,
  Badge,
} from "react-native-paper";
import { useToast } from "react-native-toast-notifications";

const TaskScreen = ({ navigation, route }) => {
  const toast = useToast();
  const { id } = route.params;
  const { data, isError, isSuccess, error, isLoading } =
    useGetTaskByIdQuery(id);
  const [triggerDeleteTask] = useDeleteTaskMutation();
  const [triggerUpdateTask] = useUpdateTaskMutation();

  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const onDeleteTask = () => {
    triggerDeleteTask(id);

    toast.show("Eliminado correctamente", {
      type: "success",
      placement: "top",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
    navigation.goBack();
  };
  const onUpdateTask = () => {
    const task = { stateTask: "Completed" };
    triggerUpdateTask({ task, id });
    toast.show("Cambiando estado correctamente", {
      type: "success",
      placement: "top",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
    navigation.goBack();
  };
  return (
    <>
      {isLoading ? (
        <ActivityIndicator animating={true} color={"#6200ee"} />
      ) : (
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>{data.name}</Title>
              <Paragraph style={styles.note}>{data.note}</Paragraph>
              <Badge style={styles.badge}>{data.tag}</Badge>
              <Badge
                style={{
                  backgroundColor:
                    data.stateTask === "Completed" ? "green" : "orange",
                }}
              >
                {data.stateTask}
              </Badge>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => onUpdateTask()}>
                Terminado
              </Button>
              <Button
                mode="contained"
                color="red"
                onPress={() => onDeleteTask()}
              >
                Eliminar
              </Button>
            </Card.Actions>
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
  badge: {
    margin: 5,
  },
  card: {
    width: "100%",
    maxWidth: 500,
  },
});
