import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/authServices";
import MyLoader from "../components/MyLoader";
import { deleteAllSession } from "../database";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isLoading } = useGetProfileImageQuery(localId);

  const onLogout = () => {
    deleteAllSession(localId);
    dispatch(clearUser());
  };

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View style={styles.container}>
          <Avatar
            rounded
            size="xlarge"
            source={
              data ? { uri: data.image } : require("../../assets/user.png")
            }
          />

          <Divider style={styles.divider} />
          <Button
            title="Editar perfil"
            onPress={() => navigation.navigate("Editar Perfil")}
          />
          <Button
            buttonStyle={{ backgroundColor: "red" }}
            title="Cerrar sesion"
            onPress={() => onLogout()}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 10,
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
