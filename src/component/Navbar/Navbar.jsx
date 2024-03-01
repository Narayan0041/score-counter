import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme/style";
const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
       <Text style={styles.navBarHeaderText}>score<Text style={styles.flexspainText}>Cric</Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // navbarContainer: {
  // },
  navBarHeaderText:{
    color:theme.colors.fontColor,
    fontSize:30,
    fontWeight:"bold"

  },
  flexspainText: {
    color: theme.colors.primary,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
export default Navbar;
