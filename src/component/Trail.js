import { LineChart } from "react-native-gifted-charts";
import theme from "../theme/style";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { React, useState } from "react";
export const Trail = () => {
  const data = useSelector((state) => state.Reducers);
  //  console.warn(data.runScoreBoard)
const runsScoreBoard = data.runsScoreBoard;
console.error(runsScoreBoard)
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
  // Assuming you have dynamic data like this
const dynamicData1 = [{run:1},{run:2},{run:100}];
const dynamicData2 = [{run:5},{run:8},{run:15}];

// Transform the data to match the expected format
const transformedData1 = dynamicData1.map(item => ({ value: item.run }));
const transformedData2 = dynamicData2.map(item => ({ value: item.run }));
  const xAxisLabelTexts = ["1", "2", "3", "4", "5"]; // Custom y-axis labels

  return (
    <View style={styles.LineChartContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.radio1}></View>
          <Text style={styles.team1}>{currentBattingTeam}</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.radio2}></View>
          <Text style={styles.team2}>{secondTeamBatting}</Text>
        </View>
      </View>
      <LineChart
        data={transformedData1}
        data2={transformedData2}
        backgroundColor={theme.colors.secondaryBackground}
        thickness={1}
        isAnimated={true}
        width={250}
        spacing={50}
        initialSpacing={10}
        color1={theme.colors.fontColor}
        color2={theme.colors.primary}
        hideDataPoints1
        hideDataPoints2
        dashGap={3}
        noOfSections={5}
        stepHeight={25}
        rulesColor="#444444"
        xAxisLabelTexts={xAxisLabelTexts}
        xAxisLabelTextStyle={{ color: theme.colors.fontColor }}
        xAxisTextStyle={{ color: theme.colors.fontColor }}
        yAxisTextStyle={{ color: theme.colors.fontColor }}
        yAxisColor={theme.colors.secondaryBackground}
        xAxisColor={theme.colors.fontColor}
      />
      <View style={styles.runsLabel}>
        <Text style={styles.team2}>Runs</Text>
      </View>
      <View style={styles.oversLabel}>
        <Text style={styles.team2}>OVERS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LineChartContainer: {
    marginTop: 20,
    paddingLeft: 25,
    backgroundColor: theme.colors.secondaryBackground,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  team1: {
    color: theme.colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  team2: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  radio1: {
    height: 8,
    width: 25,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginRight: 5,
  },
  radio2: {
    height: 8,
    width: 25,
    backgroundColor: "white",
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 5,
  },
  runsLabel: {
    position: "absolute",
    left: -5,
    top: "50%",
    transform: [{ rotate: "-90deg" }],
  },
  oversLabel: {
    alignItems: "center",
    marginTop: 5,
  },
});
