import React, { useState, useContext } from "react";
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
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

function IdentityScreen({ navigation }) {
  const [femaleSelected, setFemaleSelected] = useState({
    btnSelected: styles.btnSelected,
    textSelected: styles.textSelected,
  });
  const [maleSelected, setMaleSelected] = useState({});

  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        <ProgressDots num={1} />
        <AppTextColorCoded
          colored="I'm"
          rest="a..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.svgWrap}>
          <IdentityScreenSvg
            height={verticalScale(250)}
            width={moderateScale(250)}
          />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.btnLeft, femaleSelected.btnSelected]}
            onPress={() => {
              setMaleSelected({});
              setFemaleSelected({
                btnSelected: styles.btnSelected,
                textSelected: styles.textSelected,
              });
            }}
          >
            <Text
              style={[appStyles.text, styles.text, femaleSelected.textSelected]}
            >
              Female
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnRight, maleSelected.btnSelected]}
            onPress={() => {
              setFemaleSelected({});
              setMaleSelected({
                btnSelected: styles.btnSelected,
                textSelected: styles.textSelected,
              });
            }}
          >
            <Text
              style={[appStyles.text, styles.text, maleSelected.textSelected]}
            >
              Male
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("sexualOrientation");
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
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
});
export default IdentityScreen;
