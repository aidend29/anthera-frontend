import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import config from "../../config/configStyle";

function AppCheckBox({
  text,
  style,
  color = config().colors.primary,
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
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={20}
          color={config().colors.midGrey}
        />
      )}
      {selected && (
        <MaterialCommunityIcons
          name="checkbox-blank-circle"
          size={20}
          color={color}
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
    marginLeft: 10,
    fontFamily: config().fontFamily.openSansRegular,
    fontSize: config().fontSize.text,
    color: config().colors.darkGrey,
  },
});
export default AppCheckBox;
