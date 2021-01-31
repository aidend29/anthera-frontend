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
import IntrestsScreen from "../screens/anther/details/IntrestsScreen";
import SchoolScreen from "../screens/anther/details/SchoolScreen";
import OccupationScreen from "../screens/anther/details/OccupationScreen";
import AlcoholScreen from "../screens/anther/details/AlcoholScreen";
import SmokeScreen from "../screens/anther/details/SmokeScreen";
import HeightScreen from "../screens/anther/details/HeightScreen";
import AboutYouScreenScreen from "../screens/anther/details/AboutYouScreen";
import ProfilePictureScreen from "../screens/anther/details/ProfilePictureScreen";

function DetailsNaviagtor() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
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
      <Stack.Screen name="intrests" component={IntrestsScreen} />
      <Stack.Screen name="school" component={SchoolScreen} />
      <Stack.Screen name="occupation" component={OccupationScreen} />
      <Stack.Screen name="alcohol" component={AlcoholScreen} />
      <Stack.Screen name="smoke" component={SmokeScreen} />
      <Stack.Screen name="height" component={HeightScreen} />
      <Stack.Screen name="aboutYou" component={AboutYouScreenScreen} />
      <Stack.Screen name="profilePicture" component={ProfilePictureScreen} />
    </Stack.Navigator>
  );
}

export default DetailsNaviagtor;
