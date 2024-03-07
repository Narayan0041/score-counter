import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../../theme/style";

export default function TakeBattingOption({ setActiveTab }) {
    const [activeTeam, setActiveTeam] = useState("");
    const [nextBtn, setNextBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handlePrev = () => {
    setActiveTab(2); // Move to the previous tab
  };

  const handleNext = () => {
    if(activeTeam !== ""){
        setActiveTab(4); 
    }else{
        setErrorMessage(true)
    }
  };
  const handleClick = (value) => {
    // setActiveTeam((prevActiveTeam) => {
    //     const newActiveTeam = prevActiveTeam === value ? "" : value;
    //     return newActiveTeam;
    // });
    setActiveTeam(prevTeam =>prevTeam== value ? "" :value);
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
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          marginTop: 20,
        }}
      >
        What you want to do <Text >{`Team 1`}</Text>
      </Text>
      <View style={styles.battingContainer}>
        <View>
        <View style={styles.secondOption}>
          <TouchableOpacity
            style={styles.radioBtnContainer}
            onPress={() => handleClick("1")}
          >
            <View style={styles.radioBtn}>
              {activeTeam == 1 ? <View style={styles.activeBtn}></View> : null}
            </View>
            <Text
              style={{ color: "white", marginLeft: 10, fontSize: 20 }}
            >Batting</Text>
              <Image
                source={require("../../assets/cricket_bat.png")}
                style={styles.tossImage}
              />
          </TouchableOpacity>
        </View>
        </View>
        <View>
          <View style={[styles.secondOption, { marginTop: "10%" }]}>
            <TouchableOpacity
              style={styles.radioBtnContainer}
              onPress={() => handleClick("2")}
            >
              <View style={styles.radioBtn}>
                {activeTeam == 2 ? (
                  <View style={styles.activeBtn}></View>
                ) : null}
              </View>
              <Text
                style={{ color: "white", marginLeft: 10, fontSize: 20 }}
              >Bowling</Text>
                <Image
                  source={require("../../assets/cricket_ball.png")}
                  style={styles.tossImage}
                />
            </TouchableOpacity>
          </View>
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
            Please select batting other wise bowling
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
  battingContainer: {
    marginTop:"10%",
    paddingHorizontal:30,
    paddingVertical:30,
    borderRadius:20,
    backgroundColor: theme.colors.secondaryBackground,
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
    marginTop: "100%",
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
    height: 24,
    width: 30,
    marginLeft: 20,
  },
});
