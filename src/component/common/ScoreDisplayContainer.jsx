import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme/style";

const ScoreDisplayContainer = () => {
  let runsData = ["6", "2", "0", "1", "2", "4"];
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        {/* Absolutely positioned container */}
        {/* <View style={styles.absoluteContainer}>
          <Text style={styles.absoluteText}>{1} over</Text>
        </View> */}
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
    backgroundColor:theme.colors.secondaryBackground,
    borderTopWidth: 0,
    padding: 10,
    borderRadius: 30,
    width: "90%",
    flexDirection:"row",
    // justifyContent:"space-between",
    marginLeft:10,
    position: "relative",
  },
  // absoluteContainer: {
  //   backgroundColor: theme.colors.primary,
  //   position: "absolute",
  //   top: "-10%",
  //   left: -2,
  //   right: -2,
  //   borderRadius: 40,
  //   padding: 10,
  // },
  // absoluteText: {
  //   textAlign: "center",
  //   fontSize: 16,
  //   color: theme.colors.fontColor,
  //   fontWeight: "800",
  // },
  textContent: {
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.fontColor,
  },
  runBox: {
    height: 45,
    width: 45,
    alignItems: "center",
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: 30,
    paddingTop: 6,
    marginRight:15,
  },
  runText: {
    fontSize: 20,
    fontWeight: "900",
    color: theme.colors.fontColor,
  },
});

export default ScoreDisplayContainer;
