import React from "react";
import { StyleSheet, View } from "react-native";

import { cssVariables, moderateScale, verticalScale } from "../../config";
import AppButtonRound from "./AppButtonRound";

function AppBottonScreenNav({
  onPressLeft,
  onPressRight,
  isNext = true,
  isPrevious = true,
  displayButtonDone = false,
  style,
}) {
  let oneBtnStyle = isPrevious ? {} : { justifyContent: "center" };
  return (
    <View style={[styles.navBtnContainer, oneBtnStyle, style]}>
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
          displayButtonDone={displayButtonDone}
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {},
});

export default AppBottonScreenNav;
