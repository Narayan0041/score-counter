import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import theme from "../theme/style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { modalBox } from "../Store/Action";

const ModalPopUp = () => {
    let dispatch =useDispatch()
  const data = useSelector((state) => state.Reducers);
  console.warn(data)
  const [closeModal, setCloseModal] = useState(undefined);
  const handleRun = () => {};
  const onClose = () => {
    setCloseModal(false);
    dispatch(modalBox(false))
  };
  return (
    <Modal transparent={true} visible={closeModal} animationType="slide">
      <View style={styles.ModalPopUpContainer}>
        <View style={styles.modalBox}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ color: "white" }}>ModalPopUp</Text>
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
              onPress={() => handleRun(6)}
            >
              <Text style={styles.runText}>+6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(5)}
            >
              <Text style={styles.runText}>+5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(4)}
            >
              <Text style={styles.runText}>+4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(3)}
            >
              <Text style={styles.runText}>+3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(2)}
            >
              <Text style={styles.runText}>+2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(1)}
            >
              <Text style={styles.runText}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.runBox}
              onPress={() => handleRun(0)}
            >
              <Text style={styles.runText}>+0</Text>
            </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.8)", // semi-transparent black background
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  runBox: {
    height: 55,
    width: 55,
    marginLeft: "7%",
    alignItems: "center",
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: 30,
    paddingTop: 5,
    borderColor: "green",
    borderWidth: 1,
    marginTop: 20,
  },
  runText: {
    fontSize: 30,
    fontWeight: "900",
    color: theme.colors.fontColor,
  },
});
