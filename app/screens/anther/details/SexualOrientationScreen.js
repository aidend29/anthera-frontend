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
import { DetailsProgressbar, updateProgress } from "./shared";

function IdentityScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        {DetailsProgressbar(detailsContext)}
        <AppTextColorCoded
          front="I would describe "
          colored="my sexual orientation "
          rest="as..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <Text>{detailsContext.detailsProg}</Text>
        <View style={styles.midContainer}>
          <AppCheckBox text="straight" style={styles.checkbox} />
          <AppCheckBox text="gay or lesbian" style={styles.checkbox} />
          <AppCheckBox text="bisexual" style={styles.checkbox} />
          <AppCheckBox text="asexual" style={styles.checkbox} />
          <AppCheckBox text="pansexual" style={styles.checkbox} />
          <AppCheckBox text="questioning" style={styles.checkbox} />
          <AppCheckBox text="other" style={styles.checkbox} />
          <AppCheckBox text="prefer not to say" style={styles.checkbox} />
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
              updateProgress(detailsContext, -1);
              navigation.navigate("identity");
            }}
          />
          <AppButtonRound
            icon="leftcircle"
            style={styles.navBtn}
            onPress={() => {
              updateProgress(detailsContext, 1);
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
