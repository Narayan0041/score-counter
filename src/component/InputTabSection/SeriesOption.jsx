import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
const SeriesOption = () => {
    const datas = useSelector(state=>state.Reducers);
  let data = [
    {
      teamName:datas.teamTossWin.length > 3 ?datas.teamTossWin.slice(0,3) : datas.teamTossWin,
      point: 1,
      winMatches: 1,
      lossMatches: 0,
      pointINMatches: 2,
    },
    {
      teamName: datas.teamTossLoss.length >3 ? datas.teamTossLoss.slice(0,3) : datas.teamTossLoss,
      point: 1,
      winMatches: 1,
      lossMatches: 0,
      pointINMatches: 2,
    },
    {
      teamName: "LSk",
      point: 1,
      winMatches: 1,
      lossMatches: 0,
      pointINMatches: 2,
    },
    {
      teamName: "Mi",
      point: 1,
      winMatches: 1,
      lossMatches: 0,
      pointINMatches: 2,
    },
  ];

  return (
    <ScrollView style={{marginBottom:"20%"}}>
      <View>
        <View style={styles.rowHeader}>
          <View style={styles.rowView}>
            <Text style={styles.row}>#POS</Text>
          </View>
          <View style={[styles.rowView, { flex: 2 }, {marginLeft:"8%"}]}>
            <Text style={styles.row}>TEAM</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.row}>P</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.row}>W</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.row}>L</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.row}>PTS</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.row}></Text>
          </View>
        </View>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={styles.rowBody} key={index}>
              <View style={styles.rowView}>
                <Text style={styles.row}>{index + 1}</Text>
              </View>
              <View style={[styles.rowView, { flex: 2 , marginLeft:"2%"}]}>
              <Text style={styles.row}>{item.teamName.toUpperCase()}</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.row}>{item.point}</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.row}>{item.winMatches}</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.row}>{item.lossMatches}</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.row}>{item.pointINMatches}</Text>
              </View>
              <View style={styles.rowView}>
              <TouchableOpacity
                style={[styles.extraOptionBox]}
                onPress={() => setShowScoreContainer(false)}
              >
                <Icon
                  name="chevron-down"
                  style={{
                    fontSize: 16,
                    paddingTop: "10%",
                    fontWeight: "800",
                    color: theme.colors.grayColor,
                  }}
                />
              </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View>
      <View style={styles.rowHeader}>
<Text style={styles.rowText}>Glossary</Text>
      </View>
     <View style={{marginTop:"2%"}}>
     <Text style={styles.HeaderText}>#POS <Text style={styles.subText}>- Position in table</Text></Text>
     <Text style={styles.HeaderText}>P <Text style={styles.subText}>- The number of matches played</Text></Text>
     <Text style={styles.HeaderText}>W <Text style={styles.subText}>- The number of matches Win</Text></Text>
     <Text style={styles.HeaderText}>L <Text style={styles.subText}>- The number of matches Loss</Text></Text>
     <Text style={styles.HeaderText}>PTS <Text style={styles.subText}>- Points</Text></Text>
     </View>
      </View>
    </ScrollView>
  );
};

export default SeriesOption;

const styles = StyleSheet.create({
  row: {
    color: "gray",
    fontSize: 14,
  },
  rowView: {
    flex: 1,
  },
  rowHeader: {
    marginTop: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "1.5%",
    backgroundColor: theme.colors.secondaryBackground,
  },
  rowBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingVertical: "2.5%",
    borderBottomColor:"#222831",
    borderWidth: 1,
    paddingRight:10,

  },
  rowText:{
    color:"gray",
    fontSize:16,
    fontWeight:"600"
  },
  HeaderText:{
    color:"white",
    fontSize:14,
    fontWeight:"600",
    paddingHorizontal:"4%",
    paddingVertical:"1%"
  },
  subText:{
    fontSize:13,
    fontWeight:"400",
    color:"lightgray"
  }
});
