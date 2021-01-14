import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import IdentityScreen from "../screens/anther/details/IdentityScreen";
import PurposeScreen from "../screens/anther/details/PurposeScreen";

function DetailsNaviagtor(props) {
  const Stack = createStackNavigator();
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
      <Stack.Screen name="identity" component={IdentityScreen} />
      <Stack.Screen name="purpose" component={PurposeScreen} />
    </Stack.Navigator>
  );
}

export default DetailsNaviagtor;
