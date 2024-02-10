import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useSignupMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

const RegisterScreen = ({ navigation }) => {
  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] =
    useSignupMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setUser(data));
    }
    if (error) {
      console.log(error);
    }
  }, [data, isError, isSuccess]);

  const handleRegister = () => {
    try {
      signupSchema.validateSync({ email, password, repeatPassword });
      triggerSignup({ email, password });
      setEmail("");
      setName("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      console.log(error.path);
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
      />
      <Button title="Registrarse" onPress={handleRegister} />
      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        ¿Ya tienes cuenta? Inicia sesión aquí
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 8,
  },
});

export default RegisterScreen;
