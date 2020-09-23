import React, { Component } from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { setStatus } from "../../state/App.slice";
import { connect } from "react-redux";

class MainTuneButtonBase extends Component {
  handleTuneButtonPress = () => {
    this.props.setStatus("initializing");
    console.log("Tune button pressed.");
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleTuneButtonPress}>
        <Image
          style={styles.tuneButton}
          source={require("../../assets/tunify-guitar-pick-logo.png")}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  tuneButton: {
    width: 200,
    height: 200,
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
