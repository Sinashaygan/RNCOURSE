import { View } from "react-native";
import { Text } from "react-native";
import Title from "../components/ui/Title";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.screenRootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/succes.jpg")}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
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
    width: 400,
    height: 400,
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

  summeryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },

  highlight: {
    fontFamily: "open-sans",
    color: COLORS.primary500,
  },
});
