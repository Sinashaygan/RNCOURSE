import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="add your goal" />
        <Button title="add goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text>list of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:20,
  },

  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth:1,
    borderColor:"#cccccc"
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding:8,
    marginRight:8
  },

  goalsContainer:{
    flex:5
  }
});
