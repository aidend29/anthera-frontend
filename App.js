import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SplashScreen from "./app/screens/SplashScreen";

//FONTS
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  // LOADING FONTS
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <WelcomeScreen />;
}
