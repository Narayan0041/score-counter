import React from "react";
import { View } from "react-native";

export default function TabLayout(props) {
  console.log(props)
  return (
  <View>{props.children}</View>
  )
}
