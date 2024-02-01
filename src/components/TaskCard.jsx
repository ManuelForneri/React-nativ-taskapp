import { Card, ListItem, Button, Icon } from "react-native-elements";

const TaskCard = () => {
  return (
    <Card>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>TaskCard</ListItem.Title>
        </ListItem.Content>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="View Details"
        />
      </ListItem>
    </Card>
  );
};

export default TaskCard;
