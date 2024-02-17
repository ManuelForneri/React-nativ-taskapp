import { Card, ListItem, Button, Icon, Badge } from "react-native-elements";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { StyleSheet } from "react-native";

const TaskCard = ({ navigation, item }) => {
  return (
    <Card>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <Badge
          value={item.stateTask}
          status={item.stateTask === "Completed" ? "success" : "warning"}
          containerStyle={styles.badgeContainer}
          textStyle={styles.badgeText}
        />
        <Button
          onPress={() => navigation.navigate("Tarea", { id: item.id })}
          icon={<FontAwesome6 name="pencil" size={24} color="white" />}
          buttonStyle={{
            borderRadius: 3,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: colors.fuchsiablue500,
          }}
        />
      </ListItem>
    </Card>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  badgeContainer: {
    margin: 5,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
