import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import theme from "../../theme/style";
  import { useDispatch, useSelector } from "react-redux";
import { noOfPlayer } from "../../Store/Action";
  
  const TakePlayersInput = ({ setActiveTab }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Reducers);
    const [noOfPlayers, setNoOfPlayers] = useState("");
    const [nextBtn, setNextBtn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
  
    const handleChange = (value) => {
      setNoOfPlayers(value);
      setErrorMessage(false); // Clear error message when input changes
    };
  
    const handlePrev = () => {
      setActiveTab(3);
    };
  
    const handleNext = () => {
      const playersCount = parseInt(noOfPlayers);
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
      <View style={styles.playerContainer}>
        <Text style={styles.title}>Enter number of players</Text>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Enter the number of players"
            onChangeText={handleChange}
            keyboardType="numeric"
            style={styles.textStyle}
            value={noOfPlayers}
            placeholderTextColor={theme.colors.grayColor}
          />
        </View>
  
        {errorMessage && (
          <Text style={styles.errorMessage}>
            Please enter a valid number of players
          </Text>
        )}
  
        <View style={styles.btnSection}>
          <TouchableOpacity onPress={handlePrev}>
            <Text style={styles.preButton}>Go back</Text>
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
  };
  
  export default TakePlayersInput;
  
  const styles = StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      fontStyle: "italic",
      color: "white",
      marginTop: 20,
    },
    playerContainer: {
      marginTop: "10%",
      paddingHorizontal: 30,
      paddingVertical: 30,
      borderRadius: 20,
      backgroundColor: theme.colors.secondaryBackground,
    },
    textContainer: {
      marginTop: 20,
      borderColor: theme.colors.grayColor,
      borderBottomWidth: 1,
      borderRadius: 10,
    },
    textStyle: {
      fontSize: 18,
      color: theme.colors.fontColor,
      paddingHorizontal: 10, 
      // Add padding to ensure input is fully visible
    },
    errorMessage: {
      color: "red",
      fontSize: 16,
      textAlign: "center",
      marginTop: 10, // Adjust margin for better spacing
    },
    btnSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "80%", // Adjust margin for better spacing
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
      color:"white",
      fontWeight: "600",
    },
    inActiveBtn: {
      backgroundColor: "lightgray",
    },
  });
  