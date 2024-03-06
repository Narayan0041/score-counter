import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit"; // Import BarChart from react-native-chart-kit

const screenWidth = Dimensions.get("window").width;

const BarChartComponent = () => {
  const data = {
    labels: ["1 over", "2 over", "3 over", "4 over"],
    datasets: [
      {
        data: [5, 15, 18, 10],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "black",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: .5,
    yAxisInterval: 2, // Set the interval between labels on the y-axis to 2
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
    height: 110,
    marginBottom: 100,
  },
});
