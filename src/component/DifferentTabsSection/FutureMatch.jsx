
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScoreCard from "../ScoreCard";
import { TouchableOpacity } from "react-native";
import theme from "../../theme/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CompletedComponent() {
  const handleClear = () => {
   AsyncStorage.getAllKeys()
   .then(keys=>AsyncStorage.multiRemove(keys))
   .then(()=>console.warn("Remove All the Item Sucess Fully"))
  };

  return (
    <View>
      <ScoreCard />
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={handleClear}>
            Clear the Data
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

