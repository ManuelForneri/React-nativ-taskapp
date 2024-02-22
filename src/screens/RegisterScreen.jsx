import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSignupMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { Button, Text, TextInput } from "react-native-paper";
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
        label="Nombre completo"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ width: "100%" }}
      />
      <Text style={{ color: "red" }}>{errorName}</Text>
      <TextInput
        mode="outlined"
        label="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: "100%" }}
      />
      <Text style={{ color: "red" }}>{errorEmail}</Text>
      <TextInput
        mode="outlined"
        label="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ width: "100%" }}
      />
      <Text style={{ color: "red" }}>{errorPassword}</Text>
      <TextInput
        mode="outlined"
        label="Repetir contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
        style={{ width: "100%" }}
      />
      <Text style={{ color: "red" }}>{errorRepeatPass}</Text>
      <Button mode="contained" onPress={handleRegister}>
        Registrarse
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>
        ¿Ya tienes cuenta? Inicia sesión aquí
      </Button>
    </View>
  );
};

export default RegisterScreen;
