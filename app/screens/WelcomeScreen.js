import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import io from "socket.io-client";

// LOCAL IMPORTS
import {
  cssVariables,
  appStyles,
  moderateScale,
  verticalScale,
} from "../../config";
import BackgroundDec01Svg from "../assets/svg/BackgroundDec01Svg";
import Logo from "../assets/svg/LogoSvg";
import AppButton from "../shared/AppButton";
import AppScreen from "../shared/AppScreen";
import AppTextColorCoded from "../shared/AppTextColorCoded";

function WelcomeScreen({ navigation }) {
  // useEffect(() => {
  //   StatusBar.setHidden(false);
  //   const socket = io("http://104.248.154.62:3000");

  //   socket.on("connect", function () {});
  //   socket.on("event", function (data) {});
  //   socket.on("disconnect", function () {});
  // }, []);

  return (
    <AppScreen>
      <View style={styles.container}>
        {/* START:: TOP DECORATION */}
        <Animatable.View
          animation="fadeInDownBig"
          duration={1000}
          style={styles.decorationSvg}
        >
          <BackgroundDec01Svg
            width={moderateScale(340)}
            height={moderateScale(340)}
          />
        </Animatable.View>
        <View style={styles.logoSvg}>
          <Logo width={moderateScale(70)} height={moderateScale(70)} />
        </View>
        <Text
          style={[
            appStyles.lgHeading,
            styles.antherHeading,
            {
              color: cssVariables.colors.primary,
              fontFamily: cssVariables.fontFamily.regular,
            },
          ]}
        >
          Anther
        </Text>
        <View style={styles.secondaryWelcomeTextWrap}>
          <Text
            style={[
              appStyles.smHeading,
              { color: cssVariables.colors.primary },
            ]}
          >
            Hello
            <Text
              style={[
                appStyles.smHeading,
                {
                  color: cssVariables.colors.darkGrey,
                  fontFamily: cssVariables.fontFamily.light,
                },
              ]}
            >
              {" "}
              there!
            </Text>
          </Text>
          <Text
            style={[
              appStyles.smHeading,
              { fontFamily: cssVariables.fontFamily.light },
            ]}
          >
            Lets get you sorted
          </Text>
          <AppButton
            backgroundCol="primary"
            title="Get Started"
            styleBackground={{ marginVertical: verticalScale(10) }}
            stylePrimary={true}
            onPress={() => {
              navigation.navigate("signup");
            }}
            style={styles.btnGetStarted}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cssVariables.screen.width,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  decorationSvg: {
    flex: moderateScale(1.5),
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: moderateScale(36),
    right:
      cssVariables.screen.width > 600 ? moderateScale(250) : moderateScale(210),
    bottom:
      cssVariables.screen.width > 600 ? moderateScale(50) : moderateScale(75),
  },
  secondaryWelcomeTextWrap: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(100),
  },
  text: {},
});
export default WelcomeScreen;
