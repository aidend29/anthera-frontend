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
import IdentityScreenSvg from "../../../assets/svg/IdentityScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";

function IdentityScreen({ navigation }) {
  const [femaleSelected, setFemaleSelected] = useState({
    btnSelected: styles.btnSelected,
    textSelected: styles.textSelected,
  });
  const [maleSelected, setMaleSelected] = useState({});

  return (
    <AppScreen>
      <View style={styles.container}>
        <AppTextColorCoded
          front="You're"
          colored=" here"
          rest="to..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.svgWrap}></View>
        <View style={styles.rowContainer}></View>
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("identity");
            }}
          />
          <AppButtonRound icon="leftcircle" style={styles.navBtn} />
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
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
  },
  btnLeft: {
    borderTopLeftRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,

    width: moderateScale(120),
    alignItems: "center",
  },
  btnRight: {
    borderTopRightRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,

    width: moderateScale(120),
    alignItems: "center",
  },
  text: {
    paddingVertical: verticalScale(10),
    fontFamily: cssVariables.fontFamily.medium,
  },

  btnSelected: {
    borderColor: cssVariables.colors.primary,
    backgroundColor: cssVariables.colors.primary,
  },
  textSelected: {
    color: cssVariables.colors.white,
    fontFamily: cssVariables.fontFamily.heavy,
  },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: verticalScale(50),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
});
export default IdentityScreen;
