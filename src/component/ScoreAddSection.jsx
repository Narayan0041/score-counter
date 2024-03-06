import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ScoreAddSection = () => {
  const [showScoreContainer, setShowScoreContainer] = useState(false);
  const handleClick = (text) => {
    alert(text);
  };
  return (
    <View style={styles.scoreContainer}>
      {showScoreContainer ? (
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("6")}
            >
              <Text style={styles.runText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("4")}
            >
              <Text style={styles.runText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("3")}
            >
              <Text style={styles.runText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("2")}
            >
              <Text style={styles.runText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("1")}
            >
              <Text style={styles.runText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleClick("0")}
            >
              <Text style={styles.runText}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container2}>
            <TouchableOpacity
              style={[styles.umpireSignal, { backgroundColor: "skyblue" }]}
              onPress={() => handleClick("No")}
            >
              <Image
                source={require("../assets/no_ball.png")}
                style={styles.umpireImage}
              />
              <Text style={styles.umpireSignalText}>No Ball</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.umpireSignal, { backgroundColor: "red" }]}
              onPress={() => handleClick("W")}
            >
              <Image
                source={require("../assets/out.png")}
                style={styles.umpireImage}
              />
              <Text style={styles.umpireSignalText}>Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.umpireSignal, { backgroundColor: "green" }]}
              onPress={() => handleClick("Wide")}
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
              style={styles.extraOptionBox}
              onPress={() => setShowScoreContainer(false)}
            >
              <Icon
                name="arrow-down-sharp"
                style={{
                  fontSize: 20,
                  paddingTop: 7,
                  color: theme.colors.fontColor,
                }}
              />
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
          <TouchableOpacity style={styles.button} onPress={()=>setShowScoreContainer(true)}>
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
    paddingTop:15,
    width: "100%",
    backgroundColor:theme.colors.background,
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
  getStartContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
