import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  moderateScale,
  verticalScale,
  appStyles,
  cssVariables,
  googleMatCols,
} from "../../config";
function AppTag({ name, style, closeIcon = null, onPress }) {
  return (
    <TouchableOpacity
      onPress={(evt) => {
        onPress(evt);
      }}
      style={[
        styles.tagWrap,
        {
          backgroundColor:
            googleMatCols[Math.floor(Math.random() * googleMatCols.length)],
        },
        ,
        style,
      ]}
    >
      <Text style={[appStyles.text, styles.tagText]}>#{name}</Text>
      {closeIcon && (
        <Ionicons
          name="md-close-circle"
          size={24}
          color={cssVariables.colors.lightGrey}
          style={{ marginRight: moderateScale(8) }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tagText: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingVertical: verticalScale(8),
    color: "white",
  },
  tagWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default AppTag;
