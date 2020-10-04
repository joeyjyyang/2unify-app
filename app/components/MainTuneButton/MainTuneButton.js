import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { setStatus } from "../../state/App.slice";
import { connect } from "react-redux";

class MainTuneButtonBase extends Component {
  handleTuneButtonPress = () => {
    this.props.setStatus("initializing");
    console.log("Tune button pressed.");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleTuneButtonPress}>
          <Image
            style={styles.tuneButton}
            source={require("../../assets/tunify-guitar-pick-logo.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "26%",
    width: "39%",
  },
  tuneButton: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

/*const mapStateToProps = (state) => {
  return {};
};*/

const mapDispatchToProps = {
  setStatus,
};

const MainTuneButton = connect(null, mapDispatchToProps)(MainTuneButtonBase);

export default MainTuneButton;
