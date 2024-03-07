import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";

const Tab = ({ setCurrentTab }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleActive = (val) => {
    setActiveTab(val);
    setCurrentTab(val);
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={activeTab === 1 ? styles.activeTabContent : styles.tabContent}
        onPress={() => handleActive(1)}
      >
        <Text style={activeTab === 1 ? styles.activeText : styles.text}>
          Prev Match
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 2 ? styles.activeTabContent : styles.tabContent}
        onPress={() => handleActive(2)}
      >
        <Text style={activeTab === 2 ? styles.activeText : styles.text}>
          Create Match
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 3 ? styles.activeTabContent : styles.tabContent}
        onPress={() => handleActive(3)}
      >
        <Text style={activeTab === 3 ? styles.activeText : styles.text}>
          Completed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.colors.secondaryBackground,
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    borderRadius: 30,
  },
  tabContent: {
    color: theme.colors.fontColor,
    fontSize: 15,
  },
  activeTabContent: {
    backgroundColor: theme.colors.fontColor,
    borderRadius: 30,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: theme.colors.fontColor,
    fontWeight: "500",
  },
  activeText: {
    color: "black",
    fontWeight: "500",
  },
});

export default Tab;
