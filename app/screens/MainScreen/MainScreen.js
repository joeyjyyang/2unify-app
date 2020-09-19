import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Status, StopTuneButton, PowerOffButton } from "../../components/";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainTuneButton from "../../components/MainTuneButton/MainTuneButton";

let customFonts = {
  NovaSlim_400Regular: require("../../assets/fonts/NovaSlim-Regular.ttf"),
};

class MainScreen extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={require("../../assets/tunify-static-background.png")}
          >
            <Status />
            <MainTuneButton />
            <View style={styles.bottomWidgets}>
              <StopTuneButton />
              <PowerOffButton />
            </View>
          </ImageBackground>
        </View>
      );
    }
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
  bottomWidgets: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
});

export default MainScreen;
