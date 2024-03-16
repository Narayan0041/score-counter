import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../theme/style";
import Slider from "../common/Slider";
import Category from "../Category";
import Stats from "../Stats";
import RingChart from "../common/Chart/RingChart";
import WicketDown from "../WicketDown";
import ScoreCountSection from "../ScoreCountingPage/ScoreCountSection";
import ScoreAddSection from "../ScoreAddSection";
import ExtraRunsComponent from "../ExtraRunsComponent";
import { useSelector } from "react-redux";
import ModalPopUp from "../ModalPopUp";

const ScoreCountingPage = (props) => {
  const data = useSelector((state) => state.Reducers);
  const [activeCategory, setActiveCategory] = useState("Home");
  const [popUp, setPopUp] = useState(data.modalBox);
  return (
    <View style={styles.scoreCountingPage}>
      <ScoreCountSection />
      <Category setActiveCategory={setActiveCategory} />
      {activeCategory === "Home" && <ExtraRunsComponent />}
      {activeCategory === "Stats" && <Stats />}
      {activeCategory === "Boundary" && <RingChart />}
      {activeCategory === "Wicket Down" && <WicketDown />}
      {/* <Slider /> */}
      <ScoreAddSection />
    </View>
  );
};

export default ScoreCountingPage;

const styles = StyleSheet.create({
  scoreCountingPage: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
