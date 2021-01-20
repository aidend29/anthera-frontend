import React from "react";
import { StyleSheet, View } from "react-native";

import { cssVariables, moderateScale, verticalScale } from "../../config";
import AppButtonRound from "./AppButtonRound";

function AppBottonScreenNav({
  onPressLeft,
  onPressRight,
  isNext = true,
  isPrevious = true,
}) {
  return (
    <View style={styles.navBtnContainer}>
      {isPrevious && (
        <AppButtonRound
          icon="leftcircle"
          go="back"
          style={styles.navBtn}
          onPress={() => {
            onPressLeft();
          }}
        />
      )}
      {isNext && (
        <AppButtonRound
          icon="leftcircle"
          style={styles.navBtn}
          onPress={() => {
            onPressRight();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default AppBottonScreenNav;
