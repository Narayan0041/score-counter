import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import theme from "../../theme/style";
import ScoreDisplayContainer from "./ScoreDisplayContainer";

const { height, width } = Dimensions.get("window");

export default function Slider() {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
      <View style={styles.container}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.round(x / (width - 40))); // Round to the nearest index
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemContainer}>
               <ScoreDisplayContainer/>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      <View style={styles.dotsContainer}>
        <View style={styles.dotRow}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    width: currentIndex === index ? 35 : 8,
                    height: currentIndex === index ? 10 : 8,
                    borderRadius: currentIndex === index ? 5 : 4,
                    backgroundColor:
                      currentIndex === index ? theme.colors.primary : "gray",
                  },
                ]}
              ></View>
            );
          })}
        </View>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%"
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
    marginTop:"5%",
    marginLeft: 5,
  },
});
