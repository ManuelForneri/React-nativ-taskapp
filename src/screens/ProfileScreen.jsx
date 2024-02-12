import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Divider } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        source={{
          uri: "https://example.com/your-profile-image.jpg", // URL de la imagen de perfil
        }}
      />
      <Text style={styles.username}>Usuario123</Text>
      <Text style={styles.bio}>
        ¡Bienvenido a mi perfil! Soy un apasionado de la programación.
      </Text>
      <Divider style={styles.divider} />
      <Button
        title="Editar perfil"
        onPress={() => console.log("Editar perfil presionado")}
      />
      {/* Agrega más componentes según tus necesidades */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  divider: {
    marginVertical: 16,
  },
});

export default ProfileScreen;
