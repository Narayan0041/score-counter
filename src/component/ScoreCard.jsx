import { StyleSheet, Text, View, Image, Animated, Easing, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const ScoreCard = () => {
   let navigattion= useNavigation();
  const [opacityValue] = useState(new Animated.Value(1));

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacityValue, {
        toValue: opacityValue._value === 1 ? 0.2 : 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 1000);

    return () => clearInterval(interval);
  }, [opacityValue]);

  const handleNavigate =()=>{
    navigattion.navigate("ScoreCountPage")
  }
  return (
    <View>
      <View style={styles.scoreContainer}>
        <View style={styles.liveContainer}>
          <Animated.View
            style={[styles.liveColor, { opacity: opacityValue }]}
          />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.scoreSection}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.paticularTeam}>
              <Image
                source={require("../assets/india_flag.jpg")}
                style={styles.flag}
              />
              <Text style={styles.text}>India</Text>
              <Text style={styles.textScore}>
                {60}-{4} /{" "}
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 15,
                    color: theme.colors.grayColor,
                  }}
                >{`(4)`}</Text>
              </Text>
              <Text style={styles.textPrimary}>CRR . {3.44}</Text>
            </View>

            {/* ------------------------------Bat Icon---------------------------- */}
          </View>
          <View>
            <Text style={styles.vsText}>Vs</Text>
          </View>
          <View style={styles.paticularTeam}>
            <Image
              source={require("../assets/sri_Lanka_flag.png")}
              style={styles.flag}
            />
            <Text style={styles.text}>Sri Lanka</Text>
            <Text style={styles.textScore}>
              {60}-{4} /{" "}
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 15,
                  color: theme.colors.grayColor,
                }}
              >{`(4)`}</Text>
            </Text>
            <Text style={styles.textPrimary}>CRR . {3.44}</Text>
          </View>
        </View>
      </View>
        <TouchableHighlight onPress={()=>handleNavigate()}>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.text}>See india vs srilanka match</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={{color:theme.colors.fontColor , marginRight:5}}>Go live</Text><Icon name="arrow-forward-outline" size={15} color="white" />
        </View>
      </View>
        </TouchableHighlight>
    </View>
  );
};

export default ScoreCard;

const styles = StyleSheet.create({
  scoreContainer: {
    // margin: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: theme.colors.secondaryBackground,
    // marginBottom:5,
    marginTop:20,
  },
  bottomContainer: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor: theme.colors.secondaryBackground,
    paddingTop:2,
    padding:8,
    marginTop:5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  liveContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "5%",
    padding: 10,
  },
  liveColor: {
    backgroundColor: "red",
    height: 8,
    width: 8,
    borderRadius: 8,
  },
  liveText: {
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 10,
    color: theme.colors.fontColor,
  },
  vsText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "600",
  },
  scoreSection: {
    // marginTop: 25,
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%",
  },
  paticularTeam: {
    alignItems: "center",
  },
  textScore: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.colors.fontColor,
    marginTop: 6,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 11,
    paddingHorizontal: 10,
  },
  textPrimary: {
    marginTop: 5,
    fontSize: 12,
    color: theme.colors.primary,
  },
  flag: {
    width: 25,
    height: 17,
  },
  iconContainer: {
    backgroundColor: "transparent",
  },
  navBarHeaderText: {
    color: theme.colors.fontColor,
    fontSize: 25,
    marginLeft: "10%",
    fontWeight: "bold",
  },
  flexspainText: {
    color: theme.colors.primary,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
