import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

const MainTuneButton = (props) => {
  const handleTuneButtonPress = () => {
    console.log("Tune button pressed.");
  };

  return (
    <TouchableWithoutFeedback onPress={handleTuneButtonPress}>
      <Image
        style={styles.tuneButton}
        source={require("../../assets/tunify-guitar-pick-logo.png")}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tuneButton: {},
});

export default MainTuneButton;
