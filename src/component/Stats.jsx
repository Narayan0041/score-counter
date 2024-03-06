import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import { TouchableOpacity } from "react-native";
import LineChart from "./common/Chart/LineChart";
import BarChart from "./common/Chart/BarChart";
import LineChartComponent from "./common/Chart/LineChart";
import BarChartComponent from "./common/Chart/BarChart";

const Stats = () => {
  const statsTabs = ["Runs", "Runrate"];
  const [activeButton, setActiveButton] = useState("Runs");

  const handlePress = (item) => {
    setActiveButton(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        {statsTabs.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabContainer,
              activeButton === item && styles.activeTab,
            ]}
            onPress={() => handlePress(item)}
          >
            <Text
              style={[
                styles.tabs,
                activeButton === item && styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* {activeButton === "Runs" && <Text style={{color:"white"}}>hello</Text>}
      {activeButton === "Runrate" && <Text style={{color:"white"}}>hello2</Text>} */}
      { activeButton === "Runs" && <LineChartComponent/>}
      {activeButton === "Runrate" && <BarChartComponent/>}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  flatListContainer: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabContainer: {
    width: "30%",
    borderRadius: 8,
    backgroundColor: "gray",
    padding: 10,
    justifyContent: "center",
    alignItems: "center", // Center text vertically
    marginHorizontal: 5,
    marginTop:10
  },
  tabs: {
    color: theme.colors.fontColor,
    fontSize: 12,
    textTransform: "uppercase",
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  activeText: {
    color: "white",
  },
});
