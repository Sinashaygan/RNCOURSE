import { useState } from "react";
import { Image } from "react-native";
import { Modal } from "react-native";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalsInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/android-icon-monochrome.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderColor: "#cccccc",
    // backgroundColor:"#311b6b"
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    margin: 24,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "40%",
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
