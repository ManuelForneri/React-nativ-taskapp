import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Divider } from "react-native-paper";
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
          <Avatar.Image
            size={128}
            source={
              data ? { uri: data.image } : require("../../assets/user.png")
            }
          />

          <Button
            mode="contained"
            onPress={() => navigation.navigate("Editar Perfil")}
          >
            Editar perfil
          </Button>
          <Button
            mode="contained"
            buttonColor="#D32F2F"
            onPress={() => onLogout()}
          >
            Cerrar sesion
          </Button>
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
});

export default ProfileScreen;
