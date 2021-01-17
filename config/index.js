import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const cssVariables = {
  colors: {
    primary: "#25ABF7", //500
    secondary: "#fcb6f6",

    darkPrimary: "#754C00",

    titleColor: "#fff",

    white: "#fff",
    black: "#000",

    grey: "#a6a6a6",
    midGrey: "#747474",
    lightGrey: "#F3F3F3",
    lightGrey: "#F3F3F3",
    darkGrey: "#333333",

    semiGrey: "#cccccc",

    error: "#ff0000",
  },
  fontSize: {
    logoHeading: moderateScale(36),
    secondaryHeading: moderateScale(24),
    text: moderateScale(14),
  },
  letterSpacing: {
    x1: moderateScale(100),
    x2: moderateScale(50),
    x3: moderateScale(10),
  },

  fontFamily: {
    light: "Lato-Light",
    regular: "Lato-Regular",
    medium: "Lato-Medium",
    heavy: "Lato-Heavy",
  },

  fontSize: {
    text: moderateScale(16),
    smHeading: moderateScale(24),
    heading: moderateScale(32),
    lgHeading: moderateScale(42),
  },
};

const appStyles = {
  text: {
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: cssVariables.fontSize.text,
    color: cssVariables.colors.darkGrey,
  },
  btnText: {
    fontFamily: cssVariables.fontFamily.heavy,
    fontSize: cssVariables.fontSize.text,
    color: cssVariables.colors.darkGrey,
  },
  smHeading: {
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: cssVariables.fontSize.smHeading,
    color: cssVariables.colors.darkGrey,
  },
  heading: {
    fontFamily: cssVariables.fontFamily.light,
    fontSize: cssVariables.fontSize.heading,
    color: cssVariables.colors.darkGrey,
  },
  lgHeading: {
    fontFamily: cssVariables.fontFamily.light,
    fontSize: cssVariables.fontSize.lgHeading,
    color: cssVariables.colors.darkGrey,
  },
};

export { cssVariables, appStyles, moderateScale, scale, verticalScale };
