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
const { height, width } = Dimensions.get("screen");

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text
          animation="bounceIn"
          // source={require("../assets/logo.png")}

          style={styles.anther}
        >
          Anther
        </Animatable.Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.test}>
          <Text style={styles.title}>Let's get you sorted!</Text>
          <Text style={styles.text}>Signin to continue</Text>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => console.log(">>>>", width)}>
              <Animatable.View
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={[config.colors.secondary, config.colors.secondary]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Signup</Text>
                  <MaterialIcons
                    name="navigate-next"
                    size={24}
                    color={config.colors.primary}
                  />
                </LinearGradient>
              </Animatable.View>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const height_logo = height * 0.28;
const textSpace = width * 0.07;

const config = {
  colors: {
    primary: "#FFC107", //500
    secondary: "#fff",
    darkPrimary: "#754C00",

    titleColor: "#fff",

    white: "#fff",
    black: "#000",
  },
  fontSize: {
    small: width / 51.8,
    medium: 2 * (width / 51.8),
    large: 2 * (2 * (width / 51.8)),
    xLarge: 2 * (2 * (2 * (width / 51.8))),
  },
};

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
    backgroundColor: config.colors.primary,
    borderTopLeftRadius: 260,
    borderTopRightRadius: 0,
    paddingVertical: 60,
    right: 10,
    paddingHorizontal: 30,
  },
  test: {
    alignSelf: "flex-end",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  anther: {
    letterSpacing: 10,
    fontSize: config.fontSize.xLarge,
  },
  title: {
    color: config.colors.titleColor,
    fontSize: config.fontSize.large,
    marginTop: 50,
    letterSpacing: 1.8,
    textAlign: "right",
    marginRight: 50,
  },
  text: {
    fontSize: config.fontSize.medium,
    fontWeight: "bold",
    color: config.colors.darkPrimary,
    marginTop: 5,
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
    flex: 0.5,
    color: config.colors.primary,
    fontWeight: "bold",
    fontSize: config.fontSize.medium,
    textAlign: "right",
  },
});
export default WelcomeScreen;
