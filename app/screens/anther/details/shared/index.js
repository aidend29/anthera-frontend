import React from "react";
import { View } from "react-native";
import {
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../../../../config";
import Progressbar from "../../../../shared/AppProgressbar";
import * as Animatable from "react-native-animatable";

function updateProgress(detailsContext, num) {
  const tmp = { ...detailsContext.details };
  tmp.progress.current += num;
  detailsContext.setDetails(tmp);
}

function DetailsProgressbar(detailsContext) {
  return (
    <Progressbar
      borderColor={cssVariables.colors.white}
      color={cssVariables.colors.primary}
      width={moderateScale(200)}
      height={moderateScale(4)}
      progress={
        detailsContext.details.progress.current /
        detailsContext.details.progress.max
      }
      style={{ marginTop: moderateScale(55) }}
    />
  );
}

function ProgressDots({ num, max = 13 }) {
  const elems = [];
  for (let i = 0; i < max; i++) {
    const Component = i === num - 1 ? Animatable.View : View;
    elems.push(
      <Component
        animation="fadeIn"
        duration={2000}
        key={i}
        style={{
          width: moderateScale(6),
          height: moderateScale(6),
          marginHorizontal: moderateScale(5),
          borderRadius: 30,
          backgroundColor:
            i < num
              ? cssVariables.colors.primary
              : cssVariables.colors.lightGrey,
        }}
      ></Component>
    );
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: verticalScale(30),
        alignSelf: "flex-start",
        marginHorizontal: moderateScale(100),
      }}
    >
      {elems}
    </View>
  );
}

export { updateProgress, DetailsProgressbar, ProgressDots };
