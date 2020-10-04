import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { setStatus } from "../../state/App.slice";
import { connect } from "react-redux";

class StopTuneButtonBase extends Component {
  handleStopTuneButtonPress = () => {
    this.props.setStatus("push2Tune");
    console.log("Stop Tune button pressed.");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.stopIconContainer}
          onPress={this.handleStopTuneButtonPress}
        >
          <Image
            style={styles.stopIcon}
            source={require("../../assets/stop.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.barContainer}
          onPress={this.handleStopTuneButtonPress}
        >
          <ImageBackground
            style={styles.bar}
            source={require("../../assets/stopBar.png")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24,
              }}
            >
              Stop Tune
            </Text>
          </ImageBackground>
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
  stopIconContainer: {
    height: "100%",
    width: "35%",
    left: 9,
  },
  stopIcon: {
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

/*const mapStateToProps = (state) => {
  return {};
};*/

const mapDispatchToProps = {
  setStatus,
};

const StopTuneButton = connect(null, mapDispatchToProps)(StopTuneButtonBase);

export default StopTuneButton;
