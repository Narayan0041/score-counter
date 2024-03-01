import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import theme from '../../theme/style'
import TabLayout from '../Layouts/TabLayout';

const styles = StyleSheet.create({
    textContainer:{
        marginTop:20,
        marginBottom:20
    }
    ,
    text: {
        fontSize:15,
        color: theme.colors.fontColor
    },
    teamNameContainer: {
        backgroundColor: theme.colors.secondaryBackground,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15
    },
    inputSection: {
        color: theme.colors.fontColor,
        marginBottom: 10,
        borderBottomWidth: .5, // Add a bottom border for better visibility
        borderBottomColor: 'gray', // Set the default bottom border color
    },
    focusedInput: {
        borderBottomColor: theme.colors.secondary, // Set the border color when focused
    },
    buttonContainer:{
        marginTop:"10%",
    }
})

export default function TakeTeamsName({setActiveTab}) {
    const hostInputRef = useRef();
    const [isHostFocused, setIsHostFocused] = useState(false);
    const [inactiveBtn, setInactiveBtn] = useState(true);
    const [inputData, setInputData] = useState({
        HostName: "",
        VisitorName: "",
    })

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
        }))
    }
    
    const handleNext = () => {
        const isInputEmpty = inputData.HostName.trim() === "" || inputData.VisitorName.trim() === "";
        setInactiveBtn(!isInputEmpty);
        setActiveTab(2)
    }

    return (
        <View>
        
            <View style={styles.textContainer}>
                <Text style={styles.text}>Teams</Text>
            </View>
            <View style={styles.teamNameContainer}>
                <TextInput 
                    placeholder='Host Team Name' 
                    ref={hostInputRef} 
                    style={[styles.inputSection, isHostFocused && styles.focusedInput]} 
                    placeholderTextColor='gray' 
                    onFocus={handleHostFocus}
                    onBlur={handleHostBlur}
                    onChangeText={(text)=>handleChange(text, "HostName")}
                />
                <TextInput 
                    placeholder='Visitor Team Name' 
                    style={[styles.inputSection, { marginTop: 10 }]}  
                    placeholderTextColor='gray' 
                    onChangeText={(text)=>handleChange(text, "VisitorName")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <Button title='Next' color={inactiveBtn ? 'lightgray' : 'orange'} onPress={handleNext} />
                </View>
            </View>
        </View>
    )

}
