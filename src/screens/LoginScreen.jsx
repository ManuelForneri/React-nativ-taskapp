import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

const LoginScreen = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Lógica de autenticación aquí (por ejemplo, llamada a una API).
    console.log("Datos de inicio de sesión:", data);
  };

  return (
    <View>
      <Controller
        control={control}
        name="email"
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
        render={({ field }) => (
          <TextInput {...field} placeholder="Correo electrónico" />
        )}
      />
      {errors.email && <Text>Ingresa un correo válido</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput {...field} placeholder="Contraseña" secureTextEntry />
        )}
      />
      {errors.password && <Text>Ingresa una contraseña</Text>}

      <Button title="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;
