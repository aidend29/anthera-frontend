import React, { useState, useContext, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
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
import { signinAPI } from "../../api/auth";

function SigninScreen({ navigation }) {
  const [signinError, setSigninError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const authContext = useContext(AuthContext);

  return (
    <AppScreen style={{}}>
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
          placeholder="email"
          onClear={() => {}}
          onChangeText={(text) => {
            setEmail(text);
            // console.log(form.current.email);
          }}
        />
        <AppInputField
          icon="lock"
          secureTextEntry={true}
          placeholder="password"
          onClear={() => {}}
          onChangeText={(text) => {
            setPassword(text);
            // console.log(form.current.password);
          }}
        />
        <AppCheckBox
          text="Remember me"
          style={styles.checkbox}
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
              signinAPI(
                { email, password },
                authContext,
                setLoading,
                setSigninError
              );
            }}
          />
        </View>
        <AppFacebookButton />
      </View>
    </AppScreen>
  );
}
const styles = EStyleSheet.create({
  container: {
    width: moderateScale(100),
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
  checkbox: {
    width: "100%",
    marginLeft: moderateScale(110),
    marginVertical: verticalScale(10),
    alignSelf: "flex-end",
  },
});
export default SigninScreen;
