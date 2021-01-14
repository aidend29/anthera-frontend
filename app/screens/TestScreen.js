import React from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

function TestScreen(props) {
  let [fontsLoaded] = useFonts({
    "Lato-Light": require("../assets/fonts/Lato2OFL/Lato-Light.ttf"),
    "Lato-Medium": require("../assets/fonts/Lato2OFL/Lato-Medium.ttf"),
    "Lato-Heavy": require("../assets/fonts/Lato2OFL/Lato-Heavy.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Lato-Light", fontSize: 20 }}>
          Hey! You're... Male
        </Text>
        <Text style={{ fontFamily: "Lato-Medium", fontSize: 20 }}>
          Hey! You're... Male
        </Text>
        <Text style={{ fontFamily: "Lato-Heavy", fontSize: 20 }}>
          Hey! You're... Male
        </Text>
        <Text style={{ fontSize: 40 }}>Platform Default</Text>
      </View>
    );
  }
}

export default TestScreen;
