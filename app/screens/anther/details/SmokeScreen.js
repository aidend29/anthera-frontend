import React, { useContext, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function SmokeScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const smokeOption = useRef(0);

  return (
    <AppDetail
      progressNum={10}
      //Header
      headerTextColored="Smoking"
      headerTextRest="habbits"
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("alcohol");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;
        details.content["smoke"] = smokeOption.current;
        detailsContext.setDetails(details);

        console.log("smoke: ", detailsContext.details.content.smoke);
        navigation.navigate("height");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          smokeOption.current = idx;
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
