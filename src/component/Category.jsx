import { StyleSheet, Text, View , FlatList, TouchableOpacity, Alert, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons"; 

const Category = ({setActiveCategory}) => {
    const [activeClass , setActiveClass] = useState("Home");
    const categoryData = [
        { name: "Home", icon: "home" }, 
        { name: "Stats", icon: "stats-chart" }, 
        { name: "Boundary", icon: "tennisball" }, // Add the "Boundary" icon here
        { name: "Wicket Down", icon: "tennisball" }, // Add the "Boundary" icon here
        // { name: "Score", icon: "trophy" }, 
        // { name: "Watch Party ", icon: "eye" }, 
        // { name: "Point Table", icon: "list" }
    ];

    const handleClick = (item) => {
        setActiveClass(item);
        setActiveCategory(item)
    };

    return (
        <View>
            <FlatList 
                data={categoryData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View style={{marginLeft:10}}>
                            <TouchableHighlight
                                style={[styles.listItem, activeClass === item.name && styles.activeBar]} 
                                onPress={() => handleClick(item.name)}
                            >
                                <>
                                    <Icon name={item.icon} size={15} color="white"  style={styles.icons}/>
                                    <Text style={styles.text}>{item.name}</Text>
                                </>
                            </TouchableHighlight>
                        </View>
                    );
                }}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginRight:15,
        paddingBottom:6,
        flexDirection: "row", 
        alignItems: "center" 
    },
    text:{
        fontSize:15,
        color:"white"
    },
    icons:{
        marginRight:5
    },
    activeBar:{
        borderBottomWidth:2,
        borderBottomColor:theme.colors.primary
    }
});
