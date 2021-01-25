import React, { useContext, useState, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import AboutYouScreenSvg from "../../../assets/svg/AboutYouScreenSvg";
import AppDetail from "../../../shared/AppDetail";
import { DetailsContext } from "../../../context";
import AppInputLine from "../../../shared/AppInputLine";
import { appStyles, cssVariables, moderateScale } from "../../../../config";

function AboutYouScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const aboutYouText = useRef("");

  return (
    <AppDetail
      progressNum={12}
      //Header
      headerTextFront="A bit about"
      headerTextColored="you"
      //Svg
      Svgname={AboutYouScreenSvg}
      svgWidth={180}
      svgHeight={180}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("height");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;
        details.content["aboutYou"] = aboutYouText.current;
        detailsContext.setDetails(details);

        console.log("aboutYou: ", detailsContext.details.content.aboutYou);
        navigation.navigate("profilePicture");
      }}
    >
      <AppInputLine
        style={{ width: moderateScale(290) }}
        maxLength={255}
        placeholder="Write what you want others to know..."
        maxLength={255}
        onChangeText={(text) => {
          aboutYouText.current = text;
        }}
      />
    </AppDetail>
  );
}

export default AboutYouScreen;
