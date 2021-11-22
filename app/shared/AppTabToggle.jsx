import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { BoxShadow } from "react-native-shadow";

import { cssVariables, moderateScale, verticalScale } from "../../config";
import LogoSvg from "../assets/svg/LogoSvg";
import GridLayoutIcon from "../assets/svg/GridLayoutIcon";

function AppTabTopggle({ color, toggleLeftState, currentScreen }) {
  const handleDisplayingToggle = () => {
    const toggleAnim = toggleLeftState
      ? { 0: { left: 50 }, 1: { left: 0 } }
      : { 0: { left: 0 }, 1: { left: 55 } };
    return (
      <Animatable.View
        animation={toggleAnim}
        duration={200}
        style={[
          styles.toggle,
          {
            backgroundColor:
              color == cssVariables.colors.primary
                ? cssVariables.colors.primary
                : cssVariables.colors.semiGrey,
          },
        ]}
      ></Animatable.View>
    );
  };

  return (
    <BoxShadow
      setting={{
        width: moderateScale(100),
        height: moderateScale(22),
        color: "#000",
        border: moderateScale(12),
        radius: moderateScale(10),
        opacity: 0.09,
        x: moderateScale(4),
        y: moderateScale(-1),
        style: { right: moderateScale(40) },
      }}
    >
      <View style={styles.container}>
        <View style={styles.svg}>
          <LogoSvg
            color={color}
            width={moderateScale(24)}
            height={moderateScale(24)}
            color={
              toggleLeftState
                ? cssVariables.colors.primary
                : cssVariables.colors.semiGrey
            }
          />
        </View>
        {handleDisplayingToggle()}
        <View style={styles.svg}>
          <GridLayoutIcon
            width={moderateScale(18)}
            height={moderateScale(18)}
            color={
              toggleLeftState
                ? cssVariables.colors.semiGrey
                : cssVariables.colors.primary
            }
          />
        </View>
      </View>
    </BoxShadow>
    // <View style={[styles.container, { zIndex: 100 }]}>
    //   <View style={styles.svg}>
    //     <LogoSvg
    //       color={color}
    //       width={moderateScale(28)}
    //       height={moderateScale(28)}
    //       color={
    //         toggleLeftState
    //           ? cssVariables.colors.primary
    //           : cssVariables.colors.semiGrey
    //       }
    //     />
    //   </View>
    //   {handleDisplayingToggle()}
    //   <View style={styles.svg}>
    //     <GridLayoutIcon
    //       width={moderateScale(22)}
    //       height={moderateScale(22)}
    //       color={
    //         toggleLeftState
    //           ? cssVariables.colors.semiGrey
    //           : cssVariables.colors.primary
    //       }
    //     />
    //   </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: moderateScale(-8),
    height: moderateScale(36),
    width: moderateScale(110),
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  svg: {
    zIndex: 10,
  },
  toggle: {
    zIndex: 2,
    position: "absolute",

    width: moderateScale(60),
    height: moderateScale(36),
    borderRadius: moderateScale(30),
    left: 50,
  },
});
export default AppTabTopggle;
