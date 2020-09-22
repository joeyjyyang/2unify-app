import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Status, StopTuneButton, PowerOffButton } from "../../components/";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainTuneButton from "../../components/MainTuneButton/MainTuneButton";
import { connect } from "react-redux";

let customFonts = {
  NovaSlim_400Regular: require("../../assets/fonts/NovaSlim-Regular.ttf"),
};

class MainScreenBase extends Component {
  state = {
    fontsLoaded: false,
  };

  getButton = () => {
    const { status } = this.props;
    // PUSH 2 TUNE state
    if (status === "PUSH_2_TUNE") {
      return <PowerOffButton />;
    }
    // INITIALIZING, TUNING, FINISHING, COMPLETED states
    else {
      return <StopTuneButton />;
    }
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (status === "") {
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
            <View style={styles.bottomWidgets}>{this.getButton}</View>
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

const mapStateToProps = (state) => {
  return {
    status: state.app.status,
  };
};

//const mapDispatchToProps = {};

const MainScreen = connect(mapStateToProps, null)(MainScreenBase);

export default MainScreen;
