import React, { useContext, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";
// import { updateDetailsApi } from "./shared/index";

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

        switch (smokeOption.current) {
          case 0:
            details.content["smoke"] = "A_smoker";
            break;
          case 1:
            details.content["smoke"] = "Not_a_smoker";
            break;
          default:
            details.content["smoke"] = "void";
            break;
        }
        console.log("smoke: ", detailsContext.details.content.smoke);
        // updateDetailsApi({
        //   smoking_habbit: detailsContext.details.content.smoke,
        // });
        navigation.navigate("height");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          smokeOption.current = idx;
        }}
      >
        <Text>A smoker</Text>
        <Text>Not a smoker</Text>
        <Text>Prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

export default SmokeScreen;
