import React from 'react'
import { View ,Text,StyleSheet } from 'react-native'
import theme from '../../theme/style'

const styles =StyleSheet.create({
    text:{
        color:theme.colors.fontColor
    }
})
export default function PreMatch() {
  return (
    <View>
        <View>
        <Text style={styles.text}>Pre Match Teams</Text>
       </View>
    </View>
  )
}
