import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";
let screenWidth = Dimensions.get("window").width;
const RingChart = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
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
    </View>
  );
};

export default RingChart;

const styles = StyleSheet.create({
    ringChartContainer:{
        marginTop:30
    }
});
