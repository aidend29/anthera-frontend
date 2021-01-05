import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createAnimatableComponent } from "react-native-animatable";
import * as Animatable from "react-native-animatable";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import cssVariables from "../assets/css/variables.js";
const { height, width } = Dimensions.get("screen");

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* //START:: LOGO */}
        <Animatable.Text
          animation="bounceIn"
          source={require("../assets/logo.png")}
          style={styles.anther}
        >
          Anther
        </Animatable.Text>
      </View>
      {/* //END:: LOGO */}

      {/* //START:: FOOTER */}
      <Animatable.View animation="fadeInUpBig" delay={1000}>
        <LinearGradient
          colors={[config.colors.g2, config.colors.g1]}
          style={styles.footer}
        >
          <View>
            {/* //START:: FOOTER-HEADER */}
            <Animatable.Text
              animation="fadeIn"
              delay={2000}
              style={styles.title}
            >
              Hello there! Let's get you sorted.
            </Animatable.Text>
            {/* //END:: FOOTER-HEADER */}

            {/* //START:: FOOTER-GET STARTED BUTTON */}
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SigninScreen")}
              >
                <View>
                  <LinearGradient
                    // Background Linear Gradient
                    colors={[config.colors.secondary, config.colors.secondary]}
                    style={styles.signIn}
                  >
                    <Text style={styles.textSign}>Get started</Text>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color={config.colors.primary}
                    />
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>
            {/* //END:: FOOTER-GET STARTED BUTTON*/}
          </View>
        </LinearGradient>
      </Animatable.View>
      {/* //END:: FOOTER */}
    </View>
  );
}

const height_logo = height * 0.28;
const textSpace = width * 0.07;

const config = cssVariables();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "115%",
    borderTopLeftRadius: 260,
    borderTopRightRadius: 60,
    paddingVertical: 60,
    right: 10,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  anther: {
    letterSpacing: 10,
    fontSize: RFValue(config.fontSize.heading_one, height),
    fontFamily: config.fontFamily.openSansRegular,
  },
  title: {
    color: config.colors.titleColor,
    fontSize: RFValue(config.fontSize.heading_three, height),
    fontFamily: config.fontFamily.openSansRegular,
    marginTop: 50,
    letterSpacing: 1.2,
    textAlign: "right",
    marginRight: 50,
  },
  button: {
    alignItems: "flex-end",
    right: 40,
    marginTop: 30,
  },
  signIn: {
    width: 159,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    flex: 0.7,
    color: config.colors.primary,
    fontFamily: config.fontFamily.openSansRegular,
    fontSize: RFValue(config.fontSize.text, height),
    textAlign: "right",
  },
});
export default WelcomeScreen;
