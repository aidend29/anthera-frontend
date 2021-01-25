import React from "react";
import { StyleSheet, View } from "react-native";

import {
  appStyles,
  verticalScale,
  moderateScale,
  cssVariables,
} from "../../config";
import AppScreen from "../shared/AppScreen";
import { ProgressDots } from "../screens/anther/details/shared";
import AppTextColorCoded from "../shared/AppTextColorCoded";
import AppBottonScreenNav from "./AppBottonScreenNav";

function AppDetail({
  progressNum = 1,
  headerTextFront,
  headerTextColored,
  headerTextRest,
  Svgname = false,
  svgWidth = 200,
  svgHeight = 200,
  BottomSvgname = false,
  children,
  botNavIsPrevious = true,
  botNavIsNext = true,
  botNavOnPressLeft,
  botNavOnPressRight,
  displayButtonDone = false,
}) {
  return (
    <AppScreen>
      <ProgressDots num={progressNum} style={styles.dots} />
      <AppTextColorCoded
        front={headerTextFront}
        colored={headerTextColored}
        rest={headerTextRest}
        styles={[appStyles.smHeading, styles.title]}
        animation="pulse"
        duration={1000}
      />
      {Svgname && (
        <View style={styles.svgWrap}>
          <Svgname
            height={verticalScale(svgHeight)}
            width={moderateScale(svgWidth)}
          />
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.contentCenter}>{children}</View>
      </View>
      {BottomSvgname && (
        <View style={styles.svgWrap}>
          <BottomSvgname
            height={verticalScale(svgHeight)}
            width={moderateScale(svgWidth)}
          />
        </View>
      )}
      <AppBottonScreenNav
        isPrevious={botNavIsPrevious}
        isNext={botNavIsNext}
        onPressLeft={botNavOnPressLeft}
        onPressRight={botNavOnPressRight}
        displayButtonDone={displayButtonDone}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(13.1),
  },
  dots: {},
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
  },
  contentContainer: {
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
export default AppDetail;
