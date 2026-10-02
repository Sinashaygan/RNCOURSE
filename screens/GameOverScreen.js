import { View } from "react-native";
import { Text } from "react-native";
import Title from "../components/ui/Title";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.screenRootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/succes.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
