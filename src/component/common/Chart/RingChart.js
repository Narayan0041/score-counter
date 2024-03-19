import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import theme from "../../../theme/style";

const screenWidth = Dimensions.get("window").width;

const RingChart = () => {
  const data = useSelector((store) => store.Reducers);
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

  const boundaryData = {
    labels: ["FOUR", "SIXES", "OTHER"],
    data: activeTeam === currentBattingTeam
      ? [data?.noOfFour / 10 || 0, data?.noOfSix / 10 || 0, data?.noOfotherRuns / 10 || 0]
      : [data?.secondInnNoOfFour / 10 || 0, data?.secondInnNoOfSix / 10 || 0, data?.secondInningNoOfOtherRuns / 10 || 0],
  };

  const chartConfig = {
    backgroundGradientFrom: "black",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    yAxisInterval: 2,
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#ffa726",
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      strokeDashoffset: 0,
    },
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: "14",
      fontWeight: "bold",
      fill: "#fff",
    },
    propsForHorizontalLabels: {
      textAnchor: "start",
    },
    progressColor: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // // Blue color for "FOUR" segment
    color2: (opacity = 1) => theme.colors.secondary, // Pink color for "SIXES" segment
    color3: (opacity = 1) => theme.colors.fontColor, // White color for "OTHER" segment
  };

  const handleClick = (value) => {
    setActiveTeam(value);
  };

  return (
    <ScrollView>
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
          <Text style={{ color: "white", marginLeft: 8, fontWeight: "600" }}>
            {secondTeamBatting}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ringChartContainer}>
        <ProgressChart
          data={boundaryData}
          width={screenWidth}
          height={200}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <View style={styles.dataContainer}>
          <View style={{ marginRight: 20 }}>
            <Text style={styles.DataTextHeader}>4 runs</Text>
            <Text style={styles.DataText}>{boundaryData.data[0]}</Text>
          </View>
          <View>
            <Text style={styles.DataTextHeader}>6 runs</Text>
            <Text style={styles.DataText}>{boundaryData.data[1]}</Text>
          </View>
          <View>
            <Text style={[styles.DataTextHeader, { marginLeft: 10 }]}>
              Other runs
            </Text>
            <Text style={styles.DataText}>{boundaryData.data[2]}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RingChart;

const styles = StyleSheet.create({
  displayTeamName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
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
