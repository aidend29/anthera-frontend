import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import IdentityScreen from "../screens/anther/details/IdentityScreen";
import SexualOrientationScreen from "../screens/anther/details/SexualOrientationScreen";
import PurposeScreen from "../screens/anther/details/PurposeScreen";
import DobScreen from "../screens/anther/details/DobScreen";
import RelationshipStatus from "../screens/anther/details/RelationshipStatus";

function DetailsNaviagtor() {
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
      <Stack.Screen
        name="sexualOrientation"
        component={SexualOrientationScreen}
      />
      <Stack.Screen name="purpose" component={PurposeScreen} />
      <Stack.Screen name="dob" component={DobScreen} />
      <Stack.Screen name="relationshipStatus" component={RelationshipStatus} />
    </Stack.Navigator>
  );
}

export default DetailsNaviagtor;
