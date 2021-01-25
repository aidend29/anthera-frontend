import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";
import { verticalScale } from "../../../../config";

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
        let details = detailsContext.details;

        switch (selectedPurpose) {
          case 0:
            details.content["purpose"] = "Date";
            break;
          case 1:
            details.content["purpose"] = "Chat and meet new people";
            break;
          case 2:
            details.content["purpose"] = "See how it goes";
            break;
        }
        detailsContext.setDetails(details);

        console.log("purpose: ", detailsContext.details.content.purpose);
        navigation.navigate("dob");
      }}
    >
      <AppCheckboxGroup
        style={styles.chkboxGrp}
        onChange={(idx) => {
          selectedPurpose = idx;
        }}
      >
        <Text>Date</Text>
        <Text>Chat and meet new people</Text>
        <Text>See how it goes</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}
const styles = StyleSheet.create({
  chkboxGrp: {},
});
export default PurposeScreen;
