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
import { useSelector } from "react-redux";

const ScoreCountSection = () => {
  let data = useSelector((state) => state.Reducers);
  const navigation = useNavigation();
  const [opacityValue] = useState(new Animated.Value(1));
  const [battingTeam, setBattingTeam] = useState(data.teamTossWin);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [inning, setInning] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (inning === 1) {
        if (battingTeam === data.teamTossWin) {
          // Batting team scoring
          if (balls < 6) {
            setScore(score + Math.floor(Math.random() * 7)); // Random runs between 0 and 6
            setBalls(balls + 1);
          } else {
            // Switch to bowling team
            setBattingTeam(
              data.teamTossWin === data.takeTeamName.HostName
                ? data.takeTeamName.VisitorName
                : data.takeTeamName.HostName
            );
            setBalls(0);
            setOvers(overs + 1);
            setScore(0);
          }
        } else {
          // Bowling team scoring (animations or other logic here)
          // Simulated delay for demonstration purposes
          setTimeout(() => {
            Animated.timing(opacityValue, {
              toValue: opacityValue._value === 1 ? 0.2 : 1,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
          }, 1000);
        }
      } else if (inning === 2) {
        // Second inning logic
        // Similar logic as the first inning
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [opacityValue, battingTeam, score, balls, overs, inning]);

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
          <View style={{ flexDirection: "row" }}>
            <View style={styles.paticularTeam}>
              <Image
                source={require("../../assets/india_flag.jpg")}
                style={styles.flag}
              />
              <Text style={styles.text}>{data.takeTeamName.HostName}</Text>
              <Text style={styles.textScore}>
                {score}-{balls} /{" "}
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 15,
                    color: theme.colors.grayColor,
                  }}
                >
                  ({overs}.{balls % 6}){" "}
                </Text>
                /
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 15,
                    color: theme.colors.grayColor,
                  }}
                >
                  {data.selectTheOver.charAt(0)})
                </Text>
              </Text>
              <Text style={styles.textPrimary}>CRR {3.44}</Text>
            </View>
            <View>
              {battingTeam === data.takeTeamName.HostName && (
                <View>
                  <Image
                    source={require("../../assets/cricket_bat.png")}
                    style={styles.battingImage}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: theme.colors.secondaryBackground,
  },
  iconContainer: {
    paddingRight: 10,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navBarHeaderText: {
    color: "white",
    fontSize: 18,
  },
  flexspainText: {
    color: theme.colors.primaryColor,
  },
  liveContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  liveColor: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
    marginRight: 5,
  },
  liveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paticularTeam: {
    alignItems: "center",
  },
  flag: {
    width: 50,
    height: 30,
  },
  text: {
    fontSize: 20,
    color: theme.colors.fontColor,
    fontWeight: "bold",
  },
  textScore: {
    fontSize: 16,
    color: theme.colors.fontColor,
    fontWeight: "bold",
  },
  textPrimary: {
    fontSize: 14,
    color: theme.colors.primaryColor,
    fontWeight: "bold",
  },
  battingImage: {
    width: 30,
    height: 30,
  },
});

export default ScoreCountSection;
