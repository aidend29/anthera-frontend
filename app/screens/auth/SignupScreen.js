import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import styles from "./css/shared";

import AppInputField from "../../shared/AppInputField";
import AppScreen from "../../shared/AppScreen";

import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";

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

export default SigninScreen;
