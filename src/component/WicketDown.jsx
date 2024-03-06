import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../theme/style";

const WicketDown = () => {
  const wicketDownData = [10, 15, 20, 50];

  return (
    <View style={styles.wicketDownContainer}>
      <Text style={[styles.title, { color: theme.colors.fontColor }]}>
        WicketDown
      </Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.header, { color: theme.colors.fontColor }]}>
            Sr No
          </Text>
          <Text style={[styles.header, { color: theme.colors.fontColor }]}>
            Wicket Fall
          </Text>
        </View>
        {wicketDownData.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
              {index + 1}
            </Text>
            <Text style={[styles.cell, { color: theme.colors.fontColor }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WicketDown;

const styles = StyleSheet.create({
  wicketDownContainer: {
    marginTop: "5%",
    marginLeft:10,
    marginRight:10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
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
