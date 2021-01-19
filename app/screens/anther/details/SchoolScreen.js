import React, { useContext, useState } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import AppInputField from "../../../shared/AppInputField";
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

function SchoolScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  let schoolName = null;
  let graduated = false;

  return (
    <AppScreen>
      <ProgressDots num={7} />
      <AppTextColorCoded
        front="My "
        colored="school"
        styles={[appStyles.smHeading, styles.title]}
        animation="fadeInUp"
      />
      <View style={styles.midContainer}>
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
      {/* <View style={styles.svgWrap}>
          <PurposeScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View> */}
      <View style={styles.navBtnContainer}>
        <AppButtonRound
          icon="leftcircle"
          go="back"
          style={styles.navBtn}
          onPress={() => {
            navigation.navigate("intrests");
          }}
        />
        <AppButtonRound
          icon="leftcircle"
          style={styles.navBtn}
          onPress={() => {
            navigation.navigate("occupation");
            const school = {
              name: schoolName,
              graduated: graduated,
            };
            console.log(school);
          }}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: verticalScale(-45),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(30),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginHorizontal: moderateScale(40),
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(140),
  },
});
export default SchoolScreen;
