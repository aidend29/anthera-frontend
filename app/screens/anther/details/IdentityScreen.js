import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../../../config";
import IdentityScreenSvg from "../../../assets/svg/IdentityScreenSvg";
import { DetailsContext } from "../../../context";
import AppDetail from "../../../shared/AppDetail";

function IdentityScreen({ navigation }) {
  const [femaleSelected, setFemaleSelected] = useState({
    btnSelected: styles.btnSelected,
    textSelected: styles.textSelected,
  });
  const [maleSelected, setMaleSelected] = useState({});

  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      //Header
      headerTextColored="You"
      headerTextRest="are a"
      //Svg
      Svgname={IdentityScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavIsPrevious={false}
      botNavOnPressRight={() => {
        //setContext
        console.log(
          Boolean(maleSelected.btnSelected)
            ? "Male selected"
            : "Female selected"
        );
        navigation.navigate("sexualOrientation");
      }}
    >
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
            Woman
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
            Man
          </Text>
        </TouchableOpacity>
      </View>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
  },
  btnLeft: {
    borderTopLeftRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: moderateScale(0.7),
    borderBottomWidth: moderateScale(0.7),
    borderLeftWidth: moderateScale(0.7),

    width: moderateScale(120),
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
    elevation: 1,
  },
  btnRight: {
    borderTopRightRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    borderColor: cssVariables.colors.secondary,
    borderTopWidth: moderateScale(0.7),
    borderBottomWidth: moderateScale(0.7),
    borderRightWidth: moderateScale(0.7),

    width: moderateScale(120),
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
    elevation: 1,
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
});
export default IdentityScreen;
