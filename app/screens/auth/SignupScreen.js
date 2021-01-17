import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useContext } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import AppActivityIndicator from "../../shared/AppActivityIndicator";

import styles from "./css/shared";
import { handleSignup } from "../../api/auth/appAuthService";
import AppScreen from "../../shared/AppScreen";
import { AppForm, AppFormField, AppFormButton } from "../../shared/form";
import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";
import { AuthContext } from "../../context";
import AppError from "../../shared/AppError";
import { appStyles } from "../../../config";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("sorry, email is not valid.")
    .required("sorry, email cannot be empty."),
  password: Yup.string().required("sorry, password is required."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "sorry, passwords must match.")
    .required("sorry, password confirmation is required."),
});
function SignupScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [signupError, setSignupError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <AppScreen>
      <View style={styles.container}>
        {/* <AppActivityIndicator visible={true} /> */}
        <Text style={[appStyles.smHeading, styles.titleText]}>
          Join Anther in one step
        </Text>

        <AppError error={signupError} visible={signupError} />
        <AppForm
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          onSubmit={(signupInfo) => {
            console.log(signupInfo);
            handleSignup(signupInfo, authContext, setLoading, setSignupError);
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
            onChange={(value) => {
              console.log(value);
            }}
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
      </View>
    </AppScreen>
  );
}

export default SignupScreen;
