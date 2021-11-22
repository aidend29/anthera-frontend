import React, { useState } from "react";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Octicons, Ionicons } from "@expo/vector-icons";
import AppScreen from "../shared/AppScreen";

import AccountScreen from "../screens/anther/AccountScreen";
import ChatScreen from "../screens/anther/ChatScreen";
import HomeScreen from "../screens/anther/HomeScreen";
// import AppTest from "../shared/AppTest";
import AccountIcon from "../assets/svg/AccountIcon";
import ChatIcon from "../assets/svg/ChatIcon";
import AppTab from "../shared/AppTabScreen";

import IdentityScreen from "../screens/anther/details/IdentityScreen";
import { cssVariables, moderateScale, verticalScale } from "../../config";
import { color } from "react-native-reanimated";

const Tab = createMaterialTopTabNavigator();

function AppNaviagtor() {
  return (
    <>
      <StatusBar
        backgroundColor={cssVariables.colors.backgroundColor}
        barStyle="dark-content"
        translucent={true}
      />
      <Tab.Navigator
        style={{ backgroundColor: cssVariables.colors.backgroundColor }}
        tabBarOptions={{
          activeTintColor: cssVariables.colors.primary,
          inactiveTintColor: cssVariables.colors.semiGrey,
          style: {
            marginTop: verticalScale(35),
            backgroundColor: cssVariables.colors.backgroundColor,
            elevation: 0,
            shadowColor: cssVariables.colors.backgroundColor,
          },
          indicatorStyle: { opacity: 0 },
          showIcon: true,
          showLabel: false,
          pressColor: cssVariables.colors.secondaryLightest,
        }}
      >
        <Tab.Screen
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
            },
          }}
          name="account"
          component={AccountScreen}
          options={{
            tabBarIcon: (props) => (
              <AppTab label="account" SvgIcon={AccountIcon} {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="anther"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => (
              <AppTab
                label="dashbord"
                SvgIcon={AccountIcon}
                {...props}
                t={true}
              />
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={ChatScreen}
          options={{
            tabBarIcon: (props) => (
              <AppTab label="chat" SvgIcon={AccountIcon} {...props} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default AppNaviagtor;
