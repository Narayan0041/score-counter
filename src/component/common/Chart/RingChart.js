import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { ProgressChart } from "react-native-chart-kit";
import theme from "../../../theme/style";
import { useSelector } from "react-redux";

let screenWidth = Dimensions.get("window").width;

const RingChart = () => {
  let data = useSelector((store) => store.Reducers);
console.warn(data.noOfotherRuns)
const [currentBattingTeam, setCurrentBattingTeam] = useState("");
const [secondTeamBatting, setSecondTeamBatting] = useState("");
const [activeTeam, setActiveTeam] = useState(currentBattingTeam);

  useEffect(() => {
    if (data) {
      setCurrentBattingTeam(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossWin
          : data.teamTossLoss
      );
      setSecondTeamBatting(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossLoss
          : data.teamTossWin
      );
    }
  }, [data]); // Run this effect only when 'data' changes

  const boundaryData = {
    labels: ["FOUR", "SIXES", "OTHER"],
    data: [
      data?.noOfFour || 0,
      data?.noOfSix || 0,
      data?.noOfotherRuns || 0
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "black",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 100,
    yAxisInterval: 2,
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#ffa726"
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      strokeDashoffset: 0
    },
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: "14",
      fontWeight: "bold",
      fill: "#fff"
    },
    propsForHorizontalLabels: {
      textAnchor: "start"
    },
    color1: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color for "FOUR" segment
    color2: (opacity = 1) => `rgba(255, 192, 203, ${opacity})`, // Pink color for "SIXES" segment
    color3: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color for "OTHER" segment
  };

  const handleClick = (value) => {
    setActiveTeam(value);
  };

  return (
    <>
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
          <View style={{marginRight:20}}>
            <Text style={styles.DataTextHeader}>4 runs</Text>
            <Text style={styles.DataText}>{data?.noOfFour || 0}</Text>
          </View>
          <View>
            <Text style={styles.DataTextHeader}>6 runs</Text>
            <Text style={styles.DataText}>{data?.noOfSix || 0}</Text>
          </View>
          <View>
            <Text style={[styles.DataTextHeader, {marginLeft:10}]}>Other runs</Text>
            <Text style={styles.DataText}>{data.noOfotherRuns || 0}</Text>
          </View>
        </View>
      </View>
    </>
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
    marginTop: 30
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    // marginTop:20
  },
  DataText: {
    color: theme.colors.fontColor,
    textAlign: "center", 
    fontSize:17,
    fontWeight:"600"
  },
  DataTextHeader: {
    color: "gray",
    textAlign: "center",
    fontSize:15,
    fontWeight:"600"
  }
});
