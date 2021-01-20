import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function RelationshipScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  let selectedRationshipStatus = 0;

  return (
    <AppDetail
      progressNum={5}
      //Header
      headerTextFront="My"
      headerTextColored="relationship status"
      headerTextRest="is..."
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("dob");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Relationship status selected", selectedRationshipStatus);
        navigation.navigate("intrests");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          selectedRationshipStatus = idx;
        }}
      >
        <Text>single</Text>
        <Text>open</Text>
        <Text>taken</Text>
        <Text>complicated</Text>
        <Text>prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}
export default RelationshipScreen;
