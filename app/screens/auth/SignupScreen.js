import React, { useState, useContext, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  moderateScale,
  cssVariables,
  appStyles,
  verticalScale,
} from "../../../config";

import AppScreen from "../../shared/AppScreen";
import AppInputField from "../../shared/AppInputField";
import AppButton from "../../shared/AppButton";
import AppFacebookButton from "../../shared/AppFacebookButton";
import AppCheckBox from "../../shared/AppCheckBox";
import AppError from "../../shared/AppError";

import { AuthContext } from "../../context";
import { handleSignup } from "../../api/auth/appAuthService";

function SignupScreen({ navigation }) {
  const [signupError, setSignupError] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef({ email: "", password: "", terms: false });

  const authContext = useContext(AuthContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        <Text style={[appStyles.smHeading, styles.headingText]}>
          Join Anther in one step
        </Text>
        {!loading && (
          <AppError
            msg={signupError}
            style={{ marginVertical: verticalScale(10) }}
          />
        )}
        <AppInputField
          icon="email"
          keyboardType="email-address"
          value="elise@gmail.com"
          placeholder="email"
          onChangeText={(text) => {
            form.current.email = text;
            // console.log(form.current.email);
          }}
        />
        <AppInputField
          icon="lock"
          value="elise123"
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => {
            form.current.password = text;
            // console.log(form.current.password);
          }}
        />
        <AppCheckBox
          text="Agree to terms & conditions"
          style={{ marginVertical: verticalScale(10), alignSelf: "flex-end" }}
          onChange={(val) => {
            form.current.terms = val;
          }}
        />
        <View style={styles.btnRow}>
          <AppButton
            title="Signin"
            onPress={() => {
              navigation.navigate("signin");
            }}
          />
          <AppButton
            title="Signup"
            displayLoading={loading}
            stylePrimary={true}
            onPress={() => {
              // console.log(form);
              handleSignup(form, authContext, setLoading, setSignupError);
            }}
          />
        </View>
        <AppFacebookButton />
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    width: cssVariables.screenMaxWidth - moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headingText: {
    marginVertical: verticalScale(10),
  },
  btnRow: {
    marginVertical: verticalScale(10),
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
export default SignupScreen;
