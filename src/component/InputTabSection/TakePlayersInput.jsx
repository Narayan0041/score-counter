import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme/style";
import { useDispatch, useSelector } from "react-redux";
import { noOfPlayer } from "../../Store/Action";
import Icon from "react-native-vector-icons/Ionicons";

const TakePlayersInput = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const [noOfPlayers, setNoOfPlayers] = useState("");
  const [nextBtn, setNextBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectNoOfPlayer, setSelectNoOfPlayer] = useState("");
  const overData = [
    "1 to 1 player",
    "2 player",
    "3 player",
    "4 player",
    "5 player",
    "6 player",
    "7 player",
    "8 player",
    "9 player",
    "10 player",
    "11 player",
    "12 player"
  ];

  const handleChange = (value) => {
    setNoOfPlayers(value);
    setErrorMessage(false); 
    setSelectNoOfPlayer(value)
  };

  const handlePrev = () => {
    setActiveTab(3);
  };
  const handleNext = () => {
    const playersCount = parseInt(noOfPlayers.toString().charAt(0));
    if (playersCount > 0) {
      dispatch(noOfPlayer(playersCount));
      setActiveTab(5);
    } else {
      setErrorMessage(true);
    }
  };
  
  useEffect(() => {
    if (noOfPlayers === "") {
      setNextBtn(false);
    } else {
      setNextBtn(true);
      setErrorMessage(false);
    }
  }, [noOfPlayers]);

  return (
    <>
    <View style={styles.playerContainer}>
      <Text style={styles.title}>Select number of players</Text>
      <View style={styles.optionsContainer}>
        {overData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionContainer,
              selectNoOfPlayer ===item && styles.activeBorder,
              index % 3 === 2 && { marginRight: 0 },
            ]}
            onPress={() => handleChange(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {errorMessage && (
        <Text style={styles.errorMessage}>
          Please select above one player option.
        </Text>
      )}
    </View>
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
    </>
  );
};

export default TakePlayersInput;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  playerContainer: {
    marginTop: "10%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
    // backgroundColor: theme.colors.secondaryBackground,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  optionContainer: {
    width: "30%",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  optionText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "35%",
  },
  preButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  nextButton: {
    backgroundColor: "orange",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    color: "white",
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
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  activeBorder:{
    borderWidth:1,
    borderColor:theme.colors.primary
  }
});
