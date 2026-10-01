import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native";

export default function App() {
  const [userNumber , setUserNumber] = useState()

  function pickNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={["#410422", "#ddb52f"]} style={styles.rootScreen}>
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
