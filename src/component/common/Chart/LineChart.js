import { View, Alert, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
  legend: {
    labels: {
      color: "blue", // Change legend text color to blue
    },
    legendFontSize: 12, // Adjust legend font size
    legendFontWeight: "bold", // Adjust legend font weight
    legendPosition: "top", // Display legend at the top
  },
  bezier: false,
};

export default function LineChartComponent() {
  const [dataPointValue, setDataPointValue] = useState(null);
  const [showDataPointMessage, setShowDataPointMessage] = useState(false);

  const data = {
    labels: ["1 over", "2 over", "3 over", "4 over"],
    datasets: [
      {
        data: [20, 45, 28, 80], // Remove extra data points
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 4,
        legend: "Team 1", 
      },
      {
        data: [22, 45, 20, 100], // Adjust data points according to your need
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Use white color for the second dataset
        strokeWidth: 4,
        legend: "Team 2", 
      },
    ],
  };

  const handleDataPointClick = (data) => {
    setDataPointValue(data.value);
    setShowDataPointMessage(true);
    setTimeout(handleCloseDataPointMessage, 1500);
  };

  const handleCloseDataPointMessage = () => {
    setShowDataPointMessage(false);
  };

  return (
    <View style={{marginTop:25}}>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        onDataPointClick={handleDataPointClick}
        withVerticalLabels={true} // Show y-axis labels
        withHorizontalLabels={true} // Show x-axis labels
      />
      {showDataPointMessage && (
        <View style={{ position: "absolute", bottom: 20, alignSelf: "center", backgroundColor: "white", borderRadius: 5, padding: 10 }}>
          <Text>Data Point Value: {dataPointValue}</Text>
          <TouchableOpacity onPress={handleCloseDataPointMessage}>
            <Text style={{ color: "blue" }}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
