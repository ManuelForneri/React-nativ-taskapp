import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { fonts } from "./src/global/fonts";
import MainNavigator from "./src/navigations/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

const App = () => {
  const [fontsLoader] = useFonts(fonts);
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;
