import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";
import { useState } from "react";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  const [idToken, setIdToken] = useState("");
  return (
    <NavigationContainer>
      {idToken ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
