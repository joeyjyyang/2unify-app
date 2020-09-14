import React from "react";
import { ImageBackground, StyleSheet, View, Button, Image } from "react-native";

const MainScreen = (props) => {
  const handleButtonPress = () => {
    console.log("Button pressed.");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Totoro.jpg")}
    >
      <Image source={require("../assets/icon.png")} />
      <Button
        title="Tune Button"
        style={styles.tuneButton}
        onPress={handleButtonPress}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tuneButton: {
    width: "50%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default MainScreen;
