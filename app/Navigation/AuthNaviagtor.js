import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";

import IdentityScreen from "../screens/anther/details/IdentityScreen";
import PurposeScreen from "../screens/anther/details/PurposeScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator(); // CREATE STACK NAVIAGTION COMPONENT

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {/* ADDING SCREENS TO BE NAVIAGTION ABLE}*/}
      {/* <Stack.Screen name="IdentityScreen" component={IdentityScreen} /> */}
      {/* <Stack.Screen name="PurposeScreen" component={PurposeScreen} /> */}
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
