import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import Navigator from "./Navigator";

const MainNavigator = () => {
  const idToken = useSelector((state) => state.auth.value.idToken);
  return (
    <NavigationContainer>
      {idToken ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
