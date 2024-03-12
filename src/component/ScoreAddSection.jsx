import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../theme/style";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  currentRunRate,
  noOfNOBall,
  noOfWideBall,
  runsScoreBoard,
  secondInnCurrentRunRate,
  secondInnNoOfNOBall,
  secondInnNoOfWideBall,
  secondInnTotalNoOFBalls,
  secondInnTotalRun,
  secondInnWicketFall,
  totalNoOFBalls,
  totalRun,
  wicketFall,
} from "../Store/Action";

const ScoreAddSection = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.Reducers);
// console.warn(data)
  const [showScoreContainer, setShowScoreContainer] = useState(false);
  //ball counting
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);
  const [noBalls, setNoBalls] = useState(0);
  const [wides, setWides] = useState(0);
  const [runRate, setRunRate] = useState("");
  const [wicket, setWicket] = useState(0);
  const [overData, setOverData] = useState([]);

  // second Inning
  const [secondInnBalls, setSecondInnBalls] = useState(0);
  const [secondInnRuns, setSecondInnRuns] = useState(0);
  const [secondInnNoBalls, setSecondInnNoBalls] = useState(0);
  const [secondInnWides, setSecondInnWides] = useState(0);
  const [secondInnRunRate, setSecondInnRunRate] = useState("");
  const [secondInnWicket, setSecondInnWicket] = useState(0);
  const [secondInnOverData, setSecondInnOverData] = useState([]);

  // const [currentOver, setCurrentOver] = useState(1);

  const handleBall = () => {
    if (!data.secondInning) {
      setBalls(balls + 1);
    } else {
      setSecondInnBalls(balls + 1);
    }
  };

  const handleRun = (runCount) => {
    if (!data.secondInning) {
      setRuns(runs + runCount);
      setBalls((prev) => prev + 1);
    } else {
      setSecondInnRuns(secondInnRuns + runCount);
      setSecondInnBalls((prev) => prev + 1);
    }

    const updatedOverData = [...overData, runCount];
    setOverData(updatedOverData);
    // dispatch(runsScoreBoard(updatedOverData))
    // If over is completed (6 balls), update container and reset over data
    // if (updatedOverData.length === 6) {
    //   console.log(`Over ${currentOver} completed. Data: `, updatedOverData);
    //   setOverData([]);
    //   setCurrentOver(currentOver + 1);
    // dispatch(runsScoreBoard([]))

    // }
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
    if (!data.secondInning) {
      setNoBalls(value + 1);
    } else {
      setSecondInnNoBalls(value + 1);
    }
  };

  const handleWide = (value) => {
    if (!data.secondInning) {
      setWides(value + 1);
    } else {
      setSecondInnWides(value + 1);
    }
  };
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
      if (wicket) {
        dispatch(wicketFall(wicket));
      }
      dispatch(currentRunRate(runRate));
    }
    
    else {
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
        dispatch(secondInnNoOfNOBall(secondInnNoBalls));
      }
      if (secondInnWides) {
        dispatch(secondInnNoOfWideBall(secondInnWides));
      }
      if (secondInnWicket) {
        dispatch(secondInnWicketFall(secondInnWicket));
      }
    }
    
  }, [runs, balls, runRate, noBalls, wides, wicket,secondInnBalls ,secondInnRuns ,secondInnNoBalls ,secondInnWides ,secondInnRunRate ,secondInnWicket]);
  return (
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
            <TouchableOpacity style={styles.runBox} onPress={handleBall}>
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
              onPress={() => handleClick("LB")}
            >
              <Text style={styles.extraOptionText}>LB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.extraOptionBox}
              onPress={() => handleClick("UNDO")}
            >
              <Text style={styles.extraOptionText}>UNDO</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.getStartContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowScoreContainer(true)}
          >
            <Text style={styles.text}>Get Start</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
