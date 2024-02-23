import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { store } from "./src/app/store";
import MainNavigator from "./src/navigations/MainNavigator";
import { init } from "./src/database";

const App = () => {
  init()
    .then(() => console.log("db inicialisada correctamente"))
    .catch((error) => console.log(error));
  return (
    <>
      <StatusBar style="auto" />

      <Provider store={store}>
        <PaperProvider>
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
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
