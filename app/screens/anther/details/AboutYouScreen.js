import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import AppDetail from "../../../shared/AppDetail";
import { DetailsContext } from "../../../context";
import AppInputLine from "../../../shared/AppInputLine";
import { appStyles, cssVariables, moderateScale } from "../../../../config";
import { useState } from "react/cjs/react.development";

function AboutYouScreen({ navigation }) {
  const [currentTextLength, setCurrentTextLength] = useState("0");
  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      progressNum={12}
      //Header
      headerTextFront="A bit about"
      headerTextColored="you"
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("height");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Dob selected", true);
        navigation.navigate("profilePicture");
      }}
    >
      <AppInputLine
        style={{ width: moderateScale(290) }}
        maxLength={255}
        placeholder="Write what you want others to know..."
        onChangeText={(text) => {
          setCurrentTextLength(text.length);
        }}
      />
      <Text style={(appStyles.text, { color: cssVariables.colors.secondary })}>
        {currentTextLength}
        <Text>/204</Text>
      </Text>
    </AppDetail>
  );
}

export default AboutYouScreen;
