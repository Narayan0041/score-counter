import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import theme from '../theme/style';

export const Trail2 = () => {
    const barData = [
        {value: 250, label: 'M'},
        {value: 500, label: 'T', frontColor: '#177AD5'},
        {value: 745, label: 'W', frontColor: '#177AD5'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F', frontColor: '#177AD5'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
    ];

    // Create animated values for animation
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000, // Adjust the duration as needed
            useNativeDriver: false, // Set to true if possible for better performance
        }).start();
    }, []);

    // Interpolate animated value to get the animated value
    const interpolatedAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    // Custom x-axis labels
    const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Custom y-axis labels
    const yAxisData = [0, 250, 500, 750, 1000];

    return (
        <View style={{backgroundColor:theme.colors.secondaryBackground , marginTop:15, padding:10, margin:20, borderRadius:10}}>
            <BarChart
                barWidth={16}
                noOfSections={5}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                xAxisData={xAxisData} // Provide custom x-axis labels
                yAxisData={yAxisData} // Provide custom y-axis labels
                yAxisThickness={1} // Set y-axis thickness
                xAxisThickness={1} // Set x-axis thickness
                rulesColor="#333333"
                height={150}
                isAnimated={true}
                animatedValue={interpolatedAnimation} // Pass the interpolated animation value
                labelColor="white" // Set label color to white

            />
        </View>
    );
};
