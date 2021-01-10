import React from "react";
import * as Animatable from "react-native-animatable";
import { Text, StyleSheet, View, Dimensions, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// LOCAL IMPORTS
import config from "../../config/configStyle";
import BackgroundDec01Svg from "../assets/svg/BackgroundDec01Svg";
import Logo from "../assets/svg/LogoSvg";
import AppButton from "../shared/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* START:: TOP DECORATION */}
      <Animatable.View
        animation="fadeInDownBig"
        duration={1000}
        style={styles.topWrap}
      >
        <BackgroundDec01Svg style={styles.test} />
      </Animatable.View>
      {/* END:: TOP DECORATION */}

      {/* START:: LOGO & TITLE */}
      <View style={styles.midWrap}>
        <Logo width={RFValue(70, config().dimensions.height)} />
      </View>
      <View style={styles.midWrap}>
        <Text style={styles.logoTitle}>Anther</Text>
      </View>
      {/* END:: LOGO & TITLE */}

      {/* START:: WELCOME TEXT & BUTTON */}
      <View style={styles.botWrap}>
        <Animatable.View
          animation="fadeInUpBig"
          duration={1000}
          style={styles.botTextWrap}
        >
          {/* START:: WELCOME TEXT */}
          <Text
            style={[
              styles.welcomeText,
              {
                color: config().colors.primary,
              },
            ]}
          >
            Hello{" "}
            <Text
              style={{
                color: config().colors.grey,
              }}
            >
              there!
            </Text>
          </Text>
          <Text style={styles.welcomeText}>Lets get you sorted.</Text>
          {/* END:: WELCOME TEXT */}

          <View style={styles.btnWrap}>
            {/* START:: GET STARTED BUTTON */}
            <AppButton
              backgroundCol="secondary"
              text="Signin"
              onPress={() => {
                navigation.navigate("signin");
              }}
              style={styles.btnSignin}
            />
            {/* END:: GET STARTED BUTTON */}

            {/* START:: GET STARTED BUTTON */}
            <AppButton
              backgroundCol="primary"
              text="Get Started"
              onPress={() => {
                navigation.navigate("signup");
              }}
              style={styles.btnGetStarted}
            />
            {/* END:: GET STARTED BUTTON */}
          </View>
        </Animatable.View>
      </View>
      {/* END:: WELCOME TEXT & BUTTON */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  topWrap: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 36,
  },
  midWrap: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTitle: {
    letterSpacing: 20,
    fontSize: config().fontSize.logoHeading,
    color: config().colors.midGrey,
    bottom: 35,
    fontFamily: config().fontFamily.openSansRegular,
  },
  botWrap: {
    flex: 1.8,
  },
  botTextWrap: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 35,
    marginRight: 50,
  },
  welcomeText: {
    fontSize: config().fontSize.secondaryHeading,
    color: config().colors.grey,
    fontFamily: config().fontFamily.openSansRegular,
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
  btnSignin: {
    marginHorizontal: 10,
  },
  btnGetStarted: {},
});
export default WelcomeScreen;
