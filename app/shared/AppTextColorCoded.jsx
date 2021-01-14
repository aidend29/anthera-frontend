import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import { cssVariables, moderateScale, appStyles } from "../../config";

function AppTextColorCoded(
  { front, colored, color, rest, styles, ...animationProp },
  ...props
) {
  return (
    <Animatable.Text {...animationProp} style={[appStyles.text, styles]}>
      {front}
      <Text
        {...props}
        style={[
          {
            color: cssVariables.colors.primary,
            fontFamily: cssVariables.fontFamily.openSansRegular,
          },
        ]}
      >
        {colored}{" "}
        <Text
          style={{
            color: cssVariables.colors.darkGrey,
            fontFamily: cssVariables.fontFamily.openSansRegular,
          }}
        >
          {rest}
        </Text>
      </Text>
    </Animatable.Text>
  );
}

export default AppTextColorCoded;
