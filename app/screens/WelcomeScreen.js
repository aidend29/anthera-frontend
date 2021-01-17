import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import io from "socket.io-client";

// LOCAL IMPORTS
import { cssVariables, appStyles, moderateScale } from "../../config";
import BackgroundDec01Svg from "../assets/svg/BackgroundDec01Svg";
import Logo from "../assets/svg/LogoSvg";
import AppButton from "../shared/AppButton";
import AppScreen from "../shared/AppScreen";

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    StatusBar.setHidden(false);
    const socket = io("http://104.248.154.62:3000");

    socket.on("connect", function () {});
    socket.on("event", function (data) {});
    socket.on("disconnect", function () {});
  }, []);

  return (
    <AppScreen>
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
          <Logo width={moderateScale(70)} />
        </View>
        <View style={styles.midWrap}>
          <Text style={[appStyles.lgHeading, styles.logoTitle]}>Anther</Text>
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
                appStyles.smHeading,
                { fontFamily: cssVariables.fontFamily.light },
                {
                  color: cssVariables.colors.primary,
                },
              ]}
            >
              Hello{" "}
              <Text
                style={{
                  color: cssVariables.colors.darkGrey,
                }}
              >
                there!
              </Text>
            </Text>
            <Text
              style={[
                appStyles.smHeading,
                { fontFamily: cssVariables.fontFamily.light },
              ]}
            >
              Lets get you sorted.
            </Text>
            {/* END:: WELCOME TEXT */}

            <View style={styles.btnWrap}>
              {/* START:: GET STARTED BUTTON */}
              {/* <AppButton
              backgroundCol="secondary"
              text="Signin"
              onPress={() => {
                navigation.navigate("signin");
              }}
              style={styles.btnSignin}
            /> */}
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
    </AppScreen>
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
    flex: moderateScale(1.5),
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: moderateScale(36),
    right: moderateScale(230),
    bottom: moderateScale(80),
  },
  midWrap: {
    flex: moderateScale(0.6),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTitle: {
    letterSpacing: moderateScale(20),
    bottom: moderateScale(20),
  },
  botWrap: {
    flex: moderateScale(1.8),
  },
  botTextWrap: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: moderateScale(35),
    marginRight: moderateScale(50),
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: moderateScale(20),
  },
  btnSignin: {
    marginHorizontal: moderateScale(10),
  },
  btnGetStarted: {},
});
export default WelcomeScreen;
