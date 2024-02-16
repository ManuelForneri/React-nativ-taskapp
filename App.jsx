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
        <ToastProvider
          placement="top"
          duration={5000}
          animationType="zoom-in"
          animationDuration={250}
          successColor="green"
          dangerColor="red"
          warningColor="orange"
          normalColor="gray"
          textStyle={{ fontSize: 20 }}
          offset={50}
          offsetTop={30}
          offsetBottom={40}
          swipeEnabled={true}
        >
          <MainNavigator />
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
