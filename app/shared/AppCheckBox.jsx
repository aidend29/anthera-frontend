import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { cssVariables, appStyles, moderateScale } from "../../config";

function AppCheckBox({
  text,
  style,
  color = cssVariables.colors.primary,
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
        <Feather
          name="circle"
          size={moderateScale(24)}
          color={cssVariables.colors.grey}
        />
      )}
      {selected && (
        <Feather
          name="check-circle"
          size={moderateScale(24)}
          color={cssVariables.colors.primary}
        />
      )}
      <Text style={[appStyles.text, styles.text]}>{text}</Text>
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
    fontFamily: cssVariables.fontFamily.light,
  },
});
export default AppCheckBox;
