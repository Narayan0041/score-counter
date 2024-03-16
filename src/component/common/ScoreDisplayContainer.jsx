import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme/style";

const ScoreDisplayContainer = (props) => {
  const runsData = props.data // Access the data prop correctly

  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        {runsData.map((item, index) => {
          return (
            <View key={index + 1} style={styles.runBox}>
              <Text style={styles.runText}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  outerContainer: {
    backgroundColor: theme.colors.secondaryBackground,
    borderTopWidth: 0,
    padding: 10,
    borderRadius: 30,
    width: "97%",
    flexDirection: "row",
    marginLeft: 8,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  runBox: {
    height: 45,
    width: 45,
    alignItems: "center",
    backgroundColor: "rgb(40, 40, 40)",
    borderRadius: 30,
    paddingTop: 6,
    marginRight: 10,
  },
  runText: {
    fontSize: 20,
    fontWeight: "900",
    color: theme.colors.fontColor,
  },
});

export default ScoreDisplayContainer;
