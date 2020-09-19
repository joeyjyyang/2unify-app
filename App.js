import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { MainScreen } from "./app/screens/";
import { AppLoading } from "expo";

class App extends Component {
  render() {
    return <MainScreen />;
  }
}

export default App;
