import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Status, StopTuneButton, PowerOffButton } from "../../components/";
import MainTuneButton from "../../components/MainTuneButton/MainTuneButton";
import { connect } from "react-redux";

class MainScreenBase extends Component {
  getButton = () => {
    const { status } = this.props;

    if (status === "push2Tune") {
      return <PowerOffButton />;
    }
    // INITIALIZING, TUNING, FINISHING, COMPLETED states
    else {
      return <StopTuneButton />;
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
          <View style={styles.bottomButtons}>
            <StopTuneButton />
            <PowerOffButton />
          </View>
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
    flexDirection: "row",
    //borderWidth: 3,
    //borderColor: "green",
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
