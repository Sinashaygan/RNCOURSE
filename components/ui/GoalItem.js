import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable android_ripple={{color:'#dddddd'}} onPress={props.deleteGoalHandler.bind(this, props.id)} style={({pressed})=> pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem:{
    opacity:0.5
  }
});
