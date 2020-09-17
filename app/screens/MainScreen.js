import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts, NovaSlim_400Regular } from "@expo-google-fonts/nova-slim";

const MainScreen = (props) => {
  const handleTuneButtonPress = () => {
    console.log("Tune button pressed.");
  };

  let [fontsLoaded] = useFonts({
    NovaSlim_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/tunify-static-background.png")}
        >
          <Text style={{ color: "#FFFFFF", fontFamily: "NovaSlim_400Regular" }}>
            PUSH 2 TUNE.
          </Text>
          <TouchableWithoutFeedback onPress={handleTuneButtonPress}>
            <Image
              style={styles.tuneButton}
              source={require("../assets/tunify-guitar-pick-logo.png")}
            />
          </TouchableWithoutFeedback>
          <View style={styles.bottomWidgets}>
            <Text
              style={{ color: "#FFFFFF", fontFamily: "NovaSlim_400Regular" }}
            >
              Stop Tune
            </Text>
            <Text
              style={{ color: "#FFFFFF", fontFamily: "NovaSlim_400Regular" }}
            >
              Power Off
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tuneButton: {},
  bottomWidgets: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
});

export default MainScreen;
