import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const styleVariables = () => {
  return {
    colors: {
      primary: "#25ABF7", //500
      secondary: "#FFC1F5",
      darkPrimary: "#754C00",

      titleColor: "#fff",

      white: "#fff",
      black: "#000",

      grey: "#a6a6a6",
      midGrey: "#747474",
      lightGrey: "#F3F3F3",
      darkGrey: "#333333",

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
      openSansLight: "OpenSans_300Light",
      openSansRegular: "OpenSans_400Regular",
      OpenSansSemiBold: "OpenSans_600SemiBold",
      OpenSansBold: "OpenSans_700Bold",
    },
  };
};

export { styleVariables, moderateScale };
