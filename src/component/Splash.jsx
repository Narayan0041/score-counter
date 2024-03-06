import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import theme from "../theme/style";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1500);
  }, []);
  return (
    <View style={Styles.splashContainer}>
      <View style={Styles.splashImageContainer}>
        <Animatable.Image
          source={require("../assets/Splash.png")}
          style={Styles.splashImage}
          resizeMode="contain"
          animation="slideInLeft"
          duration={1200}
        />
      </View>
      <View style={Styles.textContainer}>
        <Animatable.Text
          style={Styles.text}
          animation="slideInRight"
          duration={1200}
        >
          score<Text style={Styles.spainText}>Cric</Text>
        </Animatable.Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
  },
  splashImageContainer: {
    width: 200,
    height: 140,
  },
  splashImage: {
    flex: 1,
    width: null,
    height: null,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  spainText: {
    color: theme.colors.primary,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
export default Splash;
