import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { styleVariables, moderateScale } from "../../config";

function AppCheckBox({
  text,
  style,
  color = styleVariables().colors.primary,
  isChecked,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => {
        setSelected(!selected);
      }}
    >
      {!selected && (
        <Ionicons
          name="checkmark-circle-outline"
          size={moderateScale(24)}
          color={styleVariables().colors.grey}
        />
      )}
      {selected && (
        <Ionicons
          name="checkmark-circle"
          size={moderateScale(24)}
          color={styleVariables().colors.primary}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: moderateScale(10),
    fontFamily: styleVariables().fontFamily.openSansRegular,
    fontSize: styleVariables().fontSize.text,
    color: styleVariables().colors.darkGrey,
  },
});
export default AppCheckBox;
