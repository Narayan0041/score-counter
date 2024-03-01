import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import theme from "../theme/style";
import Tab from "./Tab";
import PreMatch from "./DifferentTabsSection/PreMatch";
import CreateMatch from "./DifferentTabsSection/CreateMatch";
import FutureMatch from "./DifferentTabsSection/FutureMatch";

const Home = () => {
    const [currentTab , setCurrentTab] =useState(1);
  return (
    <View style={styles.container}>
      {/* Set StatusBar background color */}
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Navbar />
        <Tab setCurrentTab={setCurrentTab}/>
        {/* Different Tabs Layout */}
        {currentTab === 1 && <PreMatch />}
        {currentTab === 2 && <CreateMatch />}
        {currentTab === 3 && <FutureMatch />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    marginTop: 5,
    marginLeft: 25, 
    marginRight:25// Make content fill available space
  },
});

export default Home;
