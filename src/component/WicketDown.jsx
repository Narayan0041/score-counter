import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../theme/style";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

const WicketDown = () => {
  let data = useSelector((state) => state.Reducers);
  const [currentBattingTeam, setCurrentBattingTeam] = useState("");
  const [secondTeamBatting, setSecondTeamBatting] = useState("");
  const [activeTeam, setActiveTeam] = useState(undefined);
  const wicketDownData =
    activeTeam == currentBattingTeam
      ? data.wicketFallWithRun
      : data.secondInningWicketFallWithRun;

  useEffect(() => {
    if (data) {
      setCurrentBattingTeam(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossWin
          : data.teamTossLoss
      );
      setActiveTeam(currentBattingTeam);
      setSecondTeamBatting(
        data.teamTossWin && data.whatYouChoose === "batting"
          ? data.teamTossLoss
          : data.teamTossWin
      );
    }
  }, [data, currentBattingTeam]);
  const handleClick = (value) => {
    setActiveTeam(value);
  };
  return (
    <ScrollView style={styles.ScrollViewContainer}>
      <View style={styles.displayTeamName}>
        <TouchableOpacity
          onPress={() => handleClick(currentBattingTeam)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor:
                activeTeam === currentBattingTeam
                  ? theme.colors.primary
                  : theme.colors.fontColor,
              height: 8,
              width: 8,
              borderRadius: 4,
            }}
          ></View>
          <Text
            style={{
              color: "white",
              marginRight: "5%",
              marginLeft: 8,
              fontWeight: "600",
              fontSize:16,
              textTransform:"uppercase"
            }}
          >
            {currentBattingTeam}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleClick(secondTeamBatting)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor:
                activeTeam === secondTeamBatting
                  ? theme.colors.primary
                  : "white",
              height: 8,
              width: 8,
              borderRadius: 4,
            }}
          ></View>
          <Text style={{ color: "white", marginLeft: 8, fontWeight: "600" , fontSize:16,
              textTransform:"uppercase"}}>
            {secondTeamBatting}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wicketDownContainer}>
        <Text style={[styles.title, { color: theme.colors.fontColor }]}>
          FALL OF WICKET 
        </Text>
        <View style={styles.table}>
  <View style={[styles.headerRow]}>
    <Text style={[styles.header, { color: theme.colors.fontColor }]}>
      Sr No
    </Text>
    <Text style={[styles.header, { color: theme.colors.fontColor }]}>
      Wicket Fall
    </Text>
  </View>
  {activeTeam === currentBattingTeam ? (
    wicketDownData.map((item, index) => (
      <View style={styles.row} key={index}>
        <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
          {index + 1}
        </Text>
        <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
          {item.runs}-{item.wicket} ({item.balls})
        </Text>
      </View>
    ))
  )  : (
    wicketDownData.map((item, index) => (
      <View style={styles.row} key={index}>
        <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
          {index + 1}
        </Text>
        <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
          {item.secondInnRuns}-{item.secondInnWicket} (
          {item.secondInnBalls})
        </Text>
      </View>
    ))
  )}
</View>
      </View>
    </ScrollView>
  );
};

export default WicketDown;

const styles = StyleSheet.create({
  wicketDownContainer: {
    marginTop: "5%",
    marginLeft: 10,
    marginRight: 10,
  },
  ScrollViewContainer:{
    marginBottom:"25%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  displayTeamName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
  },
  table: {
    // borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: theme.colors.secondaryBackground,
  },
  header: {
    flex: 1,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
});
