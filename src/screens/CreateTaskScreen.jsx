import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(t) => setName(t)}
        placeholder="Nombre de la tarea"
      />
      <TextInput
        style={styles.input}
        value={tag}
        onChangeText={(t) => setTag(t)}
        placeholder="Etiqueta"
      />
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={(t) => setNote(t)}
        placeholder="Descripcion"
      />

      <Button
        color={colors.fuchsiablue800}
        title="Agregar"
        onPress={() => onCreateTask()}
      />
    </View>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
