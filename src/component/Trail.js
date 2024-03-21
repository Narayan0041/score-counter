import { LineChart } from "react-native-gifted-charts";
import theme from "../theme/style";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { React, useState } from "react";
import { noOfFour } from "../Store/Action";
export const Trail = () => {
  const data = useSelector((state) => state.Reducers);
  let noOfOver = [];
  const numOfOvers = parseInt(data.selectTheOver.charAt(0)); 
  
  for (let i = 1; i <= numOfOvers; i++) { 
    noOfOver.push(i);
  }
  const [currentBattingTeam, setCurrentBattingTeam] = useState(
    data.teamTossWin && data.whatYouChoose === "batting"
      ? data.teamTossWin
      : data.teamTossLoss
  );

  const [secondTeamBatting, setSecondTeamBatting] = useState(
    data.teamTossWin && data.whatYouChoose === "batting"
      ? data.teamTossLoss
      : data.teamTossWin
  );

  const dynamicRunsData1 = data.runScoreBoard;

  const dynamicRunsData2 = data.secondInnRunScoreBoard

  const transformedRunsData1 = dynamicRunsData1.map((item) => ({
    value: item.over,
    value: item.runs
  }));
  const transformedRunsData2 = dynamicRunsData2.map((item) => ({
    value: item.over,
    value: item.secondInnRuns
  }));
  // console.error(transformedRunsData1)
  // console.error(transformedRunsData2)
  const xAxisLabelTexts = noOfOver; // Custom x-axis labels

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
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <LineChart
          data={transformedRunsData1}
          data2={transformedRunsData2}
          backgroundColor={theme.colors.secondaryBackground}
          thickness={2.3}
          isAnimated={true}
          width={280}
          spacing={50}
          initialSpacing={10}
          color1={theme.colors.fontColor}
          color2={theme.colors.primary}
          hideDataPoints1 
          hideDataPoints2
          dashGap={3}
          noOfSections={5}
          stepHeight={30}
          rulesColor="#444444"
          xAxisLabelTexts={xAxisLabelTexts}
          xAxisLabelTextStyle={{ color: theme.colors.fontColor }}
          xAxisTextStyle={{ color: theme.colors.fontColor }}
          yAxisTextStyle={{ color: theme.colors.fontColor }}
          yAxisColor={theme.colors.secondaryBackground}
          xAxisColor={theme.colors.fontColor}
        />
      </View>
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
    color: theme.colors.fontColor,
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
    width: 15,
    backgroundColor: theme.colors.fontColor,
    borderRadius: 4,
    marginRight: 5,
  },
  radio2: {
    height: 8,
    width: 15,
    backgroundColor: theme.colors.primary,
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
