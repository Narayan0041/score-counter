import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScoreSection = () => {
  return (
     <View>
     <Text style={styles.text}>ScoreCountingScoreSection</Text>
     <View style={styles.scoreBoard}>
       <View style={styles.teamNameContainer}>
         <Text style={[styles.text, styles.teamNameText]}>Bahndup</Text>
       </View>
       <View style={styles.scoreContainer}>
         <Text style={[styles.text, styles.scoreText]}>Second</Text> 
       </View>
       <View style={styles.overContainer}>
         <Text style={[styles.text, styles.overText]}>0.1 / <Text>4</Text></Text>
         <Text>Overs</Text>
       </View>
     </View>
   </View>
  );
};

export default ScoreSection;

const styles = StyleSheet.create({
  teamNameContainer: {
    borderWidth: 2,
    width: "37%",
    paddingTop:"30",
    paddingBottom:"30",
    backgroundColor: "orange",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  teamNameText: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center", // Center text horizontally
    textAlignVertical: "center", // Center text vertically
  },
  scoreContainer: {
    width: "26%",
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  scoreText: {
    padding: 20,
  },
  overContainer: {
    borderWidth: 2,
    width: "37%",
    backgroundColor: "orange",
    // height: "50%",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  overText: {
    textAlign: "center", // Center text horizontally
    textAlignVertical: "center", // Center text vertically
    fontSize:20,
    fontWeight:"800"
  },
  scoreBoard: {
    flexDirection: "row",
    // height: "30%",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
