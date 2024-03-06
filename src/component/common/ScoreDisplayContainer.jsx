import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme/style";

const ScoreDisplayContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        {/* Absolutely positioned container */}
        <View style={styles.absoluteContainer}>
          <Text style={styles.absoluteText}>1 over</Text>
        </View>

        {/* Content within the parent container */}
        <Text style={styles.textContent}>Hello i am Shiv</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  outerContainer: {
    borderColor: "gray",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 0,
    padding: 50,
    borderRadius: 30,
    width: "85%",
    position: "relative",
  },
  absoluteContainer: {
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: "-10%",
    left: -2,
    right: -2,
    borderRadius: 40,
    padding: 10,
  },
  absoluteText: {
    textAlign: "center",
    fontSize: 16,
    color:theme.colors.fontColor,
    fontWeight:"800"
},
textContent: {
    justifyContent: "center",
    alignItems: "center",
    color:theme.colors.fontColor,
  },
});

export default ScoreDisplayContainer;
