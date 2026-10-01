import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { COLORS } from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
