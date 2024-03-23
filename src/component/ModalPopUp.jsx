import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  modalBox,
  totalRun,
  secondInnTotalRun,
  noOfByes,
  secondInnNoOfByes,
  noBallContainer,
  wideBallContainer,
  legByContainer,
  secondInningNoBallContainer,
  secondInningWideBallContainer,
  secondInningLegByContainer,
} from "../Store/Action";

const ModalPopUp = ({
  data,
  secondInningdata,
  setRuns,
  setSecondInnRuns,
  setWides,
  setSecondInnWides,
  setLegBy,
  setSecondInnLegBy,
  setBalls,
  setSecondInnBalls,
}) => {
  let dispatch = useDispatch();
  const storeData = useSelector((state) => state.Reducers);

  const [closeModal, setCloseModal] = useState(undefined);
  const handleRun = (value) => {
// No ball in first inning
    if (storeData.noBallContainer && data && !storeData.secondInning) {
      setRuns(data + value + 1);
      dispatch(totalRun(data + value + 1));
      dispatch(noOfByes(storeData.noOfBye + value));
      dispatch(noBallContainer(false));
      dispatch(modalBox(false));
      setCloseModal(false);
    }
    //no ball in second Inning
  // No ball in second inning
if (storeData.secondInningNoBallContainer && storeData.secondInning) {
  setSecondInnRuns(secondInningdata + value + 1);
  dispatch(secondInnTotalRun(secondInningdata + value + 1));
  dispatch(secondInnNoOfByes(storeData.secondInnNoOfBye + value));
  dispatch(secondInningNoBallContainer(false));
  setCloseModal(false); // Close modal box after dispatching actions
  dispatch(modalBox(false)); // Dispatch action to close the modal box
}
    // wide ball in first inning
    if (storeData.wideBallContainer && !storeData.secondInning) {
      setRuns(data + value + 1);
      dispatch(noOfByes(storeData.noOfBye + value));
      dispatch(modalBox(false));
      dispatch(wideBallContainer(false));
      setCloseModal(false);
    }
    // wide ball in second inning
    if (
      storeData.secondInningWideBallContainer &&
      setSecondInnWides &&
      storeData.secondInning
    ) {
      setSecondInnRuns(secondInningdata + value + 1)
      dispatch(secondInnTotalRun(secondInningdata + value + 1));
      dispatch(secondInnNoOfByes(storeData.secondInnNoOfBye + value));
      dispatch(secondInningWideBallContainer(false));
      dispatch(modalBox(false));
      setCloseModal(false);
    }
    //leg ball in first inning
    if (storeData.legByContainer && setLegBy && !storeData.secondInning) {
      setRuns(data + value + 1);
      setBalls((prev) => prev + 1);
      dispatch(noOfByes(storeData.noOfBye + value));
      // setLegBy(false);
      dispatch(legByContainer(false));
      dispatch(modalBox(false));
      setCloseModal(false);
    }
    // leg ball in second inning
    if (
      storeData.secondInningLegByContainer &&
      setSecondInnLegBy &&
      storeData.secondInning
    ) {
      setSecondInnRuns(secondInningdata + value + 1);
      setSecondInnBalls((prev) => prev + 1);
      // setLegBy(false);
      dispatch(secondInnNoOfByes(storeData.secondInnNoOfBye + value));
      dispatch(secondInningLegByContainer(false));
      dispatch(modalBox(false));
      setCloseModal(false);
    }
  };

  const onClose = () => {
    dispatch(modalBox(false));
    setCloseModal(false);
  };
  return (
    <Modal transparent={true} visible={closeModal} animationType="slide">
      <View style={styles.ModalPopUpContainer}>
        <View style={styles.modalBox}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ color: "white" , fontSize:16 , fontWeight:"600"}}>
              Select the Extra Runs
  {/* {storeData.wideBallContainer
    ? "Select the wide + bye run "
    : storeData.secondInningWideBallContainer
    ? "Select the wide + bye run "
    : storeData.secondInningNoBallContainer || storeData.noBallContainer
    ? "Select No ball + bye run"
    : "Select Leg bye run"} */}
</Text>

            <TouchableOpacity
              onPress={onClose}
              style={styles.closeIconContainer}
            >
              <Icon name="times" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
          <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(0)}
            >
              <Text style={styles.runText}>+0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(1)}
            >
              <Text style={styles.runText}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(2)}
            >
              <Text style={styles.runText}>+2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(3)}
            >
              <Text style={styles.runText}>+3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.runBox ,{backgroundColor:theme.colors.primary}]}
              onPress={() => handleRun(4)}
            >
              <Text style={styles.runText}>+4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(5)}
            >
              <Text style={styles.runText}>+5</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[styles.runBox , {backgroundColor:"rgb(217 0 141)"}]}
              onPress={() => handleRun(6)}
            >
              <Text style={[styles.runText]}>+6</Text>
            </TouchableOpacity> */}
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  ModalPopUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalBox: {
    margin: 15,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
  },
  runBox: {
    height: 55,
    width: 55,
    marginLeft: "7%",
    alignItems: "center",
    textAlign:"center",
    backgroundColor:"gray",
    borderRadius: 30,
    paddingTop: 7,
    // borderColor: "green",
    // borderWidth: 1,
    marginTop: 20,

  },
  runText: {
    fontSize: 26,
    fontWeight: "900",
    color: theme.colors.fontColor,
  },
});
