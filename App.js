import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthNaviagtor from "./app/Navigation/AuthNaviagtor";
import AppNaviagtor from "./app/Navigation/AppNavigator";
import DetailsNaviagtor from "./app/Navigation/DetailsNaviagtor";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SplashScreen from "./app/screens/SplashScreen";
import SigninScreen from "./app/screens/auth/SigninScreen";
import SignupScreen from "./app/screens/auth/SignupScreen";

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
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  const [details, setDetails] = useState();

  // LOADING FONTS
  let [fontsLoaded] = useFonts({
    "Lato-Light": require("./app/assets/fonts/Lato2OFL/Lato-Light.ttf"),
    "Lato-Regular": require("./app/assets/fonts/Lato2OFL/Lato-Regular.ttf"),
    "Lato-Medium": require("./app/assets/fonts/Lato2OFL/Lato-Medium.ttf"),
    "Lato-Heavy": require("./app/assets/fonts/Lato2OFL/Lato-Heavy.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {test()}
          {/* {user ? <AppNaviagtor /> : <AuthNaviagtor />} */}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

  function test() {
    if (user) {
      if (details) {
        //Go to app
        return <AppNaviagtor />;
      } else {
        //Go to details nav
        return <DetailsNaviagtor />;
      }
    } else {
      //Go to auth nav
      return <DetailsNaviagtor />;
      return <AuthNaviagtor />;
    }
  }
}
