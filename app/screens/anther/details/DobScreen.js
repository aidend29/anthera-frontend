import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import DobScreenSvg from "../../../assets/svg/DobScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppDatetimePicker from "../../../shared/AppDatetimePicker";
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

function DobScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  return (
    <AppScreen>
      <View style={styles.container}>
        <ProgressDots num={4} />
        <AppTextColorCoded
          front="I was "
          colored="born"
          rest="on..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.svgWrap}>
          <DobScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View>
        <View style={styles.midContainer}>
          <AppDatetimePicker _mode="date" />
        </View>
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("purpose");
            }}
          />
          <AppButtonRound
            icon="leftcircle"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("relationshipStatus");
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
    marginTop: verticalScale(10),
  },
  midContainer: {
    marginBottom: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
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
export default DobScreen;
