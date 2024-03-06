import React, { useState } from "react";
import { View, Text } from "react-native";
import TabLayout from "../Layouts/TabLayout";
import TakeTeamsName from "../InputTabSection/TakeTeamsName";
import TakeTossInput from "../InputTabSection/TakeTossInput";
import TakeBattingOption from "../InputTabSection/TakeBattingOption";
import TakeHowManyOver from "../InputTabSection/TakeHowManyOver";
export default function CreateMatch({navigation}) {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View>
      <TabLayout>
        {/* Rendering different input sections based on the active tab */}
        {activeTab === 1 && <TakeTeamsName setActiveTab={handleTabChange} />}
        {activeTab === 2 && <TakeTossInput setActiveTab={handleTabChange} />}
        {activeTab === 3 && <TakeBattingOption setActiveTab={handleTabChange} />}
        {activeTab === 4 && <TakeHowManyOver setActiveTab={handleTabChange} navigation={navigation}/>}
      </TabLayout>
    </View>
  );
}
