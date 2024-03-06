import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TakeHowManyOver(props) {
    const handlePrev = () => {
        props.setActiveTab(3); // Move to the previous tab
    };
    
    const handleNext = () => {
        props.navigation.navigate("ScoreCountPage");
    };

    return (
        <View>
            <Text style={{ color: "white" }}>How Many over</Text>
            <Button title='Prev' onPress={handlePrev} />
            <Button title="Let's Start" onPress={handleNext} />
        </View>
    );
}
