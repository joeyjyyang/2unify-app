import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
} from "react-native";

class PowerOffButton extends Component {
  handlePowerOffButtonPress = () => {
    console.log("Power Off button pressed.");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePowerOffButtonPress}>
          <Image
            style={styles.power}
            source={require("../../assets/power.png")}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handlePowerOffButtonPress}>
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
                Power Off
              </Text>
            </View>
          </ImageBackground>
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
  power: {
    width: 60,
    height: 60,
  },
  bar: {
    position: "absolute",
    left: 55,
    width: 120,
    height: 30,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PowerOffButton;
