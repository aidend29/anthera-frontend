import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import AppActivityIndicator from "../../shared/AppActivityIndicator";

import styles from "./css/shared";
import signinApi from "../../api/auth/SigninService";
import AppScreen from "../../shared/AppScreen";
import { AppForm, AppFormField, AppFormButton } from "../../shared/form";
import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});
function SigninScreen({ navigation }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   signin();
  // }, []);

  // const signin = async () => {
  //   setLoading(true);
  //   const response = await signinApi.signin();
  //   setLoading(true);

  //   if (!response.ok) setError(true);
  //   console.log(response.data);
  // };

  return (
    <AppScreen style={styles.container}>
      {/* <AppActivityIndicator visible={true} /> */}
      <Text style={styles.signinText}>Signin to Anther</Text>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
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

        <AppCheckBox style={styles.remeberText} text="Remember login" />

        {/* //START:: SIGNIN/UP BUTTON GROUP */}
        <View style={styles.btnGrp}>
          <AppButton
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
            text="Signup"
            style={[styles.btn]}
          />
          <AppFormButton
            text="Signin"
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

export default SigninScreen;
