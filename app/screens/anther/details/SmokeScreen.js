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
      progressNum={10}
      //Header
      headerTextFront="I"
      headerTextColored="am"
      headerTextRest="..."
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("alcohol");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Dob selected", true);
        navigation.navigate("smoke");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          console.log(idx);
        }}
      >
        <Text>a smoker</Text>
        <Text>not a smoker</Text>
        <Text>prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

export default SmokeScreen;
