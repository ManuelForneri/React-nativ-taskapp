import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function MyLoader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={colors.fuchsiablue800} />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyLoader;
