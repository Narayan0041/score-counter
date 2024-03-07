import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import theme from "../../theme/style";

export default function TakeTossInput({ setActiveTab }) {
  const [activeTeam, setActiveTeam] = useState("");
  const [nextBtn, setNextBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handlePrev = () => {
    setActiveTab(1); // Move to the previous tab
  };

  const handleNext = () => {
    if (nextBtn !== false) {
      setActiveTab(3); 
    }
    if(activeTeam === ""){
        setErrorMessage(true)   
    }
};

const handleClick = (value) => {
    setActiveTeam((prevActiveTeam) => {
        const newActiveTeam = prevActiveTeam === value ? "" : value;
        return newActiveTeam;
    });
    if (activeTeam === "") {
        setNextBtn(false);
    } else {
        setNextBtn(true);
        setErrorMessage(false)
    }
};

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
          // textDecorationLine: "underline",
        }}
      >
        Toss Time !!
      </Text>
      <View style={styles.tossContainer}>
        <View style={styles.secondOption}>
          <TouchableOpacity
            style={styles.radioBtnContainer}
            onPress={() => handleClick("1")}
          >
            <View style={styles.radioBtn}>
              {activeTeam == 1 ? <View style={styles.activeBtn}></View> : null}
            </View>
            <Text
              style={{ color: "white", marginLeft: 10, fontSize: 18 }}
            >{`Team 1`}</Text>
            {activeTeam == 1 && (
              <Image
                source={require("../../assets/rupee.png")}
                style={styles.tossImage}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={[styles.secondOption, { marginTop: "10%" }]}>
          <TouchableOpacity
            style={styles.radioBtnContainer}
            onPress={() => handleClick("2")}
          >
            <View style={styles.radioBtn}>
              {activeTeam == 2 ? <View style={styles.activeBtn}></View> : null}
            </View>
            <Text
              style={{ color: "white", marginLeft: 10, fontSize: 18 }}
            >{`Team 2`}</Text>
            {activeTeam == 2 && (
              <Image
                source={require("../../assets/rupee.png")}
                style={styles.tossImage}
              />
            )}
          </TouchableOpacity>
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
            Please select above given one team.
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
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tossContainer: {
    marginTop: 20,
    alignItems: "flex-start",
    backgroundColor: theme.colors.secondaryBackground,
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderRadius: 15,
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
  secondOption: {
    flexDirection: "row",
    // marginTop: 20,
  },
  btnSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "80%",
  },
  preButton: {
    backgroundColor: "rgba(0, 128, 128, 1)",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "orange",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  inActiveBtn: {
    backgroundColor: "lightgray",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  tossImage: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
});
