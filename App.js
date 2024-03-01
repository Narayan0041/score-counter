import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/component/Splash";
import Home from "./src/component/Home";
import ScoreCountingPage from "./src/component/container/ScoreCountingPage";
import TakeHowManyOver from "./src/component/InputTabSection/TakeHowManyOver";
const Stack = createNativeStackNavigator();
export default function App() {
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
        <Stack.Screen name="TakeHowManyOver">
          {({ navigation }) => <TakeHowManyOver navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="ScoreCountPage" component={ScoreCountingPage} />
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
