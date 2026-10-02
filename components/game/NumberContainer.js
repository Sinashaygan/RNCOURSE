import { Dimensions, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: COLORS.accent500,
    fontSize: deviceWidth < 380 ? 18 : 36,
    fontWeight: "bold",
  },
});
