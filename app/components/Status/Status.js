import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

class StatusBase extends Component {
  getStatusMessage = () => {
    const { status } = this.props;

    switch (status) {
      case "push2Tune":
        return "PUSH 2 TUNE.";
      case "initializing":
        return "INITIALIZING...";
      case "tuning":
        return "TUNING...";
      case "finishing":
        return "FINISHING...";
      case "completed":
        return "COMPLETED.";
      default:
        return "";
    }
  };

  render() {
    return (
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "NovaSlim_400Regular",
          fontSize: 20,
        }}
      >
        {this.getStatusMessage}
      </Text>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.app.status,
  };
};

//const mapDispatchToProps = {};

const Status = connect(mapStateToProps, null)(StatusBase);

export default Status;
