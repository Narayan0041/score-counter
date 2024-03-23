import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../../theme/style";
import { useDispatch, useSelector } from "react-redux";
import { whatYouChoose } from "../../Store/Action";
import Icon from "react-native-vector-icons/Ionicons";

export default function TakeBattingOption({ setActiveTab }) {
  let dispatch = useDispatch();
  let teamTossWin = useSelector((store) => store.Reducers.teamTossWin);

  const [activeTeam, setActiveTeam] = useState("");
  const [nextBtn, setNextBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handlePrev = () => {
    setActiveTab(2);
  };

  const handleNext = () => {
    if (activeTeam !== "") {
      dispatch(whatYouChoose(activeTeam));
      setActiveTab(4);
    } else {
      setErrorMessage(true);
    }
  };

  const handleClick = (value) => {
    setActiveTeam((prevTeam) => (prevTeam === value ? "" : value));
  };

  useEffect(() => {
    if (activeTeam === "") {
      setNextBtn(false);
    } else {
      setNextBtn(true);
      setErrorMessage(false);
    }
  }, [activeTeam]);

  return (
    <View>
      <Text style={styles.title}>
        What you want to do <Text>{teamTossWin}</Text>
      </Text>
      <View style={styles.battingContainer}>
        <View style={styles.option}>
          <TouchableOpacity
            style={styles.radioBtnContainer}
            onPress={() => handleClick("batting")}
          >
            <View style={styles.radioBtn}>
              {activeTeam === "batting" && (
                <View style={styles.activeBtn}></View>
              )}
            </View>
            <Text style={styles.optionText}>Batting</Text>
            <Image
              source={require("../../assets/cricket_bat.png")}
              style={styles.tossImage}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.option, { marginTop: 24 }]}>
          <TouchableOpacity
            style={styles.radioBtnContainer}
            onPress={() => handleClick("bowling")}
          >
            <View style={styles.radioBtn}>
              {activeTeam === "bowling" && (
                <View style={styles.activeBtn}></View>
              )}
            </View>
            <Text style={styles.optionText}>Bowling</Text>
            <Image
              source={require("../../assets/cricket_ball.png")}
              style={styles.tossImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {errorMessage && (
        <Text style={styles.errorMessage}>
          Please select batting otherwise bowling
        </Text>
      )}

      <View style={styles.btnSection}>
        <TouchableOpacity onPress={handlePrev} style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="chevron-back" size={22} color="white" />
            <Text style={styles.buttonText}>Go back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text
            style={[styles.nextButton, nextBtn ? null : styles.inActiveBtn]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    marginTop: 20,
  },
  battingContainer: {
    marginTop: "10%",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: theme.colors.secondaryBackground,
  },
  option: {
    flexDirection: "row",
  },
  radioBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtn: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: theme.colors.fontColor,
    borderRadius: 20,
  },
  activeBtn: {
    width: 15,
    height: 15,
    margin: 3,
    backgroundColor: theme.colors.fontColor,
    borderRadius: 8,
  },
  optionText: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
  },
  tossImage: {
    height: 24,
    width: 30,
    marginLeft: 20,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "100%",
  },
  preButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  nextButton: {
    backgroundColor: "orange",
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  inActiveBtn: {
    backgroundColor: "lightgray",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft:10,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  }
});
