import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/global/colors";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fuchsiablue50,
    alignItems: "center",
    justifyContent: "center",
  },
});
