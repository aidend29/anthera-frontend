import React, { useContext, useState } from "react";
import { Text, View } from "react-native";

import { moderateScale, verticalScale } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import AppInputField from "../../../shared/AppInputField";
import { DetailsContext } from "../../../context";

function SchoolScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  let schoolName = null;
  let graduated = false;

  return (
    <AppDetail
      progressNum={7}
      //Header
      headerTextFront="My"
      headerTextColored="school"
      //Bottom Svg
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
        <AppInputField
          placeholder=""
          icon={null}
          onChangeText={(text) => {
            schoolName = text;
          }}
          apiCallOnTextChange={() => {}}
          style={{
            marginVertical: verticalScale(20),
            marginTop: verticalScale(-20),
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
