import React, { useState, useContext } from "react";
import { Text } from "react-native";

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
      headerTextFront="I would describe"
      headerTextColored="my sexual orientation"
      headerTextRest="as..."
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("identity");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Sexual orientation", selectedSexualOrientation);
        navigation.navigate("purpose");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          selectedSexualOrientation = idx;
        }}
      >
        <Text>straight</Text>
        <Text>gay or lesbian</Text>
        <Text>bisexual</Text>
        <Text>transexual</Text>
        <Text>asexual</Text>
        <Text>pansexual</Text>
        <Text>questioning</Text>
        <Text>other</Text>
        <Text>prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

export default SexualOrientation;
