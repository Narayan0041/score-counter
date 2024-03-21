import { LineChart } from "react-native-gifted-charts";
import theme from "../theme/style";
import { StyleSheet, Text, View } from "react-native";

export const Trail2 = () => {
  const data = [
    { value: 15 },
    { value: 15.5 },
    { value: 15.8 },
    { value: 19.8 },
    { value: 17.8 },
    { value: 21.8 },
    { value: 10.8 },
    { value: 25.8 },
    { value: 30 },
    { value: 26 },
    { value: 10 },
    { value: 30 },

  ];
  const data2 = [
    { value: 10 },
    { value: 35 },
    { value: 26 },
    // { value: 45 },

  ];
  const xAxisLabelTexts = ["1", "2", "3", "4", "5"]; // Custom y-axis labels

  return (
    <View style={styles.LineChartContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.radio1}></View>
          <Text style={styles.team1}>Team 1</Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.radio2}></View>
          <Text style={styles.team2}>Team 2</Text>
        </View>
      </View>
      <LineChart
        data={data}
        data2={data2}
        backgroundColor={theme.colors.secondaryBackground}
        thickness={1}
        isAnimated={true}
        width={250}
        spacing={50}
        initialSpacing={0}
        color1={theme.colors.fontColor}
        color2={theme.colors.primary}
        hideDataPoints1
        hideDataPoints2
        noOfSections={5}
        stepHeight={25}
        dashGap={3}
        rulesColor="#444444"
        xAxisLabelTexts={xAxisLabelTexts}
        xAxisLabelTextStyle={{ color: theme.colors.fontColor }}
        xAxisTextStyle={{ color: theme.colors.fontColor }}
        yAxisTextStyle={{ color: theme.colors.fontColor }}
        yAxisColor={theme.colors.secondaryBackground}
        xAxisColor={theme.colors.fontColor}
      />
      <View style={styles.runsLabel}>
        <Text style={styles.team2}>Runs</Text>
      </View>
      <View style={styles.oversLabel}>
        <Text style={styles.team2}>OVERS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LineChartContainer: {
    marginTop: 20,
    paddingLeft: 25,
    backgroundColor: theme.colors.secondaryBackground,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  team1: {
    color: theme.colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  team2: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  radio1: {
    height: 8,
    width: 25,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginRight: 5,
  },
  radio2: {
    height: 8,
    width: 25,
    backgroundColor: "white",
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 5,
  },
  runsLabel: {
    position: "absolute",
    left: -5,
    top: "50%",
    transform: [{ rotate: "-90deg" }],
  },
  oversLabel: {
    alignItems: "center",
    marginTop: 5,
  },
});
