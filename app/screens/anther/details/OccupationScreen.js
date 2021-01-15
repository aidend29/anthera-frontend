import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppCheckBox from "../../../shared/AppCheckBox";

function IdentityScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppTextColorCoded
          front="I "
          colored="work"
          rest="at..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.midContainer}></View>
        <View style={styles.svgWrap}>
          <OccupationScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View>
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("dob");
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
    marginTop: verticalScale(40),
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
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
});
export default IdentityScreen;
