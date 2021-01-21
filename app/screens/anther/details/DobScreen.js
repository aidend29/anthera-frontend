import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import DobScreenSvg from "../../../assets/svg/DobScreenSvg";
import AppDatetimePicker from "../../../shared/AppDatetimePicker";
import { DetailsContext } from "../../../context";

function DobScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  return (
    <AppDetail
      progressNum={4}
      //Header
      headerTextFront="You were"
      headerTextColored="born"
      headerTextRest="on"
      //Svg
      Svgname={DobScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("purpose");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Dob selected", true);
        navigation.navigate("relationshipStatus");
      }}
    >
      <AppDatetimePicker _mode="date" />
    </AppDetail>
  );
}

export default DobScreen;
