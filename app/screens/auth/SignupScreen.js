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
import { signupAPI } from "../../api/auth";

function SignupScreen({ navigation }) {
  const [signupError, setSignupError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
        styleContainer={styles.inputField}
          icon="email"
          keyboardType="email-address"
          value="elise@gmail.com"
          onClear={() => {}}
          placeholder="email"
          onChangeText={(text) => {
            setEmail(text);
            // console.log(form.current.email);
          }}
        />
        <AppInputField
        styleContainer={styles.inputField}
          icon="lock"
          value="elise123"
          onClear={() => {}}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => {
            setPassword(text);
            // console.log(form.current.password);
          }}
        />
        <AppCheckBox
          text="Agree to terms & conditions"
          style={styles.checkbox}
          onChange={(val) => {
            setTerms(val);
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
              // console.log("EMAIL: ", email);
              // console.log("PASSWORD: ", password);
              // console.log("TERMS: ", terms);
              signupAPI(
                { email, password, terms },
                authContext,
                setLoading,
                setSignupError
              );
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
    width: cssVariables.screenMaxWidth - moderateScale(38),
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
  inputField: {
    maxHeight: verticalScale(50),
  },
  checkbox: {
    width: "100%",
    marginLeft: moderateScale(28),
    marginVertical: verticalScale(10),
    alignSelf: "flex-end",
  },
});
export default SignupScreen;
