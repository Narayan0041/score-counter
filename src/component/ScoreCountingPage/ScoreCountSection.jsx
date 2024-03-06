import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme/style";

const ScoreCountSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Set the status bar color */}
      <StatusBar backgroundColor={theme.colors.secondaryBackground} />

      <View style={styles.upperSection}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          style={styles.iconContainer}
        >
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableHighlight>
        <View style={styles.teamsContainer}>
          <Text style={styles.navBarHeaderText}>
            score<Text style={styles.flexspainText}>Cric</Text>
          </Text>
        </View>
      </View>
      <View style={styles.scoreSection}>
        <View style={styles.paticularTeam}>
          <Image
            source={require("../../assets/india_flag.jpg")}
            style={styles.flag}
          />
          <Text style={styles.text}>India</Text>
        </View>
        <View>
          <Text style={styles.vsText}>Vs</Text>
        </View>
        <View style={styles.paticularTeam}>
          <Image
            source={require("../../assets/sri_Lanka_flag.png")}
            style={styles.flag}
          />
          <Text style={styles.text}>Sri Lanka</Text>
        </View>
      </View>
    </View>
  );
};

export default ScoreCountSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  teamsName: {
    color: theme.colors.fontColor,
    fontSize: 22,
    marginRight: 10,
  },
  vsText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "600",
  },
  scoreSection: {
    marginTop: 20,
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  paticularTeam: {
    // flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 11,
    paddingHorizontal: 10,
  },
  flag: {
    width: 25,
    height: 17,
  },
  iconContainer: {
    backgroundColor: "transparent",
  },
  navBarHeaderText: {
    color: theme.colors.fontColor,
    fontSize: 25,
    marginLeft:"10%",
    fontWeight: "bold",
  },
  flexspainText: {
    color: theme.colors.primary,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
