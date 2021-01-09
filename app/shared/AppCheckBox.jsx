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
        <Ionicons
          name="checkmark-circle-outline"
          size={24}
          color={config().colors.grey}
        />
      )}
      {selected && (
        <Ionicons
          name="checkmark-circle"
          size={24}
          color={config().colors.primary}
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
