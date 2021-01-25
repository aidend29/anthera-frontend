import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";
import { verticalScale } from "../../../../config";

function RelationshipScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  let selectedRationshipStatus = 0;

  return (
    <AppDetail
      progressNum={5}
      //Header
      headerTextFront="Your"
      headerTextColored="relationship status"
      headerTextRest="is"
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("dob");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;

        switch (selectedRationshipStatus) {
          case 0:
            details.content["relationshipStatus"] = "Single";
            break;
          case 1:
            details.content["relationshipStatus"] = "Open";
            break;
          case 2:
            details.content["relationshipStatus"] = "Taken";
            break;
          case 3:
            details.content["relationshipStatus"] = "Complicated";
            break;
          case 4:
            details.content["relationshipStatus"] = "null";
            break;
        }
        detailsContext.setDetails(details);

        console.log(
          "relationshipStatus: ",
          detailsContext.details.content.relationshipStatus
        );
        navigation.navigate("intrests");
      }}
    >
      <AppCheckboxGroup
        style={styles.chkboxGrp}
        onChange={(idx) => {
          selectedRationshipStatus = idx;
        }}
      >
        <Text>Single</Text>
        <Text>Open</Text>
        <Text>Taken</Text>
        <Text>Complicated</Text>
        <Text>Prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  chkboxGrp: {},
});
export default RelationshipScreen;
