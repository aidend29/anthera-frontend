import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AccountScreen from "../screens/anther/AccountScreen";
import ChatScreen from "../screens/anther/ChatScreen";
import HomeScreen from "../screens/anther/HomeScreen";

const Tab = createMaterialTopTabNavigator();

function AppNaviagtor() {
  return (
    <Tab.Navigator swipeEnabled="true" style={{ paddingTop: 100 }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="account" component={AccountScreen} />
      <Tab.Screen name="chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default AppNaviagtor;
