import React, { useState, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";
import * as Progress from "react-native-progress";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppCheckBox from "../../../shared/AppCheckBox";
import { DetailsContext } from "../../../context";
import { DetailsProgressbar, updateProgress, ProgressDots } from "./shared";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";

function SexualOrientation({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <ProgressDots num={2} />
      <AppTextColorCoded
        front="I would describe "
        colored="my sexual orientation "
        rest="as..."
        styles={[appStyles.smHeading, styles.title]}
        animation="fadeInUp"
      />
      <Text>{detailsContext.detailsProg}</Text>
      <View style={styles.midContainer}>
        <AppCheckboxGroup
          onChange={(idx) => {
            console.log(idx);
          }}
        >
          <Text>straight</Text>
          <Text>gay or lesbian</Text>
          <Text>bisexual</Text>
          <Text>asexual</Text>
          <Text>pansexual</Text>
          <Text>questioning</Text>
          <Text>other</Text>
          <Text>prefer not to say</Text>
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
            navigation.navigate("identity");
          }}
        />
        <AppButtonRound
          icon="leftcircle"
          style={styles.navBtn}
          onPress={() => {
            navigation.navigate("purpose");
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
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(30),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
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
export default SexualOrientation;
