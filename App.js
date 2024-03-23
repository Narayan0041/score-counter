import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Splash from "./src/component/Splash";
import Home from "./src/component/Home";
import ScoreCountingPage from "./src/component/container/ScoreCountingPage";
import Slider from "./src/component/common/Slider";
import Category from "./src/component/Category";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store , persistor} from "./src/Store/index"

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoreCountPage"
              component={ScoreCountingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen
              name="Slider"
              component={Slider}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
       </PersistGate>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
