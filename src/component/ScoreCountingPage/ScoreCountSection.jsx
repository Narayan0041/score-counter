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
import {
  getStartButton,
  scoreAddContainer,
  secondInning,
  whatYouChoose,
} from "../../Store/Action";

const ScoreCountSection = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.Reducers);
  // console.warn(data)
  const navigation = useNavigation();
  const [opacityValue] = useState(new Animated.Value(1));
  const [currentBattingTeam, setCurrentBattingTeam] = useState(
    data.teamTossWin && data.whatYouChoose == "batting"
      ? data.teamTossWin
      : data.teamTossLoss
  );
  const [secondTeamBatting, setSecondTeamBatting] = useState(
    data.teamTossWin && data.whatYouChoose == "batting"
      ? data.teamTossLoss
      : data.teamTossWin
  );
  const [over, setOver] = useState(0);
  const [secondInningOver, setSecondInningOver] = useState(0);
  const [secondInn, setSecondInn] = useState(false);
  const [projectedScoreData, setProjectedScoreData] = useState(0);
  const [requireRunsData, setRequireRunsData] = useState(0);
  const [requireBallsData, setRequireBallsData] = useState(0);
  const [message, setMessage] = useState(false);
  const [messageForTeamOne, setMessageForTeamOne] = useState(false);
  const [messageForTeamSecond, setMessageForTeamSecond] = useState(false);
  const [completeMatch, setCompleteMatch] = useState(false);

  // get the projectedScore
  const currentRuns = data.totalRuns;
  const totalOvers = parseInt(data.selectTheOver.charAt(0));
  const totalBalls = data.noOfBalls;
  const currentRunRate = currentRuns / (totalBalls / 6);
  const remainingOvers = totalOvers - totalBalls / 6;
  const projectedScore = currentRuns + currentRunRate * remainingOvers;

  // get require run
  const dataTeamOneRun = data.totalRuns + 1;
  const dataTeamTwoRun = data.secondInnTotalRuns;
  const requireRuns = dataTeamOneRun - dataTeamTwoRun;

  // get require balls
  const totalNoOfOver = data.selectTheOver.charAt(0) * 6;
  const totalNoOfBallPlayInSecondInning = data.secondInnNoOfBalls;
  const requiredBalls = totalNoOfOver - totalNoOfBallPlayInSecondInning;

  // get require run rate
  const requiredRunRate = requireRunsData / (requiredBalls / 6);

  let selectedOverByUser = parseInt(data.selectTheOver.charAt(0));

  useEffect(() => {
    setRequireRunsData(requireRuns);
    setRequireBallsData(requiredBalls);
    setProjectedScoreData(projectedScore.toFixed(0));
    const interval = setInterval(() => {
      Animated.timing(opacityValue, {
        toValue: opacityValue._value === 1 ? 0.2 : 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 1000);
    // setCurrentBattingTeam(data.teamTossWin);
    return () => clearInterval(interval);
  }, [
    opacityValue,
    projectedScore,
    data.teamTossWin,
    requireRuns,
    requiredBalls,
  ]);

  useEffect(() => {
    const overValue = `${Math.floor(data.noOfBalls / 6)}.${data.noOfBalls % 6}`;
    setOver(overValue);
    if (!secondInn && parseFloat(overValue) == selectedOverByUser) {
      setSecondInn(true);
      dispatch(secondInning(true));
    }
    // wicket are fall
    if (data.noOfPlayer === data.wicketFall && !secondInn) {
      setSecondInn(true);
      dispatch(secondInning(true));
    }
    // wicket fall second inning
    if (data.noOfPlayer === data.secondInnWicketFall && secondInn) {
      setCompleteMatch(true);
      dispatch(getStartButton(true));
    }
  }, [
    data.noOfBalls,
    selectedOverByUser,
    secondInn,
    data.secondInnWicketFall.completeMatch,
  ]);

  useEffect(() => {
    const secondInnOverValue = `${Math.floor(data.secondInnNoOfBalls / 6)}.${
      data.secondInnNoOfBalls % 6
    }`;
    setSecondInningOver(secondInnOverValue);
  }, [data.secondInnNoOfBalls]);

  useEffect(() => {
    if (
      dataTeamOneRun >= dataTeamTwoRun &&
      secondInningOver &&
      data.selectTheOver.charAt(0) === secondInningOver.charAt(0)
    ) {
      setMessageForTeamOne(true);
      dispatch(getStartButton(true));
      setCompleteMatch(true);
    }
  }, [
    dataTeamOneRun,
    dataTeamTwoRun,
    data.selectTheOver,
    secondInningOver,
    currentBattingTeam,
    requireRuns,
    completeMatch,
  ]);
  useEffect(() => {
    if (secondInn && data.totalRuns < data.secondInnTotalRuns) {
      setMessage(true);
      dispatch(getStartButton(true));
      setCompleteMatch(true);
    }
  }, [secondInn, data.totalRuns, data.secondInnTotalRuns]);


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.secondaryBackground} />
      <View style={styles.upperSection}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Home")}
          style={styles.iconContainer}
        >
          <Icon name="chevron-back" size={20} color="white" />
        </TouchableHighlight>
        <View style={styles.info}>
          <View style={styles.teamsContainer}>
            <Text style={styles.navBarHeaderText}>
              score<Text style={styles.flexspainText}>Cric</Text>
            </Text>
          </View>
          <View style={styles.liveContainer}>
            {completeMatch ? (
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <View style={styles.completeMatchSection}></View>
                <Text style={styles.liveText}>Complete</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Animated.View
                  style={[styles.liveColor, { opacity: opacityValue }]}
                />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {/* ------------------------------------ this condition check the toss win team what seleced ---------------------------------- */}
      {data.teamTossWin && data.whatYouChoose === "batting" ? (
        <View style={styles.scoreSection}>
          {currentBattingTeam === data.teamTossWin && !secondInn ? (
            <>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/india_flag.jpg")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossWin}</Text>
                <Text style={styles.textScore}>
                  {data.totalRuns}-{data.wicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({over} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.currentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.currentRunRate}
                </Text>
                {/* ----------------------------------------bat image icon ---------------------------- */}
                <View>
                  {currentBattingTeam === data.teamTossWin && !secondInn && (
                    <Image
                      source={require("../../assets/cricket_bat.png")}
                      style={styles.battingImage}
                    />
                  )}
                </View>
              </View>
            </>
          ) : (
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/india_flag.jpg")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossWin}</Text>
                <Text style={styles.textScore}>
                  {data.totalRuns}-{data.wicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({over} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.currentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.currentRunRate}
                </Text>
              </View>
            </View>
          )}

          <View>
            <Text style={styles.vsText}>Vs</Text>
          </View>

          {secondInn && secondTeamBatting === data.teamTossLoss ? (
            <>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/sri_Lanka_flag.png")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossLoss}</Text>
                <Text style={styles.textScore}>
                  {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({secondInningOver} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.secondInnCurrentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.secondInnCurrentRunRate}
                </Text>
                {/* ------------------------------bat image icon------------------------------- */}
                <View>
                  {secondInn && secondTeamBatting === data.teamTossLoss && (
                    <Image
                      source={require("../../assets/cricket_bat.png")}
                      style={styles.battingImage}
                    />
                  )}
                </View>
              </View>
            </>
          ) : (
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/sri_Lanka_flag.png")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossLoss}</Text>
                <Text style={styles.textScore}>
                  {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({secondInningOver} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.secondInnCurrentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.secondInnCurrentRunRate}
                </Text>
              </View>
            </View>
          )}
        </View>
      ) : (
        // ----------------------------------if tossWin team choose the bowling  this code exicute----------------------------
        <View style={styles.scoreSection}>
          {currentBattingTeam === data.teamTossLoss && !secondInn ? (
            <>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/sri_Lanka_flag.png")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossLoss}</Text>
                <Text style={styles.textScore}>
                  {data.totalRuns}-{data.wicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({over} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.currentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.currentRunRate}
                </Text>
                <View>
                  {currentBattingTeam === data.teamTossLoss && !secondInn && (
                    <Image
                      source={require("../../assets/cricket_bat.png")}
                      style={styles.battingImage}
                    />
                  )}
                </View>
              </View>
            </>
          ) : (
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/sri_Lanka_flag.png")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossLoss}</Text>
                <Text style={styles.textScore}>
                  {data.totalRuns}-{data.wicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({over} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.currentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.currentRunRate}
                </Text>
              </View>
            </View>
          )}

          <View>
            <Text style={styles.vsText}>Vs</Text>
          </View>

          {secondInn && secondTeamBatting === data.teamTossWin ? (
            <>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/india_flag.jpg")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossWin}</Text>
                <Text style={styles.textScore}>
                  {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({secondInningOver} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.secondInnCurrentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.secondInnCurrentRunRate}
                </Text>
                <View>
                  {secondInn && secondTeamBatting === data.teamTossWin && (
                    <Image
                      source={require("../../assets/cricket_bat.png")}
                      style={styles.battingImage}
                    />
                  )}
                </View>
              </View>
            </>
          ) : (
            <View style={styles.inActiveComponent}>
              <View style={styles.paticularTeam}>
                <Image
                  source={require("../../assets/india_flag.jpg")}
                  style={styles.flag}
                />
                <Text style={styles.text}>{data.teamTossWin}</Text>
                <Text style={styles.textScore}>
                  {data.secondInnTotalRuns}-{data.secondInnWicketFall} /{" "}
                  <Text style={styles.overText}>
                    ({secondInningOver} / {data.selectTheOver.charAt(0)})
                  </Text>
                </Text>
                <Text style={styles.textPrimary}>
                  CRR{" "}
                  {data.secondInnCurrentRunRate === ""
                    ? (0.0).toFixed(2)
                    : data.secondInnCurrentRunRate}
                </Text>
              </View>
            </View>
          )}
        </View>
      )}

      <View>
        <Text
          style={{
            marginTop: 0,
            fontSize: 12,
            color: theme.colors.fontColor,
            textAlign: "center",
          }}
        >
          {secondInn ? `2nd Inning` : `1st Inning`}
        </Text>
      </View>
      <View style={styles.separatorLine}></View>
      <View>
        <Text style={styles.textPro}>
          {message
            ? `${secondTeamBatting} has win the match by ${
                data.noOfPlayer - data.secondInnWicketFall
              } wicket  `
            : messageForTeamOne
            ? `${currentBattingTeam} win the match by ${requireRuns - 1} Runs`
            : messageForTeamSecond
            ? `${secondTeamBatting} is win by 10 wicket`
            : secondInn
            ? `${secondTeamBatting} need ${requireRunsData} runs in ${requireBallsData} balls at ${requiredRunRate.toFixed(
                2
              )} rpo`
            : `${currentBattingTeam} Projected Score is ${
                isNaN(projectedScoreData) ? 0 : projectedScoreData
              }`}
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
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "600",
    fontStyle:"italic"
  },
  scoreSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  paticularTeam: {
    position: "relative",
    alignItems: "center",
  },
  textScore: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 22,
  },
  text: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 11,
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
    marginTop:"1.2%",
    backgroundColor: "transparent",
  },
  navBarHeaderText: {
    color: theme.colors.fontColor,
    fontSize: 25,
    marginLeft: "10%",
    alignItems:"center",
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
  overText: {
    fontSize: 15,
    marginLeft: 15,
    color: theme.colors.grayColor,
  },
  battingImage: {
    height: 18,
    width: 17,
    position: "absolute",
    right: -50,
    top: -100,
  },
  inActiveComponent: {
    opacity: 0.4,
  },
  completeMatchSection: {
    backgroundColor: "green",
    height: 8,
    width: 8,
    borderRadius: 8,
  },
});
