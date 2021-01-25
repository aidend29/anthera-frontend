import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  appStyles,
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../config";
function AppFacebookButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        name="facebook"
        color={cssVariables.colors.white}
        size={moderateScale(22)}
        style={styles.icon}
      />
      <Text style={[appStyles.btnText, styles.btnTitile]}>
        Continue with facebook
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: moderateScale(5),
    backgroundColor: "#4267B2",
    width: "100%",
    marginVertical: verticalScale(10),
  },
  btnWrapper: {
    backgroundColor: "#4267B2",
    borderRadius: 0,
  },
  btnTitile: {
    color: cssVariables.colors.white,
    paddingHorizontal: moderateScale(52),
    paddingVertical: moderateScale(14),
  },
  icon: {
    marginHorizontal: moderateScale(10),
  },
});
export default AppFacebookButton;
