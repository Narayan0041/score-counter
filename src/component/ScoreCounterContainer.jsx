import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ScoreCard = () => {
  const [overData, setOverData] = useState([]);
  const [currentOver, setCurrentOver] = useState(1);

  // Function to handle manual scoring
  const handleManualScore = (runs) => {
    const updatedOverData = [...overData, runs];
    setOverData(updatedOverData);

    // If over is completed (6 balls), update container and reset over data
    if (updatedOverData.length === 6) {
      console.log(`Over ${currentOver} completed. Data: `, updatedOverData);
      setOverData([]);
      setCurrentOver(currentOver + 1);
    }
  };

  return (
    <View>
      <Text>Score Card</Text>
      <Text>Current Over: {currentOver}</Text>
      {/* Display current over's data */}
      <View>
        <Text >Current Over Data:</Text>
        {overData.map((runs, index) => (
          <Text key={index}>Ball {index + 1}: {runs} runs</Text>
        ))}
      </View>
      {/* Button to manually update score */}
      <View>
        <Button title="1 run" onPress={() => handleManualScore(1)} />
        <Button title="2 runs" onPress={() => handleManualScore(2)} />
        <Button title="3 runs" onPress={() => handleManualScore(3)} />
        <Button title="4 runs" onPress={() => handleManualScore(4)} />
        <Button title="6 runs" onPress={() => handleManualScore(6)} />
        <Button title="Wide" onPress={() => handleManualScore("Wide")} />
        <Button title="No Ball" onPress={() => handleManualScore("No Ball")} />
      </View>
    </View>
  );
};

export default ScoreCard;