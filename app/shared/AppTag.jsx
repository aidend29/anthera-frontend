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
function AppTag({
  name,
  style,
  closeIcon = null,
  onPress,
  foregroundColor = "red",
}) {
  return (
    <TouchableOpacity
      onPress={(evt) => {
        onPress(evt);
      }}
      style={[styles.tagWrap, style]}
    >
      <Text
        style={[appStyles.text, styles.tagText, { color: foregroundColor }]}
      >
        {name}
      </Text>
      {closeIcon && (
        <Ionicons
          name="md-close-circle"
          size={24}
          color={foregroundColor}
          style={{ marginRight: moderateScale(8) }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tagText: {
    color: cssVariables.colors.darkGrey,
    paddingLeft: moderateScale(12),
    paddingRight: moderateScale(10),
    paddingVertical: verticalScale(8),
  },
  tagWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    opacity: 0.6,
  },
});

export default AppTag;
