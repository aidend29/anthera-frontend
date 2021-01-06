import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./css/shared";

import AppInputField from "../../shared/AppInputField";
import AppScreen from "../../shared/AppScreen";

import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";

function SigninScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <Text style={styles.signinText}>Sign in to Anther</Text>
      <AppInputField
        style={styles.email}
        placeholder="email, i.e janedoe@gmail.com"
      />
      <AppInputField style={styles.email} icon="lock" placeholder="password" />
      <AppCheckBox style={styles.remeberText} text="Remember login" />
      <View style={styles.btnGrp}>
        <AppButton
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
          text="Signup"
          style={[styles.btn]}
        />
        <AppButton
          onPress={() => {
            navigation.navigate("SigninScreen");
          }}
          text="Signin"
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
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
    </AppScreen>
  );
}

export default SigninScreen;
