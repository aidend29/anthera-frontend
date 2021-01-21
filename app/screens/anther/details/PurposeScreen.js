import React, { useContext } from "react";
import { Text } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function PurposeScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  let selectedPurpose = 0;

  return (
    <AppDetail
      progressNum={3}
      //Header
      headerTextFront="You are"
      headerTextColored="here"
      headerTextRest="to"
      //Bottom Svg
      BottomSvgname={PurposeScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("sexualOrientation");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Sexual purpose", selectedPurpose);
        navigation.navigate("dob");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          selectedPurpose = idx;
        }}
      >
        <Text>date</Text>
        <Text>chat and meet new people</Text>
        <Text>see how it goes</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

export default PurposeScreen;
