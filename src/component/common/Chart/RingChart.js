import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import theme from "../../../theme/style";
let screenWidth = Dimensions.get("window").width;
const RingChart = () => {
  const data = {
    labels: ["FOUR", "SIXES", "OTHER"], // optional
    data: [0.4, 0.6, 0.8],
  };
  const chartConfig = {
    backgroundGradientFrom: "black",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: .5,
    yAxisInterval: 2, // Set the interval between labels on the y-axis to 2
  };

  return (
    <View style={styles.ringChartContainer}>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={200}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <View style={styles.dataContainer}>
        {/* <View>
          <Text style={styles.DataTextHeader}>Dot Balls</Text>
          <Text style={styles.DataText}>{15}</Text>
        </View>
        <View>
          <Text style={styles.DataTextHeader}>1 runs</Text>
          <Text style={styles.DataText}>{10}</Text>
        </View>
        <View>
          <Text style={styles.DataTextHeader}>2 runs</Text>
          <Text style={styles.DataText}>{5}</Text>
        </View>
        <View>
          <Text style={styles.DataTextHeader}>3 runs</Text>
          <Text style={styles.DataText}>{3}</Text>
        </View> */}
        <View style={{marginRight:20}}>
          <Text style={styles.DataTextHeader}>4 runs</Text>
          <Text style={styles.DataText}>{10}</Text>
        </View>
        <View>
          <Text style={styles.DataTextHeader}>6 runs</Text>
          <Text style={styles.DataText}>{3}</Text>
        </View>
      </View>
    </View>
  );
};

export default RingChart;

const styles = StyleSheet.create({
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

