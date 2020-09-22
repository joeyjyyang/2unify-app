import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/tunify-static-background.png")}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/tunify-text-logo.png")}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
});

export default LandingScreen;
