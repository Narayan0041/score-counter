import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit"; // Import BarChart from react-native-chart-kit

const screenWidth = Dimensions.get("window").width;

const BarChartComponent = () => {
  const data = {
    labels: ["1 over", "2 over", "3 over", "4 over"],
    datasets: [
      // {
      //   data: [5, 15, 18, 10], // Data for the first team
      //   color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Color for the first team
      //   legend: "Team 1", // Legend label for the first team
      // },
      {
        data: [10, 8, 12, 15], // Data for the second team
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color for the second team
        legend: "Team 2", // Legend label for the second team
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "black",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    yAxisInterval: 2,
    legend: {
      labels: {
        color: "red", // Change legend text color to red
      },
    },
    fromZero: true, // Ensure the y-axis starts from zero
  };

  return (
    <View>
      <View style={styles.chart}>
        <BarChart
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={0}
        />
      </View>
    </View>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({
  chart: {
    marginTop: 10,
    height: 220, // Adjusted height to accommodate both the chart and the legend
    marginBottom: 10,
  },
});
