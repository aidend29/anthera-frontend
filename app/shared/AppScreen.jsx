import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import config, { moderateScale, verticalScale } from "../../config";
import { cssVariables } from "../../config";

function AppScreen({ children, style }) {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } else {
    return (
      <>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          translucent={true}
        />
        <View style={[styles.safeArea, styles.android]}>
          <View style={styles.container}>{children}</View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  android: {
    paddingTop: StatusBar.currentHeight + verticalScale(10),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: cssVariables.screenMaxWidth,
  },
});

export default AppScreen;
