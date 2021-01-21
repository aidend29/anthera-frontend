import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function SmokeScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      progressNum={13}
      //Header
      headerTextFront="My"
      headerTextColored="profile picture"
      headerTextRest="..."
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("aboutYou");
      }}
      displayButtonDone={true}
      botNavOnPressRight={() => {
        //setContext
        console.log("Dob selected", true);
        navigation.navigate("profilePicture");
      }}
    ></AppDetail>
  );
}

export default SmokeScreen;
