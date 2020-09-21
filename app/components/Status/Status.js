import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

class StatusBase extends Component {
  render() {
    const { status } = this.props;

    return (
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "NovaSlim_400Regular",
          fontSize: 20,
        }}
      >
        {status}
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
