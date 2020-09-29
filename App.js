import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { MainScreen, LandingScreen } from "./app/screens/";
import store from "./app/state/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
