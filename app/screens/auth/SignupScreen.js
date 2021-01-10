import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useContext } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import AppActivityIndicator from "../../shared/AppActivityIndicator";

import styles from "./css/shared";
import { signup, signin } from "../../api/auth/appAuthService";
import AppScreen from "../../shared/AppScreen";
import { AppForm, AppFormField, AppFormButton } from "../../shared/form";
import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";
import AuthContext from "../../auth/context";
import AppError from "../../shared/AppError";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Sorry, email is not valid.")
    .required("Sorry, email cannot be empty."),
  password: Yup.string().required("Sorry, password is required."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Sorry, passwords must match.")
    .required("Sorry, password confirmation is required."),
});
function SignupScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [signupError, setSignupError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (signupInfo) => {
    setLoading(true);
    const signupResponse = await signup(signupInfo);
    // console.log(signupResponse);
    setLoading(false);

    if (!signupResponse.ok) {
      setSignupError(signupResponse.data["error"]);
    } else {
      //Signin them in.
      setLoading(true);
      const signinResponse = await signin(signupInfo);
      // console.log(signinResponse);
      setLoading(false);

      if (!signinResponse.ok) {
        setSignupError("Sorry, something went wrong signin you in.");
      } else {
        const user = jwtDecode(signinResponse.data["token"]);
        authContext.setUser(user);
      }
    }
  };
  return (
    <AppScreen style={styles.container}>
      {/* <AppActivityIndicator visible={true} /> */}
      <Text style={styles.titleText}>Join Anther in one step</Text>

      <AppError error={signupError} visible={signupError} />
      <AppForm
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        onSubmit={(signupInfo) => {
          console.log(signupInfo);
          handleSignup(signupInfo);
        }}
        validationSchema={validationSchema}
      >
        {/* //START:: EMAIL INPUT FIELD */}
        <AppFormField
          style={styles.inputField}
          autoCapitalize="none"
          placeholder="email, i.e janedoe@gmail.com"
          name="email"
        />
        {/* //END:: EMAIL INPUT FIELD */}

        {/* //START:: PASSWORD FIELD */}
        <AppFormField
          style={styles.inputField}
          icon="lock"
          secText={true}
          autoCapitalize="none"
          placeholder="password"
          name="password"
        />
        {/* //END:: PASSWORD FIELD */}

        {/* //START:: CONFIRM PASSWORD FIELD */}
        <AppFormField
          style={styles.inputField}
          icon="lock"
          secText={true}
          autoCapitalize="none"
          placeholder="confirm password"
          name="passwordConfirmation"
        />
        {/* //END:: CONFIRM PASSWORD FIELD */}

        <AppCheckBox
          style={styles.remeberText}
          text="Agree to terms and conditions"
        />

        {/* //START:: SIGNIN/UP BUTTON GROUP */}
        <View style={styles.btnGrp}>
          <AppButton
            onPress={() => {
              navigation.navigate("signin");
            }}
            text="Signin"
            style={[styles.btn]}
          />
          <AppFormButton
            text="Signup"
            isLoading={loading}
            style={[styles.btn, styles.btnPrimary]}
          />
        </View>
        {/* //END:: SIGNIN/UP BUTTON GROUP */}

        {/* //START:: EXTERNAL SIGNIN BUTTON GROUP */}
        <AppButton
          hasFrontIcon={true}
          frontIconName="facebook"
          frontIconsize={30}
          style={styles.btnFacebook}
          text="Continue with facebook"
        />
        {/* //END:: EXTERNAL SIGNIN BUTTON GROUP */}
      </AppForm>
    </AppScreen>
  );
}

export default SignupScreen;
