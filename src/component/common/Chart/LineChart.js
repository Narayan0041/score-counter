import { View, Text, Alert } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

// Define chart configuration
const chartConfig = {
  backgroundGradientFrom: "black",
  // backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

export default function LineChartComponent() {
  const data = {
    labels: ["1 over", "2 over", "3 over", "4 over"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 4, // optional
      },
    ],
    legend: ["Team 1"], // optional
  };

  const handleDataPointClick = (data) => {
    Alert.alert("Data Point Clicked", `Value: ${data.value}`);
  };

  return (
    <View>
      <Text>Chart</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        onDataPointClick={handleDataPointClick}
        withVerticalLabels={true} // Show y-axis labels
        withHorizontalLabels={true} // Show x-axis labels
      />
    </View>
  );
}
