import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";

import config from "../../config/configStyle";

function AppError({ error, visible, style, ...otherProps }) {
  return (
    <>
      {visible && (
        <Animatable.View
          nimation="shake"
          duration={1000}
          style={styles.container}
        >
          <FontAwesome5
            name="exclamation-circle"
            size={22}
            color="#FA4545"
            style={styles.icon}
          />
          <Text a style={[styles.errorMsg, style]}>
            {error}
          </Text>
        </Animatable.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#ffe6e6",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  icon: {
    paddingRight: 10,
  },
  errorMsg: {
    color: "#FA4545",
    fontFamily: config().fontFamily.OpenSansSemiBold,
    fontSize: config().fontSize.text,
  },
});
export default AppError;
