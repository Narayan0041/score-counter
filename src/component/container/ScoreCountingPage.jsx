import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import theme from '../../theme/style'
import Slider from '../common/Slider'
import Category from '../Category'
import Stats from '../Stats';
import RingChart from '../common/Chart/RingChart'
import WicketDown from '../WicketDown'
import ScoreCountSection from '../ScoreCountingPage/ScoreCountSection'
import ScoreAddSection from '../ScoreAddSection'
import ScoreCard from '../ScoreCard'


const ScoreCountingPage = (props) => {
  const [activeCategory , setActiveCategory] = useState(undefined);
  return (
    <View style={styles.scoreCountingPage}>
      <ScoreCountSection/>
    <Category setActiveCategory={setActiveCategory}/>
    {activeCategory === "Stats" && <Stats />}
    {activeCategory ==="Boundary" && <RingChart />}
    {activeCategory ==="Wicket Down" && <WicketDown />}
    {/* {activeCategory === "Score" && <ScoreCard/>} */}
    <Slider/>
    <ScoreAddSection/>
    </View>
  )
}

export default ScoreCountingPage

const styles = StyleSheet.create({
  scoreCountingPage:{
    flex:1,
    backgroundColor:theme.colors.background,
  }
})