import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native";
import { COLORS } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber , setUserNumber] = useState()
  const [gameOver , setGameOver] = useState(true)

  function pickNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  function gameOverHandle() {
    setGameOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandle={gameOverHandle} />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={[COLORS.primary700, COLORS.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/image/download.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
