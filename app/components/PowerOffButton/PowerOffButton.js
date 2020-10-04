import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
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
        <TouchableHighlight
          style={styles.barContainer}
          onPress={this.handlePowerOffButtonPress}
        >
          <ImageBackground
            style={styles.bar}
            source={require("../../assets/powerBar.png")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24,
              }}
            >
              Power Off
            </Text>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.powerIconContainer}
          onPress={this.handlePowerOffButtonPress}
        >
          <Image
            style={styles.powerIcon}
            source={require("../../assets/power.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "50%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  powerIconContainer: {
    height: "100%",
    width: "35%",
    right: 9,
  },
  powerIcon: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  barContainer: {
    height: "70%",
    width: "65%",
  },
  bar: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PowerOffButton;
