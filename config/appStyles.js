import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import cssVariables from "./cssVariables";

const appStyles = {
  smText: {
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: cssVariables.fontSize.sm,
    color: cssVariables.colors.darkGrey,
  },
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

export default appStyles;
