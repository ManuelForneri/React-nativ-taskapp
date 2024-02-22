import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useLoginMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { Button, TextInput } from "react-native-paper";
import { insertSession } from "../database";

const LoginScreen = ({ navigation }) => {
  const [triggerSignin, { data, isError, isSuccess, error, isLoading }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      insertSession(data)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    }
  }, [data, isError, isSuccess]);

  const handleLogin = () => {
    triggerSignin({ email, password });
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
        label="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <TextInput
        mode="outlined"
        label="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Button mode="contained" onPress={handleLogin}>
        Iniciar sesión
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Register")}>
        ¿No tienes cuenta? Regístrate aquí
      </Button>
    </View>
  );
};

export default LoginScreen;
