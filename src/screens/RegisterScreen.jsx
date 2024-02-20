import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useSignupMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from "../global/colors";
import { Button } from "react-native-elements";
import { insertSession } from "../database";

const RegisterScreen = ({ navigation }) => {
  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] =
    useSignupMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      insertSession(data)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
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
      setErrorEmail("");
      setErrorName("");
      setErrorPassword("");
      setErrorRepeatPass("");
      console.log(error.path);
      console.log(error.message);
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        case "repeatPassword":
          setErrorRepeatPass(error.message);
          break;
      }
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
      <Text style={styles.errorMsg}>{errorName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.errorMsg}>{errorEmail}</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.errorMsg}>{errorPassword}</Text>
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
      />
      <Text style={styles.errorMsg}>{errorRepeatPass}</Text>
      <Button
        title="Registrarse"
        onPress={handleRegister}
        buttonStyle={{ backgroundColor: colors.fuchsiablue500 }}
      />
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
    paddingHorizontal: 12,
    backgroundColor: colors.fuchsiablue200,
  },
  link: {
    color: "blue",
    textDecorationLine: "none",
    marginTop: 8,
    backgroundColor: colors.fuchsiablue500,
    padding: 10,
    borderRadius: 3,
    color: "#fff",
  },
  errorMsg: {
    color: "red",
  },
});

export default RegisterScreen;
