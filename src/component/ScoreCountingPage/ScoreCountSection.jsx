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
import { useDispatch, useSelector } from "react-redux";
import { secondInning } from "../../Store/Action";

const ScoreCountSection = () => {
  let dispatch =useDispatch();
  let data = useSelector((state) => state.Reducers);
  // console.warn(data)
  const navigation = useNavigation();
  const [opacityValue] = useState(new Animated.Value(1));
  const [currentBattingTeam, setCurrentBattingTeam] = useState(data.teamTossWin);
  const [secondTeamBatting, setSecondTeamBatting] = useState(data.teamTossLoss);
  const [over, setOver] = useState(0);
  const[secondInningOver ,setSecondInningOver]=useState(0)
  const [secondInn, setSecondInn] = useState(false);
  const [projectedScoreData, setProjectedScoreData] = useState(undefined);

  const currentRuns = data.totalRuns;
  const totalOvers = parseInt(data.selectTheOver.charAt(0));
  const totalBalls = data.noOfBalls;
  const currentRunRate = currentRuns / (totalBalls / 6);
  const remainingOvers = totalOvers - totalBalls / 6;
  const projectedScore = currentRuns + currentRunRate * remainingOvers;

  let selectedOverByUser =data.selectTheOver.charAt(0);
  useEffect(() => {
    setProjectedScoreData(projectedScore.toFixed(0));
    const interval = setInterval(() => {
      Animated.timing(opacityValue, {
        toValue: opacityValue._value === 1 ? 0.2 : 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 1000);
    setCurrentBattingTeam(data.teamTossWin);
    return () => clearInterval(interval);
  }, [opacityValue, projectedScore, data.teamTossWin]);

  useEffect(() => {
    if(!secondInn){
      const overValue = `${Math.floor(data.noOfBalls / 6)}.${data.noOfBalls % 6}`;
      setOver(overValue);
      if (parseFloat(overValue) >= selectedOverByUser) {
        setSecondInn(true);
        dispatch(secondInning(true));
      }
    }else{
      const secondInnOverValue = `${Math.floor(data.secondInnNoOfBalls / 6)}.${data.secondInnNoOfBalls % 6}`;
      setSecondInningOver(secondInnOverValue);
    }
  }, [data.noOfBalls, selectedOverByUser]);
 

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
          <View style={styles.liveContainer}>
            <Animated.View
              style={[styles.liveColor, { opacity: opacityValue }]}
            />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.scoreSection}>
        {/* Render based on batting choice after winning toss */}
        {currentBattingTeam === data.teamTossWin && !secondInn  ? (
          <>
            {/* Toss win team selected batting option */}
            <View style={styles.paticularTeam}>
              <Image source={require("../../assets/india_flag.jpg")} style={styles.flag} />
              <Text style={styles.text}>{data.teamTossWin}</Text>
              <Text style={styles.textScore}>
                {data.totalRuns}-{data.wicketFall} /{" "}
                <Text style={{ fontSize: 17, marginLeft: 15, color: theme.colors.grayColor }}>
                  ({over}{" "}
                </Text>
                /
                <Text style={{ fontSize: 15, marginLeft: 15, color: theme.colors.grayColor }}>
                  {data.selectTheOver.charAt(0)})
                </Text>
              </Text>
              <Text style={styles.textPrimary}>
                CRR{" "}
                {data.currentRunRate == "" ? (0.0).toFixed(2) : data.currentRunRate}
              </Text>
            </View>
            {/* <View>
              {currentBattingTeam === data.teamTossWin && !secondInn && (
                <Image source={require("../../assets/cricket_bat.png")} style={styles.battingImage} />
              )}
            </View> */}
          </>
        ) : (
          <>
            {/* Toss win team selected bowling option */}
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image source={require("../../assets/india_flag.jpg")} style={styles.flag} />
                <Text style={styles.text}>{data.teamTossWin}</Text>
                <Text style={styles.textScore}>
                  {data.totalRuns}-{data.wicketFall} /{" "}
                  <Text style={{ fontSize: 17, marginLeft: 15, color: theme.colors.grayColor }}>
                    ({Math.floor(data.noOfBalls / 6)}.{data.noOfBalls % 6}{" "}
                  </Text>
                  /
                  <Text style={{ fontSize: 15, marginLeft: 15, color: theme.colors.grayColor }}>
                    {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.currentRunRate == "" ? (0.0).toFixed(2) : data.currentRunRate}
                </Text>
              </View>
              {/* <View>
                {currentBattingTeam === data.teamTossWin && !secondInn && (
                  <Image source={require("../../assets/cricket_bat.png")} style={styles.battingImage} />
                )}
              </View> */}
            </View>
          </>
        )}

        <View>
          <Text style={styles.vsText}>Vs</Text>
        </View>

        {secondInn && secondTeamBatting === data.teamTossLoss ? (
          <>
            {/* Toss lose team bats first */}
            <View style={styles.paticularTeam}>
              <Image source={require("../../assets/sri_Lanka_flag.png")} style={styles.flag} />
              <Text style={styles.text}>{data.teamTossLoss}</Text>
              <Text style={styles.textScore}>
                {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                <Text style={{ fontSize: 17, marginLeft: 15, color: theme.colors.grayColor }}>
                  ({secondInningOver}{" "}
                </Text>
                /
                <Text style={{ fontSize: 15, marginLeft: 15, color: theme.colors.grayColor }}>
                  {data.selectTheOver.charAt(0)})
                </Text>
              </Text>
              <Text style={styles.textPrimary}>
                CRR{" "}
                {data.secondInnCurrentRunRate == "" ? (0.0).toFixed(2) : data.secondInnCurrentRunRate}
              </Text>
            </View>
            {/* <View>
              {secondInn && secondTeamBatting === data.teamTossLoss && (
                <Image source={require("../../assets/cricket_bat.png")} style={styles.battingImage} />
              )}
            </View> */}
          </>
        ) : (
          <>
            {/* Toss lose team bowls first */}
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image source={require("../../assets/sri_Lanka_flag.png")} style={styles.flag} />
                <Text style={styles.text}>{data.teamTossLoss}</Text>
                <Text style={styles.textScore}>
                  {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                  <Text style={{ fontSize: 17, marginLeft: 15, color: theme.colors.grayColor }}>
                    ({secondInningOver}{" "}
                  </Text>
                  /
                  <Text style={{ fontSize: 15, marginLeft: 15, color: theme.colors.grayColor }}>
                    {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.secondInnCurrentRunRate == undefined ? (0.0).toFixed(2) : data.secondInnCurrentRunRate}
                </Text>
              </View>
              {/* <View>
                {secondInn && secondTeamBatting === data.teamTossLoss && (
                  <Image source={require("../../assets/cricket_bat.png")} style={styles.battingImage} />
                )}
              </View> */}
            </View>
          </>
        )}
      </View>
      <View>
        <Text style={{ marginTop: 0, fontSize: 12, color: theme.colors.fontColor, textAlign: "center" }}>
          {secondInn ? `2nd Inning` : `1st Inning`}
        </Text>
      </View>
      <View style={styles.separatorLine}></View>
      <View>
        <Text style={styles.textPro}>
          {secondInn
            ? `India need 104 runs in 430 balls at 14.51 rpo`
            : `${data.takeTeamName.HostName} Projected Score is ${projectedScoreData}`}
        </Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  paticularTeam: {
    // width:"90%",
    alignItems: "center",
  },
  textScore: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 22,
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
  textProject: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 17,
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
    fontSize: 16,
    color: theme.colors.fontColor,
    textAlign: "center",
    fontWeight: "600",
  },
  icon: {
    fontSize: 30,
    color: "black",
  },
  battingImage: {
    height: 18,
    width: 17,
    position: "absolute",
    right: 40,
    top: -50,
  },
  inActiveComponent: {
    opacity: 0.4,
  },
});
