import { StyleSheet } from "react-native";
import { Card, Button, Badge, Title } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../global/colors";

const TaskCard = ({ navigation, item }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{item.name}</Title>
        <Badge
          visible={true}
          style={
            item.stateTask === "Completed"
              ? styles.badgeSuccess
              : styles.badgeWarning
          }
        >
          {item.stateTask}
        </Badge>
        <Button
          icon={() => <FontAwesome6 name="pencil" size={24} color="white" />}
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("Tarea", { id: item.id })}
        >
          Editar
        </Button>
      </Card.Content>
    </Card>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
  badgeSuccess: {
    backgroundColor: "green",
    alignSelf: "center",
  },
  badgeWarning: {
    backgroundColor: "orange",
    alignSelf: "center",
  },
  button: {
    backgroundColor: colors.fuchsiablue500,
    alignSelf: "center",
  },
});
