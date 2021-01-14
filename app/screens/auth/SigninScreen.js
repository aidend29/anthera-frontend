import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import styles from "./css/shared";
import AppScreen from "../../shared/AppScreen";
import { AppForm, AppFormField, AppFormButton } from "../../shared/form";
import AppButton from "../../shared/AppButton";
import AppCheckBox from "../../shared/AppCheckBox";

import { signin, ping } from "../../api/auth/appAuthService";

import AppError from "../../shared/AppError";
import AuthContext from "../../auth/context";
import { appStyles } from "../../../config";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Sorry, email is not valid.")
    .required("Sorry, email cannot be empty."),
  password: Yup.string()
    .min(4, "Sorry, password must be 4 or more characters long.")
    .required("Sorry, password cannot be empty."),
});

function SigninScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const [signinError, setSigninError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSignin = async (signinInfo) => {
    setLoading(true);
    const response = await signin(signinInfo);
    setLoading(false);
    console.log(response.data);

    if (!response.ok) {
      setSigninError("Sorry, email or password is incorrect.");
    } else {
      const user = jwtDecode(response.data["token"]);
      authContext.setUser(user);
    }
  };

  return (
    <AppScreen>
      <View style={styles.container}>
        {/* <AppActivityIndicator visible={true} /> */}
        <Text style={[appStyles.smHeading, styles.titleText]}>
          Signin to Anther
        </Text>

        <AppError visible={signinError} error={signinError} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(signinInfo) => {
            handleSignin(signinInfo);
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
                navigation.navigate("signup");
              }}
              text="Signup"
              style={[styles.btn]}
            />
            <AppFormButton
              text="Signin"
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

export default SigninScreen;
