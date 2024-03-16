import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import React, { useState } from "react";
import theme from "../../theme/style";
import ScoreDisplayContainer from "./ScoreDisplayContainer";
import { useSelector } from "react-redux";

const { height, width } = Dimensions.get("window");

export default function Slider() {
  const Data = useSelector((state) => state.Reducers);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if Data is undefined or runScoreBoard is undefined
  if (!Data || !Data.runScoreBoard) {
    return <Text>Loading...</Text>;
  }

  const runsData = Data.runScoreBoard;

  return (
    <View style={styles.container}>
      <FlatList
        data={runsData}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Math.round(x / (width - 40))); 
        }}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <ScoreDisplayContainer data={item} /> 
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.dotsContainer}>
        {/* <View style={styles.dotRow}>
          {runsData.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    width: currentIndex === index ? 35 : 6,
                    height: currentIndex === index ? 5 : 6,
                    borderRadius: currentIndex === index ? 5 : 4,
                    backgroundColor:
                      currentIndex === index ? theme.colors.primary : "gray",
                  },
                ]}
              ></View>
            );
          })}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  itemContainer: {
    width: width,
  },
  touchableOpacity: {
    width: "90%",
    height: "80%",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 10,
  },
  dotsContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  dotRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    marginTop: "5%",
    marginLeft: 5,
  },
});
