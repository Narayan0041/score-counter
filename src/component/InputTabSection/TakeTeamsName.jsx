import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme/style";
import { useDispatch, useSelector } from "react-redux";
import { TakeTeamName } from "../../Store/Action";

export default function TakeTeamsName({ setActiveTab }) {
  const dispatch =useDispatch()
  let teamNameData =useSelector(store=>store.Reducers.takeTeamName)
  const hostInputRef = useRef();
  const [isHostFocused, setIsHostFocused] = useState(false);
  const [inactiveBtn, setInactiveBtn] = useState(true);
  const [errorMeassage , setErrorMessage] =useState(false)
  const [inputData, setInputData] = useState({
    HostName: teamNameData.HostName, 
    VisitorName: teamNameData.VisitorName, 
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
    setInputData(prev => ({
      ...prev,
      [inputFieldName]: text,
    }));
  
    // Check if the value is a string before calling trim
    if (
      inputFieldName === "HostName" &&
      typeof text === "string" &&
      text.trim() !== "" &&
      typeof inputData.VisitorName === "string" &&
      inputData.VisitorName.trim() !== ""
    ) {
      setInactiveBtn(false);
      setErrorMessage(false);
    } else if (
      inputFieldName === "VisitorName" &&
      typeof text === "string" &&
      text.trim() !== "" &&
      typeof inputData.HostName === "string" &&
      inputData.HostName.trim() !== ""
    ) {
      setInactiveBtn(false);
      setErrorMessage(false);
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
     dispatch(TakeTeamName(inputData))
    }else{
        setErrorMessage(true)
    }
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { textAlign: "center", fontSize: 24 , fontWeight:"bold" ,fontStyle: "italic",}]}>
          Enter Teams Name !!
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
          value={inputData.HostName}
          onChangeText={(text) => handleChange(text, "HostName")}
        />
        <TextInput
          placeholder="Visitor Team Name"
          style={[styles.inputSection, { marginTop: 10 }]}
          placeholderTextColor="gray"
          value={inputData.VisitorName}
          onChangeText={(text) => handleChange(text, "VisitorName")}
        />
      </View>
      <View>{errorMeassage && <Text style={{color:"red" , marginLeft:"1%" , marginTop:"4%" , textAlign:"center" , fontSize:15}}> Please enter both host and visitor team names to proceed.</Text>}</View>
      <View style={{}}>
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
      paddingTop: 35,
      paddingBottom: 35,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 15,
    },
    inputSection: {
      color: theme.colors.fontColor,
      marginBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "gray",
      fontSize:18,
      marginBottom:20
    },
    focusedInput: {
    //   borderBottomColor: theme.colors.secondary,
    },
    buttonContainer: {
      marginTop: "20%",
      // alignItems:"flex-end"
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
