import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import { useSelector } from "react-redux";

const ExtraRunsComponent = () => {
  let data = useSelector((store) => store.Reducers);
  // console.warn(data);
  const [currentBattingTeam, setCurrentBattingTeam] = useState(
    data.teamTossWin && data.whatYouChoose == "batting"
      ? data.teamTossWin
      : data.teamTossLoss
  );
  const [secondTeamBatting, setSecondTeamBatting] = useState(
    data.teamTossWin && data.whatYouChoose == "batting"
      ? data.teamTossLoss
      : data.teamTossWin
  );

  const [activeTeam, setActiveTeam] = useState(currentBattingTeam);

  const extraType = ["Wide Ball", "No Ball", "Bye"];
  let dataOfWideBall, dataOfNoBall, dataOfBye;

  if (activeTeam === currentBattingTeam) {
    dataOfWideBall = data.noOfWideBall;
    dataOfNoBall = data.noOfNoBall;
    dataOfBye = data.noOfBye;
  } else {
    dataOfWideBall = data.secondInnNoOfWideBall;
    dataOfNoBall = data.secondInnNoOfNoBall;
    dataOfBye = data.secondInnNoOfBye;
  }

  const handleClick = (value) => {
    setActiveTeam(value);
  };

  return (
    <View>
      <View style={styles.displayTeamName}>
        {/* --------------------------------------team 1 batting----------------------------- */}
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
            }}
          >
            {currentBattingTeam}
          </Text>
        </TouchableOpacity>

        {/* --------------------------------------team 2 batting----------------------------- */}
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
          <Text style={{ color: "white", marginLeft: 8, fontWeight: "600" }}>
            {secondTeamBatting}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.extraRunComponenr}>
        <View style={styles.table}>
          <View
            style={[
              styles.row,
              {
                borderBottomColor: theme.colors.grayColor,
                borderBottomWidth: 1,
              },
            ]}
          >
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
                  <Text style={{ color: "white" }}>
                    {item === "Wide Ball"
                      ? dataOfWideBall
                      : item === "No Ball"
                      ? dataOfNoBall
                      : dataOfBye}
                  </Text>
                </View>
              </View>
            );
          })}
          <View
            style={[
              styles.row,
              {
                borderTopColor: theme.colors.grayColor,
                borderTopWidth: 1,
              },
            ]}
          >
            <Text style={{ color: "white" }}>Total Extras</Text>
            <Text style={{ color: "white" }}>{dataOfWideBall+dataOfNoBall+ dataOfBye} runs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExtraRunsComponent;

const styles = StyleSheet.create({
  displayTeamName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
  },
  extraRunComponenr: {
    marginTop: "5%",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: theme.colors.secondaryBackground,
  },
  table: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayColor,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  activeTeam: {
    borderColor: "rgb(217 0 141)",
  },
});
