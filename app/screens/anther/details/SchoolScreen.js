import React, { useContext, useState } from "react";
import { Text, View } from "react-native";

import SchoolScreenSvg from "../../../assets/svg/SchoolScreenSvg";
import { moderateScale, verticalScale } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import AppInputLine from "../../../shared/AppInputLine";
import { DetailsContext } from "../../../context";

function SchoolScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  let schoolName = null;
  let graduated = false;

  return (
    <AppDetail
      progressNum={7}
      //Header
      headerTextFront="Your"
      headerTextColored="school"
      //Bottom Svg
      BottomSvgname={SchoolScreenSvg}
      svgWidth={100}
      svgHeight={100}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("intrests");
      }}
      botNavOnPressRight={() => {
        //setContext
        const school = {
          name: schoolName,
          graduated: graduated,
        };
        console.log(school);
        navigation.navigate("occupation");
      }}
    >
      <View style={{ marginHorizontal: moderateScale(50) }}>
        <AppInputLine
          placeholder="Name of your school"
          onChangeText={(text) => {
            schoolName = text;
          }}
        />
        <AppCheckboxGroup
          onChange={(idx) => {
            graduated = idx === 0 ? false : true;
          }}
        >
          <Text>still a student</Text>
          <Text>graduated</Text>
        </AppCheckboxGroup>
      </View>
    </AppDetail>
  );
}

export default SchoolScreen;
