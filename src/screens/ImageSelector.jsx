import { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/authServices";
import { Button } from "react-native-elements";
import { usePostProfileImageMutation } from "../services/authServices";
import MyLoader from "../components/MyLoader";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [triggerProfileImage] = usePostProfileImageMutation();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (isSuccess && data) setImage(data.image);
  }, [isSuccess]);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };
  const confirmImage = () => {
    triggerProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <View style={styles.container}>
          <Image
            source={image ? { uri: image } : require("../../assets/user.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <Button title="Tomar foto" onPress={pickImage} />
          <Button title="Confirmar" onPress={confirmImage} />
        </View>
      )}
    </>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {},
});
