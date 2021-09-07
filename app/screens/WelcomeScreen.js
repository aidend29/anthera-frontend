import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { Text, View } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
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

function WelcomeScreen({ navigation }) {
  // useEffect(() => {
  //   StatusBar.setHidden(false);
  //   const socket = io("http://104.248.154.62:3000");

  //   socket.on("connect", function () {});
  //   socket.on("event", function (data) {});
  //   socket.on("disconnect", function () {});
  // }, []);

  useEffect(() => {

    // console.log(cssVariables.screen.height);

    //nexus s:  w 320 h 533
    //nexus 5: w 392 h 718
    //tablet: w 800 h 1232
    
  }, []);

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
            styles.antherHeading
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

EStyleSheet.build({
  $textColor: '#0275d8',
  $containerWdith:cssVariables.screen.width
});


const styles = EStyleSheet.create({
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
    marginBottom: moderateScale(36)
  },
  secondaryWelcomeTextWrap: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(100),
  },
  BackgroundDec01Svg: {
    width: moderateScale(340),
    height: moderateScale(340)
  },
  antherHeading:{
    color: cssVariables.colors.primary,
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: '2.4rem',
  },
  text: {},
  '@media (min-width: 320) and (max-width: 365)': { // sm screen
    decorationSvg: {
      right: moderateScale(210),
      bottom: moderateScale(95),
    },
    secondaryWelcomeTextWrap:{
    paddingVertical: verticalScale(50),
    },
    antherHeading:{
      fontSize: '1.8rem',
    }
  },
  '@media (min-width: 365) and (max-width: 600)': { // medium screen
    decorationSvg: {
      right: moderateScale(208),
      bottom: moderateScale(60),
    },

  },
  '@media (min-width: 600) and (max-width: 2000)': { // large screen
    decorationSvg: {
      right: moderateScale(280),
      bottom: moderateScale(75),
    },
    secondaryWelcomeTextWrap:{
    paddingVertical: verticalScale(100),
    },
    antherHeading:{
      fontSize: '4.6rem',
    }
  },
});
export default WelcomeScreen;
