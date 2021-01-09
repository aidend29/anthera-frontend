import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export default config = () => {
  return {
    dimensions: {
      height: height,
      width: width,
    },
    colors: {
      g1: "#ffc1f5",
      g2: "#25abf7",
      g3: "#25abf7",
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
      logoHeading: RFValue(46, height),
      secondaryHeading: RFValue(28, height),
      button: RFValue(18, height),
      text: RFValue(16, height),
    },
    letterSpacing: {
      x1: 100,
      x2: 50,
      x3: 10,
    },
    fontFamily: {
      openSansLight: "OpenSans_300Light",
      openSansRegular: "OpenSans_400Regular",
      OpenSansSemiBold: "OpenSans_600SemiBold",
      OpenSansBold: "OpenSans_700Bold",
    },
  };
};
