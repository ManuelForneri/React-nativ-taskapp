import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { fonts } from "./src/global/fonts";
import MainNavigator from "./src/navigations/MainNavigator";
import { ToastProvider } from "react-native-toast-notifications";

const App = () => {
  const [fontsLoader] = useFonts(fonts);
  return (
    <>
      <StatusBar style="auto" />

      <Provider store={store}>
        <ToastProvider>
          <MainNavigator />
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
