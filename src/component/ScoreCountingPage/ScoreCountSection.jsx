import React, { useState, useEffect } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme/style";

const ScoreCountSection = () => {
  const navigation = useNavigation();
  const [opacityValue] = useState(new Animated.Value(1));

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacityValue, {
        toValue: opacityValue._value === 1 ? 0.2 : 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 1000);

    return () => clearInterval(interval);
  }, [opacityValue]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.secondaryBackground} />
      <View style={styles.upperSection}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          style={styles.iconContainer}
        >
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableHighlight>
        <View style={styles.info}>
          <View style={styles.teamsContainer}>
            <Text style={styles.navBarHeaderText}>
              score<Text style={styles.flexspainText}>Cric</Text>
            </Text>
          </View>

          {/* ------------------------Live-section----------------------- */}
          <View style={styles.liveContainer}>
            <Animated.View
              style={[styles.liveColor, { opacity: opacityValue }]}
            />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.scoreSection}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.paticularTeam}>
            <Image
              source={require("../../assets/india_flag.jpg")}
              style={styles.flag}
            />
            <Text style={styles.text}>India</Text>
            <Text style={styles.textScore}>
              {60}-{4} / <Text style={{fontSize:15, marginLeft:15 , color:theme.colors.grayColor}}>{`(4)`}</Text>
            </Text>
            <Text style={styles.textPrimary}>CRR . {3.44}</Text>
          </View>
      
{/* ------------------------------Bat Icon---------------------------- */}

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
          <Text style={styles.textScore}>
          {60}-{4} / <Text style={{fontSize:15, marginLeft:15 , color:theme.colors.grayColor}}>{`(4)`}</Text>
          </Text>
          <Text style={styles.textPrimary}>CRR . {3.44}</Text>
        </View>
      </View>
        <View>
          <Text style={{marginTop:0 , fontSize:12 , color:theme.colors.fontColor, textAlign:"center"}}>{`1st Inning`}</Text>
        </View>
      <View style={styles.separatorLine}></View>
      <View>
        <Text style={styles.textPro}>Projected Score is {100}</Text>
      </View>
    </View>
  );
};

export default ScoreCountSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    paddingHorizontal: 20,
    paddingBottom: "5%",
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
  info: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  liveContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  liveColor: {
    backgroundColor: "red",
    height: 8,
    width: 8,
    borderRadius: 8,
  },
  liveText: {
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 10,
    color: theme.colors.fontColor,
  },
  vsText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "600",
  },
  scoreSection: {
    marginTop: 25,
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  paticularTeam: {
    alignItems: "center",
  },
  textScore: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 11,
    paddingHorizontal: 10,
  },
  textPrimary: {
    marginTop: 5,
    fontSize: 12,
    color: theme.colors.primary,
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
    marginLeft: "10%",
    fontWeight: "bold",
  },
  flexspainText: {
    color: theme.colors.primary,
    fontWeight: "700",
    letterSpacing: 1,
  },
  separatorLine: {
    backgroundColor: theme.colors.grayColor,
    height: 1,
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  textPro: {
    marginTop: 20,
    fontSize: 17,
    color: theme.colors.fontColor,
    textAlign: "center",
  },
  icon: {
    fontSize: 30, // Adjust size as needed
    color: "black", // Adjust color as needed
  },
});
