import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../theme/style";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  currentRunRate,
  modalBox,
  noOfFour,
  noOfNOBall,
  noOfOtherRuns,
  noOfSix,
  noOfWideBall,
  runRateChart,
  runsScoreBoard,
  secondInnCurrentRunRate,
  secondInnNoOFOtherRun,
  secondInnNoOfFour,
  secondInnNoOfNOBall,
  secondInnNoOfSix,
  secondInnNoOfWideBall,
  secondInnRunsScoreBoard,
  secondInnTotalNoOFBalls,
  secondInnTotalRun,
  secondInnWicketFall,
  secondInnWicketFallWithRun,
  secondInningRunRateChart,
  totalNoOFBalls,
  totalRun,
  wicketFall,
  wicketFallWithRun,
} from "../Store/Action";
import ModalPopUp from "./ModalPopUp";

const ScoreAddSection = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.Reducers);
  // console.warn(data);
  // console.error(data.secondInnRunScoreBoard)
  const [showScoreContainer, setShowScoreContainer] = useState(false);
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);
  const [noBalls, setNoBalls] = useState(0);
  const [wides, setWides] = useState(0);
  const [runRate, setRunRate] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [overData, setOverData] = useState([]);
  const [legBy, setLegBy] = useState(0);

  //second inning State
  const [secondInnLegBy, setSecondInnLegBy] = useState(0);
  const [secondInnBalls, setSecondInnBalls] = useState(0);
  const [secondInnRuns, setSecondInnRuns] = useState(0);
  const [secondInnNoBalls, setSecondInnNoBalls] = useState(0);
  const [secondInnWides, setSecondInnWides] = useState(0);
  const [secondInnRunRate, setSecondInnRunRate] = useState(0);
  const [secondInnWicket, setSecondInnWicket] = useState(0);
  const [secondInnOverData, setSecondInnOverData] = useState([]);
  const [getStartButtonActive, setGetStartButtonActive] = useState(undefined);
  const [runsInOver, setRunsInOver] = useState([]);
  const [allRuns, setAllRuns] = useState([]);
  const [popUp, setPopUp] = useState(data.modalBox);

  // const handleBall = () => {
  //   if (!data.secondInning) {
  //     setBalls(balls + 1);
  //   } else {
  //     setSecondInnBalls(balls + 1);
  //   }
  // };

  const handleRun = (runCount) => {
    if (!data.secondInning) {
      setRuns(runs + runCount);
      setBalls((prev) => prev + 1);
      if (runCount !== 6 && runCount !== 4) {
        dispatch(noOfOtherRuns(data.noOfotherRuns + 1));
      }
      if (runCount === 4) {
        dispatch(noOfFour(data.noOfFour + 1));
      }
      if (runCount === 6) {
        dispatch(noOfSix(data.noOfSix + 1));
      }
    } else {
      setSecondInnRuns(secondInnRuns + runCount);
      setSecondInnBalls((prev) => prev + 1);
      if (runCount !== 6 && runCount !== 4) {
        dispatch(secondInnNoOFOtherRun(data.secondInningNoOfOtherRuns + 1));
      }
      if (runCount === 4) {
        dispatch(secondInnNoOfFour(data.secondInnNoOfFour + 1));
      }
      if (runCount === 6) {
        dispatch(secondInnNoOfSix(data.secondInnNoOfSix + 1));
      }
    }
    // Assuming this code is inside a function or a useEffect hook
    // Assuming this code is inside a function or a useEffect hook
    //   setRunsInOver((prevRuns) => {
    //     const newRunsInOver = [...prevRuns, runCount];
    //     // if (newRunsInOver.length === 6) {
    //     //   setAllRuns((prevAllRuns) => [...prevAllRuns, newRunsInOver]);
    //     //   return [];
    //     // } else if (newRunsInOver.length > 6) {
    //     //   setAllRuns((prevAllRuns) => [...prevAllRuns, newRunsInOver.slice(0, 6)]);
    //     //   return newRunsInOver.slice(6);
    //     // }
    //     return newRunsInOver;
    //   });
  };

  const handleWicket = () => {
    if (!data.secondInning) {
      setWicket((prev) => prev + 1);
      setBalls((prev) => prev + 1);
    } else {
      setSecondInnWicket((prev) => prev + 1);
      setSecondInnBalls((prev) => prev + 1);
    }
  };

  const handleNoBall = (value) => {
    dispatch(modalBox(true));
    if (!data.secondInning) {
      setNoBalls((prev) => prev + 1);
    } else {
      setSecondInnNoBalls((prev) => prev + 1);
    }
  };

  const handleWide = (value) => {
    if (!data.secondInning) {
      setWides((prevWides) => prevWides + 1);
    } else {
      setSecondInnWides((prevSecondInnWides) => prevSecondInnWides + 1);
    }
    dispatch(modalBox(true));
  };

  const handleLegBy = (value) => {
    dispatch(modalBox(true));
    if (!data.secondInning) {
      setLegBy(true);
    } else {
      setSecondInnBalls(true);
    }
  };

  useEffect(() => {
    if (!data.secondInning && wicket) {
      dispatch(wicketFall(wicket));
      dispatch(
        wicketFallWithRun({
          runs,
          wicket,
          balls: `${Math.floor(balls / 6)}.${balls % 6}`,
        })
      );
    } else if (data.secondInning && secondInnWicket) {
      dispatch(secondInnWicketFall(secondInnWicket));
      dispatch(
        secondInnWicketFallWithRun({
          secondInnRuns,
          secondInnWicket,
          secondInnBalls: `${Math.floor(secondInnBalls / 6)}.${
            secondInnBalls % 6
          }`,
        })
      );
    }
  }, [wicket, secondInnWicket]);

  useEffect(() => {
    if (!data.secondInning) {
      if (runs) {
        dispatch(totalRun(runs));
      }
      if (balls) {
        dispatch(totalNoOFBalls(balls));
      }
      if (runs && balls) {
        const runsScored = parseFloat(runs);
        const ballsFaced = parseFloat(balls);
        const runRateValue = (runsScored / (ballsFaced / 6)).toFixed(2);
        setRunRate(runRateValue);
      }
      if (noBalls) {
        dispatch(noOfNOBall(noBalls));
      }
      if (wides) {
        dispatch(noOfWideBall(wides));
      }
      dispatch(currentRunRate(runRate));
    } else {
      if (secondInnRuns) {
        dispatch(secondInnTotalRun(secondInnRuns));
      }
      if (secondInnBalls) {
        dispatch(secondInnTotalNoOFBalls(secondInnBalls));
      }
      if (secondInnRuns && secondInnBalls) {
        const runsScored = parseFloat(secondInnRuns);
        const ballsFaced = parseFloat(secondInnBalls);
        const runRateValue = (runsScored / (ballsFaced / 6)).toFixed(2);
        setSecondInnRunRate(runRateValue);
        dispatch(secondInnCurrentRunRate(runRateValue));
      }
      if (secondInnNoBalls) {
        dispatch(modalBox(true));
        dispatch(secondInnNoOfNOBall(secondInnNoBalls));
      }
      if (secondInnWides) {
        dispatch(secondInnNoOfWideBall(secondInnWides));
      }

      // if (runsInOver) {
      //   dispatch(runsScoreBoard(runsInOver));
      // }
    }
  }, [
    runs,
    balls,
    runRate,
    noBalls,
    wides,
    wicket,
    runsInOver,
    secondInnWicket,
    secondInnRuns,
  ]);

  useEffect(() => {
    if (data.getStartButton) {
      setGetStartButtonActive(data.getStartButton);
      setShowScoreContainer(!data.getStartButton);
    }
  }, [getStartButtonActive, data.getStartButton, showScoreContainer]);

  useEffect(() => {
    setPopUp(data.modalBox);
  }, [data.modalBox]);

  useEffect(() => {
    if (!data.secondInning) {
      dispatch(
        runsScoreBoard({
          runs: runs,
          over: `${Math.floor(balls / 6)}.${balls % 6}`,
        })
      );
    } else {
      dispatch(
        secondInnRunsScoreBoard({
          secondInnRuns,
          over: `${Math.floor(secondInnBalls / 6)}.${secondInnBalls % 6}`,
        })
      );
    }
  }, [runs, balls, secondInnRuns, secondInnBalls, data.secondInning]);

  useEffect(() => {
    if (!data.secondInning) {
      dispatch(
        runRateChart({
          runRate,
          over: `${Math.floor(balls / 6)}.${balls % 6}`,
        })
      );
    } else {
      dispatch(
        secondInningRunRateChart({
          secondInnRunRate,
          over: `${Math.floor(secondInnBalls / 6)}.${secondInnBalls % 6}`,
        })
      );
    }
  }, [runRate, secondInnRunRate]);
  return (
    <>
      {popUp && (
        <ModalPopUp
          data={data.totalRuns}
          secondInningdata={data.secondInnTotalRuns}
          setRuns={setRuns}
          setSecondInnRuns={setSecondInnRuns}
          setWides={setWides}
          setSecondInnWides={setSecondInnWides}
          setLegBy={setLegBy}
          setSecondInnLegBy={setSecondInnLegBy}
          setBalls={setBalls}
          setSecondInnBalls={setSecondInnBalls}
        />
      )}
      <View style={styles.scoreContainer}>
        {showScoreContainer ? (
          <View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(6)}
              >
                <Text style={styles.runText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(4)}
              >
                <Text style={styles.runText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(3)}
              >
                <Text style={styles.runText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(2)}
              >
                <Text style={styles.runText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(1)}
              >
                <Text style={styles.runText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.runBox}
                onPress={() => handleRun(0)}
              >
                <Text style={styles.runText}>0</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity
                style={[styles.umpireSignal, { backgroundColor: "skyblue" }]}
                onPress={() => handleNoBall("No")}
              >
                <Image
                  source={require("../assets/no_ball.png")}
                  style={styles.umpireImage}
                />
                <Text style={styles.umpireSignalText}>No Ball</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.umpireSignal, { backgroundColor: "red" }]}
                onPress={handleWicket}
              >
                <Image
                  source={require("../assets/out.png")}
                  style={styles.umpireImage}
                />
                <Text style={styles.umpireSignalText}>Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.umpireSignal, { backgroundColor: "green" }]}
                onPress={() => handleWide("Wide")}
              >
                <Image
                  source={require("../assets/wide_ball.png")}
                  style={styles.umpireImage}
                />
                <Text style={styles.umpireSignalText}>Wide</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container3}>
              <TouchableOpacity
                style={[styles.extraOptionBox, { paddingTop: 1 }]}
                onPress={() => setShowScoreContainer(false)}
              >
                <Icon
                  name="arrow-down-sharp"
                  style={{
                    fontSize: 20,
                    paddingTop: 0,
                    fontWeight: "800",
                    color: theme.colors.fontColor,
                  }}
                />
                <Text style={{ color: "white", fontWeight: "800" }}>
                  Close Tab
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.extraOptionBox}
                onPress={() => handleLegBy("LB")}
              >
                <Text style={styles.extraOptionText}>LB</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.extraOptionBox}
                onPress={() => handleLegBy("UNDO")}
              >
                <Text style={styles.extraOptionText}>UNDO</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.getStartContainer}>
            <TouchableOpacity
              style={
                getStartButtonActive ? styles.inActiveButton : styles.button
              }
              disabled={getStartButtonActive}
              onPress={() => setShowScoreContainer(true)}
            >
              <Text style={styles.text}>Get Start</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default ScoreAddSection;

const styles = StyleSheet.create({
  scoreContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingTop: 15,
    width: "100%",
    backgroundColor: theme.colors.background,
    paddingBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  container2: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 55,
    paddingRight: 55,
  },
  container3: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  runBox: {
    height: 55,
    width: 55,
    alignItems: "center",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 30,
    paddingTop: 5,
  },
  umpireSignal: {
    height: 80,
    width: 80,
    alignItems: "center",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 40,
    paddingTop: 10,
  },
  extraOptionBox: {
    height: 50,
    width: 100,
    alignItems: "center",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 40,
    paddingTop: 7,
  },
  runText: {
    fontSize: 30,
    fontWeight: "900",
    color: theme.colors.fontColor,
  },
  umpireSignalText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.fontColor,
  },
  extraOptionText: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "600",
    color: theme.colors.fontColor,
  },
  umpireSignalText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.fontColor,
  },
  umpireImage: {
    width: 35,
    height: 35,
  },
  getStartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  inActiveButton: {
    backgroundColor: theme.colors.grayColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
