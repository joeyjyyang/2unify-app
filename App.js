import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handleTextPress = () => {
    console.log("Text pressed.");
  };

  const handleImagePress = () => {
    console.log("Image pressed.");
  };

  const handleButtonPress = () => {
    console.log("Button pressed.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleTextPress}>2unify</Text>
      <Image source={require("./assets/icon.png")} />
      <TouchableHighlight onPress={handleImagePress}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button title="Button" onPress={handleButtonPress} />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Alert", "Alert alerted.", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
