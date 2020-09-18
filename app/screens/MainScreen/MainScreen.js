import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Status, StopTuneButton, PowerOffButton } from "../../components/";
import { AppLoading } from "expo";
import { useFonts, NovaSlim_400Regular } from "@expo-google-fonts/nova-slim";
import MainTuneButton from "../../components/MainTuneButton/MainTuneButton";

const MainScreen = (props) => {
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
          source={require("../../assets/tunify-static-background.png")}
        >
          <Status />
          <MainTuneButton />
          <View style={styles.bottomWidgets}>
            <StopTuneButton />
            <PowerOffButton />
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
