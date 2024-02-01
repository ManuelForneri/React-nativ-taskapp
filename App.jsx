import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { fonts } from "./src/global/fonts";
import MainNavigator from "./src/navigations/MainNavigator";

const App = () => {
  const [fontsLoader] = useFonts(fonts);
  return (
    <>
      <StatusBar style="auto" />
      <MainNavigator />
    </>
  );
};

export default App;
