import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TakeTossInput({ setActiveTab }) {
    const handlePrev = () => {
        setActiveTab(1); // Move to the previous tab
    };

    const handleNext = () => {
        setActiveTab(3); // Move to the next tab
    };

    return (
        <View>
            <Text style={{ color: "white" }}>Hello i am Toss</Text>
            <Button title='Prev' onPress={handlePrev} />
            <Button title='Next' onPress={handleNext} />
        </View>
    );
}
