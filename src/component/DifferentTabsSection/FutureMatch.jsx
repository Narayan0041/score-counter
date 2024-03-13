
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScoreCard from "../ScoreCard";
import { TouchableOpacity } from "react-native";
import theme from "../../theme/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CompletedComponent() {
  const handleClear = async () => {
    try {
      await AsyncStorage.clear();
      console.warn("AsyncStorage successfully cleared");
    } catch (error) {
      console.error("Error clearing AsyncStorage: ", error.message);
    }
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

