import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
} from "react-native";

class StopTuneButton extends Component {
  handleStopTuneButtonPress = () => {
    console.log("Stop Tune button pressed.");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handleStopTuneButtonPress}>
          <ImageBackground
            style={styles.bar}
            source={require("../../assets/bar.png")}
          >
            <View style={styles.text}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Roboto",
                  fontSize: 20,
                }}
              >
                Stop Tune
              </Text>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handleStopTuneButtonPress}>
          <Image
            style={styles.stop}
            source={require("../../assets/stop.png")}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
  },
  stop: {
    width: 60,
    height: 60,
  },
  bar: {
    position: "absolute",
    right: 55,
    width: 120,
    height: 30,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StopTuneButton;
