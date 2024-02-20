import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useLoginMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import { Button } from "react-native-elements";
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
    <View style={styles.container}>
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
      <Button
        title="Iniciar sesión"
        onPress={handleLogin}
        buttonStyle={{ backgroundColor: colors.fuchsiablue500 }}
      />
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        ¿No tienes cuenta? Regístrate aquí
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
    backgroundColor: colors.fuchsiablue200,
  },
  link: {
    textDecorationLine: "none",
    marginTop: 8,
    backgroundColor: colors.fuchsiablue500,
    padding: 10,
    borderRadius: 3,
    color: "#fff",
  },
});

export default LoginScreen;
