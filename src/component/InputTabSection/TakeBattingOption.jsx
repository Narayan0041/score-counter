import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TakeBattingOption({ setActiveTab }) {
    const handlePrev = () => {
        setActiveTab(2); // Move to the previous tab
    };

    const handleNext = () => {
        setActiveTab(4); // Move to the next tab
    };

    return (
        <View>
            <Text style={{ color: "white" }}>Hello i am batting</Text>
            <Button title='Prev' onPress={handlePrev} />
            <Button title="next" onPress={handleNext} />
        </View>
    );
}
