import React, { useState, useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function SexualOrientation({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  let selectedSexualOrientation = 0;

  return (
    <AppDetail
      progressNum={2}
      //Header
      headerTextFront="You would describe your"
      headerTextColored="sexual orientation"
      headerTextRest="as"
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("identity");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;

        switch (selectedSexualOrientation) {
          case 0:
            details.content["sexualOrientation"] = "Staight";
            break;
          case 1:
            details.content["sexualOrientation"] = "Gay/Lesbian";
            break;
          case 2:
            details.content["sexualOrientation"] = "Bisexual";
            break;
          case 3:
            details.content["sexualOrientation"] = "Transexual";
            break;
          case 4:
            details.content["sexualOrientation"] = "Asexual";
            break;
          case 5:
            details.content["sexualOrientation"] = "Pansexual";
            break;
          case 6:
            details.content["sexualOrientation"] = "Questioning";
            break;
          case 7:
            details.content["sexualOrientation"] = "Other";
            break;
          case 8:
            details.content["sexualOrientation"] = "null";
            break;
          default:
            details.content["sexualOrientation"] = "null";
            break;
        }
        console.log(
          "sexualOrientation: ",
          detailsContext.details.content.sexualOrientation
        );
        detailsContext.setDetails(details);
        navigation.navigate("purpose");
      }}
    >
      <AppCheckboxGroup
        style={styles.chkBoxGrp}
        onChange={(idx) => {
          selectedSexualOrientation = idx;
        }}
      >
        <Text>Straight</Text>
        <Text>Gay or Lesbian</Text>
        <Text>Bisexual</Text>
        <Text>Transexual</Text>
        <Text>Asexual</Text>
        <Text>Pansexual</Text>
        <Text>Questioning</Text>
        <Text>Other</Text>
        <Text>Prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

const styles = StyleSheet.create({});
export default SexualOrientation;
