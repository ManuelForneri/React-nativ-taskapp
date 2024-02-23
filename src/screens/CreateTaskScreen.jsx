import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { useCreateTaskMutation } from "../services/tasksServices";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

const CreateTaskScreen = ({ navigation }) => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const localId = useSelector((state) => state.auth.value.localId);

  const [triggerCreateTask] = useCreateTaskMutation();

  const onCreateTask = () => {
    triggerCreateTask({
      name,
      note,
      tag,
      stateTask: "pending",
      localId,
      date: Date.now(),
    });
    toast.show("Creado correctamente", {
      type: "success",
      placement: "top",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
    setName("");
    setNote("");
    setTag("");

    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <TextInput
        mode="outlined"
        label="Nombre de la tarea"
        value={name}
        onChangeText={(t) => setName(t)}
        style={{ marginBottom: 10, width: "100%" }}
      />
      <TextInput
        mode="outlined"
        label="Etiqueta"
        value={tag}
        onChangeText={(t) => setTag(t)}
        style={{ marginBottom: 10, width: "100%" }}
      />
      <TextInput
        mode="outlined"
        label="Descripcion"
        value={note}
        onChangeText={(t) => setNote(t)}
        style={{ marginBottom: 10, width: "100%" }}
      />

      <Button mode="contained" onPress={() => onCreateTask()}>
        Agregar
      </Button>
    </View>
  );
};

export default CreateTaskScreen;
