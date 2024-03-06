import React from 'react'
import { View ,Text,StyleSheet } from 'react-native'
import theme from '../../theme/style'
import ScoreCard from '../ScoreCard'
import { ScrollView } from 'react-native'

const styles =StyleSheet.create({
    text:{
        color:theme.colors.fontColor
    }
})
export default function PreMatch() {
  return (
    <View style={{marginTop:10 , marginBottom:20}}>
        <ScrollView>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
       </ScrollView>
    </View>
  )
}
