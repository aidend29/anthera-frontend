import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppInputField from "../shared/AppInputField";
import AppScreen from "../shared/AppScreen";

import config from "../../config/configStyle";
import AppButton from "../shared/AppButton";
import AppCheckBox from "../shared/AppCheckBox";

function SigninScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <Text style={styles.signinText}>Join Anther in one step</Text>
      <AppInputField
        style={styles.inputField}
        placeholder="email, i.e janedoe@gmail.com"
      />
      <AppInputField
        style={styles.inputField}
        icon="lock"
        secText={true}
        placeholder="password"
      />
      <AppInputField
        style={styles.inputField}
        icon="lock"
        secText={true}
        placeholder="confirm password"
      />

      <AppCheckBox
        style={styles.remeberText}
        text="Agree to terms & conditions"
      />
      <View style={styles.btnGrp}>
        <AppButton
          onPress={() => {
            navigation.navigate("SigninScreen");
          }}
          text="Signin"
          style={[styles.btn]}
        />
        <AppButton
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
          text="Signup"
          style={[styles.btn, styles.btnPrimary]}
        />
      </View>
      <AppButton
        hasFrontIcon={true}
        frontIconName="facebook"
        frontIconsize={30}
        style={styles.btnFacebook}
        text="Continue with facebook"
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },
  inputField: {
    marginBottom: 18,
  },
  signinText: {
    fontFamily: config().fontFamily.OpenSansSemiBold,
    fontSize: config().fontSize.secondaryHeading,
    color: config().colors.midGrey,
    marginBottom: 45,
  },
  btnGrp: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 0.48,
  },
  btnPrimary: {
    backgroundColor: config().colors.primary,
  },
  btnFacebook: {
    backgroundColor: "#4267B2",
    borderRadius: 8,
    padding: 6,
    width: "100%",
    marginVertical: 25,
  },
  remeberText: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 30,
    color: config().colors.darkGrey,
    fontSize: config().fontSize.text,
    fontFamily: config().fontFamily.openSansRegular,
  },
  forgotText: {
    fontFamily: config().fontFamily.openSansRegular,
    fontSize: config().fontSize.text,
    color: config().colors.darkGrey,
  },
});

export default SigninScreen;
