import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/component/Splash";
import Home from "./src/component/Home";
import ScoreCountingPage from "./src/component/container/ScoreCountingPage";
import TakeHowManyOver from "./src/component/InputTabSection/TakeHowManyOver";
import SplashScreen from "react-native-splash-screen";
import { useEffect } from "react";
import Slider from "./src/component/common/Slider";
import Category from "./src/component/Category";
const Stack = createNativeStackNavigator();
export default function App({navigation}) {
  // useEffect(() => {
  //   if (SplashScreen.hide) {
  //     SplashScreen.hide();
  //   } else {
  //     console.error("SplashScreen.hide is not available");
  //   }
  // }, []);
  
  return (
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
        <Stack.Screen name="ScoreCountPage" component={ScoreCountingPage} options={{headerShown:false}} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Slider" component={Slider} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
