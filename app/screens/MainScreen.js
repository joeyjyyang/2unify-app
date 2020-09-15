import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

const MainScreen = (props) => {
  const handleTuneButtonPress = () => {
    console.log("Tune button pressed.");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/tunify-static-background.png")}
      >
        <Text style={styles.status}>PUSH 2 TUNE.</Text>
        <TouchableWithoutFeedback onPress={handleTuneButtonPress}>
          <Image
            style={styles.tuneButton}
            source={require("../assets/tunify-guitar-pick-logo.png")}
          />
        </TouchableWithoutFeedback>
        <View style={styles.bottomWidgets}>
          <Text style={styles.stopTune}>Stop Tune</Text>
          <Text style={styles.powerOff}>Power Off</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tuneButton: {},
  bottomWidgets: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  status: {},
  stopTune: {},
  powerOff: {},
});

export default MainScreen;
