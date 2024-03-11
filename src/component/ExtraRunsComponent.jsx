import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../theme/style";

const ExtraRunsComponent = () => {
  const extraType = ["Wide Ball", "No Ball"];
  const dataOfWideBall = 10;
  const dataOfNoBall = 5;
  return (
    <View>
        <View style={styles.displayTeamName}>
            <Text style={{color:theme.colors.primary ,marginRight:"5%"}}>Team1</Text>
            <Text style={{color:"white"}}>Team2</Text>
        </View>

    <View style={styles.extraRunComponenr}>
      <View style={styles.table}>
        <View style={[styles.row, { borderBottomColor: theme.colors.grayColor, borderBottomWidth: 1 }]}>
          <View>
            <Text style={{ color: "white" }}>Extras runs type</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>No of Extras</Text>
          </View>
        </View>
        {extraType.map((item, index) => {
          return (
            <View key={index} style={styles.row}>
              <View>
                <Text style={{ color: "white" }}>{item}</Text>
              </View>
              <View>
                <Text style={{ color: "white" }}>{index === 0 ? dataOfWideBall : dataOfNoBall}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
    </View>
  );
};

export default ExtraRunsComponent;

const styles = StyleSheet.create({
    displayTeamName:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:"10%",
    },
    extraRunComponenr: {
      marginTop:"5%",
    borderRadius: 15,
    marginHorizontal:20,
    marginVertical:10,
    backgroundColor: theme.colors.secondaryBackground,
  },
  table: {
    paddingHorizontal:15,
    borderWidth: 1,
    borderColor: theme.colors.grayColor,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
