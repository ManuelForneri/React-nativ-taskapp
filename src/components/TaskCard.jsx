import { Card, ListItem, Button, Icon } from "react-native-elements";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../global/colors";

const TaskCard = ({ item }) => {
  console.log("item");
  console.log(item);
  return (
    <Card>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <Button
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
