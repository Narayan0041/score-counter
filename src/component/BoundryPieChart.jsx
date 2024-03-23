import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import theme from "../theme/style";
import { useSelector } from "react-redux";

const BoundryPieChart = () => {
  const data = useSelector((store) => store.Reducers);
  // console.warn(data.noOfotherRuns);
  const [focusedIndex, setFocusedIndex] = useState(2);
  const [currentBattingTeam, setCurrentBattingTeam] = useState("");
  const [secondTeamBatting, setSecondTeamBatting] = useState("");
  const [activeTeam, setActiveTeam] = useState(undefined);

  useEffect(() => {
    if (data) {
      setCurrentBattingTeam(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossWin
          : data.teamTossLoss
      );
      setActiveTeam(currentBattingTeam);
      setSecondTeamBatting(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossLoss
          : data.teamTossWin
      );
    }
  }, [data, currentBattingTeam]);

  let fourData =
    activeTeam === currentBattingTeam ? data.noOfFour : data.secondInnNoOfFour;
  let sixData =
    activeTeam === currentBattingTeam ? data.noOfSix : data.secondInnNoOfSix;
  let otherRuns =
    activeTeam === currentBattingTeam
      ? data.noOfotherRuns
      : data.secondInningNoOfOtherRuns;
  const total = fourData + sixData + otherRuns;
  const handleClick = (value) => {
    setActiveTeam(value);
  };
  const pieData = [
    {
      value: (fourData / total) * 100,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: focusedIndex === 0,
    },
    {
      value: (sixData / total) * 100,
      color: "rgb(217 0 141)",
      // gradientCenterColor: "#3BE9DE",
      focused: focusedIndex === 1,
    },
    {
      value: (otherRuns / total) * 100,
      color: "#BDB2FA",
      gradientCenterColor: "#8F80F3",
      focused: focusedIndex === 2,
    },
  ];

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const handlePress = (index) => {
    setFocusedIndex(index);
  };

  const renderLegendComponent = () => {
    return (
      <View style={styles.legendContainer}>
        <TouchableOpacity onPress={() => handlePress(0)}>
          <View style={styles.legendItem}>
            <View style={styles.legendItemContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {renderDot("#006DFF")}
                <Text style={styles.legendText}>FOURS </Text>
              </View>
              <Text style={styles.legendValue}>{fourData}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(1)}>
          <View style={styles.legendItem}>
            <View style={styles.legendItemContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {renderDot("#rgb(217 0 141)")}
                <Text style={styles.legendText}>SIXES </Text>
              </View>
              <Text style={styles.legendValue}>{sixData}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(2)}>
          <View style={styles.legendItem}>
            <View style={styles.legendItemContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {renderDot("#8F80F3")}
                <Text style={styles.legendText}>OTHER RUNS </Text>
              </View>
              <Text style={styles.legendValue}>
                {((otherRuns / total) * 100).toFixed(2) === "NaN"
                  ? 0
                  : ((otherRuns / total) * 100).toFixed(2)} %
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.ScrollViewContainer}>
      <View style={styles.displayTeamName}>
        <TouchableOpacity
          onPress={() => handleClick(currentBattingTeam)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor:
                activeTeam === currentBattingTeam
                  ? theme.colors.primary
                  : theme.colors.fontColor,
              height: 8,
              width: 8,
              borderRadius: 4,
            }}
          ></View>
          <Text
            style={{
              color: "white",
              marginRight: "5%",
              marginLeft: 8,
              fontWeight: "600",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {currentBattingTeam}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleClick(secondTeamBatting)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor:
                activeTeam === secondTeamBatting
                  ? theme.colors.primary
                  : "white",
              height: 8,
              width: 8,
              borderRadius: 4,
            }}
          ></View>
          <Text
            style={{
              color: "white",
              marginLeft: 8,
              fontWeight: "600",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {secondTeamBatting}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Show the number of Boundary</Text>
          <View style={styles.chartContainer}>
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={90}
              innerRadius={60}
              innerCircleColor={"#232B5D"}
              centerLabelComponent={() => {
                return (
                  <View style={styles.centerLabel}>
                    <Text style={styles.centerLabelText}>
                      {pieData[focusedIndex]?.value.toFixed(2)}%
                    </Text>
                    <Text style={styles.centerLabelFocused}>
                      {focusedIndex === 0
                        ? "Fours"
                        : focusedIndex === 1
                        ? "Sixes"
                        : "Other runs"}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          {renderLegendComponent()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    padding: 16,
    borderRadius: 20,
  },
  ScrollViewContainer:{
    marginBottom:"15%",
  },
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  chartContainer: {
    padding: 20,
    alignItems: "center",
  },
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  centerLabelFocused: {
    fontSize: 14,
    color: "white",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: "100%",
  },
  legendItem: {
    alignItems: "center",
    width: 160,
  },
  legendItemContent: {
    alignItems: "center",
  },
  legendText: {
    color: "lightgray",
    fontSize: 16,
  },
  legendValue: {
    color: "white",
    fontSize: 20,
  },
  displayTeamName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
  },
  ringChartContainer: {
    marginTop: 30,
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  DataText: {
    color: theme.colors.fontColor,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },
  DataTextHeader: {
    color: "gray",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default BoundryPieChart;
