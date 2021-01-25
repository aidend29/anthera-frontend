import React, { useContext, useState, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";

import SchoolScreenSvg from "../../../assets/svg/SchoolScreenSvg";
import { moderateScale, verticalScale, cssVariables } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import AppInputLine from "../../../shared/AppInputLine";
import AppInputField from "../../../shared/AppInputField";
import { DetailsContext } from "../../../context";

function SchoolScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const [schoolName, setSchoolName] = useState("");
  const [majorName, setMajorName] = useState("");
  const graduated = useRef(false);

  const handleDisplayingCheckboxGrp = () => {
    if (schoolName.length > 0 || majorName.length > 0)
      return (
        <AppCheckboxGroup
          style={styles.checkboxGrp}
          onChange={(idx) => {
            graduated.current = idx === 0 ? false : true;
          }}
        >
          <Text>still a student</Text>
          <Text>graduated</Text>
        </AppCheckboxGroup>
      );
  };

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

        let details = detailsContext.details;
        let form = {
          schoolName: schoolName,
          majorName: majorName,
          graduated: graduated.current,
        };
        details.content["school"] = form;
        detailsContext.setDetails(details);

        console.log("school: ", detailsContext.details.content.school);
        navigation.navigate("occupation");
      }}
    >
      <View style={styles.container}>
        <AppInputLine
          autoCapitalize="words"
          placeholder="name of your school (optional)"
          onChangeText={(text) => {
            setSchoolName(text);
          }}
          onClear={() => {
            setSchoolName("");
          }}
        />
        <AppInputLine
          placeholder="major (optional)"
          autoCapitalize="words"
          onChangeText={(text) => {
            setMajorName(text);
          }}
          onClear={() => {
            setMajorName("");
          }}
        />
        {handleDisplayingCheckboxGrp()}
      </View>
    </AppDetail>
  );
}
const styles = StyleSheet.create({
  container: {
    width: cssVariables.screenMaxWidth - moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxGrp: {
    marginTop: verticalScale(20),
  },
});

export default SchoolScreen;
