import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme/style";
import TabLayout from "../Layouts/TabLayout";
import Icon from "react-native-vector-icons/Ionicons"; 


export default function TakeTeamsName({ setActiveTab }) {
  const hostInputRef = useRef();
  const [isHostFocused, setIsHostFocused] = useState(false);
  const [inactiveBtn, setInactiveBtn] = useState(true);
  const [errorMeassage , setErrorMessage] =useState(false)
  const [inputData, setInputData] = useState({
    HostName: "",
    VisitorName: "",
  });

  useEffect(() => {
    hostInputRef.current.focus();
  }, []);

  const handleHostFocus = () => {
    setIsHostFocused(true);
  };

  const handleHostBlur = () => {
    setIsHostFocused(false);
  };

  const handleChange = (text, inputFieldName) => {
    setInputData((prev) => ({
      ...prev,
      [inputFieldName]: text,
    }));
    if (
      inputFieldName === "HostName" &&
      text.trim() !== "" &&
      inputData.VisitorName.trim() !== ""
    ) {
      setInactiveBtn(false);
      setErrorMessage(false)
    } else if (
      inputFieldName === "VisitorName" &&
      text.trim() !== "" &&
      inputData.HostName.trim() !== ""
    ) {
      setInactiveBtn(false);
      setErrorMessage(false)
    } else {
      setInactiveBtn(true);
    }
  };

  const handleNext = () => {
    if (
      inputData.HostName.trim() !== "" &&
      inputData.VisitorName.trim() !== ""
    ) {
      setActiveTab(2);
    }else{
        setErrorMessage(true)
    }
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { textAlign: "center", fontSize: 18 }]}>
          Enter Teams Name
        </Text>
      </View>
      <View style={styles.teamNameContainer}>
        <TextInput
          placeholder="Host Team Name"
          ref={hostInputRef}
          style={[styles.inputSection, isHostFocused && styles.focusedInput]}
          placeholderTextColor="gray"
          onFocus={handleHostFocus}
          onBlur={handleHostBlur}
          onChangeText={(text) => handleChange(text, "HostName")}
        />
        <TextInput
          placeholder="Visitor Team Name"
          style={[styles.inputSection, { marginTop: 10 }]}
          placeholderTextColor="gray"
          onChangeText={(text) => handleChange(text, "VisitorName")}
        />
      </View>
      <View>{errorMeassage && <Text style={{color:"red" , marginLeft:"5%" , marginTop:"4%" , textAlign:"center"}}> Please enter both host and visitor team names to proceed.</Text>}</View>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            disabled={inactiveBtn}
            style={styles.buttonContainer}
          >
            <Text
              style={[styles.button, inactiveBtn && styles.buttonDisabled]}
              onPress={handleNext}
            >
              Next
              {/* <Icon name="arrow-down-sharp"  style={styles.icon}/> */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    textContainer: {
      marginTop: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: 15,
      color: theme.colors.fontColor,
    },
    teamNameContainer: {
      backgroundColor: theme.colors.secondaryBackground,
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 15,
    },
    inputSection: {
      color: theme.colors.fontColor,
      marginBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "gray",
    },
    focusedInput: {
    //   borderBottomColor: theme.colors.secondary,
    },
    buttonContainer: {
      marginTop: "10%",
    },
    button: {
      backgroundColor: "orange",
      color: "white",
      fontWeight: "600",
      fontSize: 18,
      borderRadius: 10,
      padding: 10,
      width: "40%",
      textAlign: "center",
      alignSelf: "flex-end",
    },
    buttonDisabled: {
      backgroundColor: "lightgray",
      color: "black",
    },
  });
