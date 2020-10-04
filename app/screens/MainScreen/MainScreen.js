import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Status, StopTuneButton, PowerOffButton } from "../../components/";
import MainTuneButton from "../../components/MainTuneButton/MainTuneButton";
import { connect } from "react-redux";

class MainScreenBase extends Component {
  getButton = () => {
    const { status } = this.props;

    if (status === "push2Tune") {
      return (
        <View style={{ flexDirection: "row-reverse" }}>
          <PowerOffButton />
        </View>
      );
    }
    // INITIALIZING, TUNING, FINISHING, COMPLETED states
    else {
      return (
        <View>
          <StopTuneButton style={{ flexDirection: "row" }} />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/tunify-static-background.png")}
        >
          <View style={styles.status}>
            <Status />
          </View>
          <MainTuneButton />
          <View style={styles.bottomButtons}>{this.getButton()}</View>
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
  status: {
    bottom: "8%",
  },
  bottomButtons: {
    position: "absolute",
    bottom: "12%",
    height: "9%",
    width: "100%",
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
