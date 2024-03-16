import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme/style";
import { useDispatch, useSelector } from "react-redux";
import { selectTheOver } from "../../Store/Action";

export default function TakeHowManyOver(props) {
  let dispatch =useDispatch()
  const [nextBtn, setNextBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectBtn, setSelectBtn] = useState("");
  let overData = [
    "1 over",
    "2 over",
    "3 over",
    "4 over",
    "5 over",
    "6 over",
    "10 over",
    "15 over",
    "20 over",
  ];

  const handlePrev = () => {
    props.setActiveTab(4); // Move to the previous tab
  };

  const handleNext = () => {
    if (nextBtn !== false) {
      dispatch(selectTheOver(selectBtn))
      props.navigation.navigate("ScoreCountPage");
    }
    if (selectBtn === "") {
      setErrorMessage(true);
    }
  };

  const handleClick = (value) => {
    setSelectBtn(value);
  };
  useEffect(() => {
    if (selectBtn === "") {
      setNextBtn(false);
    } else {
      setNextBtn(true);
      setErrorMessage(false);
    }
  }, [selectBtn]);

  return (
    <View>
      <Text
        style={{
          color: theme.colors.fontColor,
          fontSize: 24,
          textAlign: "center",
          marginTop: "10%",
          fontWeight: "bold",
          fontStyle: "italic",
          //   textDecorationLine: "underline",
        }}
      >
        Select how many over you can play !!
      </Text>
      <View style={{ marginTop: "10%" }}>
        <View style={styles.rowContainer}>
          {overData.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer,
                selectBtn === item && styles.activeBorder,
              ]}
              onPress={() => handleClick(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {overData.slice(3, 6).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer,
                selectBtn === item && styles.activeBorder,
              ]}
              onPress={() => handleClick(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {overData.slice(6, 9).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionContainer2,
                selectBtn === item && styles.activeBorder,
              ]}
              onPress={() => handleClick(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View>
        {errorMessage && (
          <Text
            style={{
              color: "red",
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Please select above one option.
          </Text>
        )}
      </View>
      <View style={styles.btnSection}>
        <View>
          <TouchableOpacity onPress={handlePrev}>
            <Text style={[styles.preButton, { color: theme.colors.fontColor }]}>
              Go back
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleNext}>
            <Text
              style={[
                nextBtn ? styles.nextButton : styles.inActiveBtn,
                { color: theme.colors.fontColor },
              ]}
            >
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  optionContainer: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  optionContainer2: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  optionText: {
    color: "white",
    fontSize: 18,
  },
  radioBtnContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  secondOption: {
    flexDirection: "row",
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "50%",
  },
  preButton: {
    backgroundColor:  theme.colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  inActiveBtn: {
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
});
