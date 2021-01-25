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
import { handleSignin } from "../../api/auth/appAuthService";

function SigninScreen({ navigation }) {
  const [signinError, setSigninError] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef({ email: "", password: "" });

  const authContext = useContext(AuthContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        <Text style={[appStyles.smHeading, styles.headingText]}>
          Sign into Anther
        </Text>
        {!loading && (
          <AppError
            msg={signinError}
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
          text="Remember login"
          style={{ marginVertical: verticalScale(10), alignSelf: "flex-end" }}
          onChange={(val) => {
            console.log(val);
          }}
        />
        <View style={styles.btnRow}>
          <AppButton
            title="Signup"
            onPress={() => {
              navigation.navigate("signup");
            }}
          />
          <AppButton
            title="Signin"
            displayLoading={loading}
            stylePrimary={true}
            onPress={() => {
              // console.log(form);
              handleSignin(form, authContext, setLoading, setSigninError);
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
    width: cssVariables.screenMaxWidth,
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
export default SigninScreen;
