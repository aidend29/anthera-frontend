import { StyleSheet, Platform } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { cssVariables, moderateScale, verticalScale } from "../../../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: moderateScale(22),
  },
  inputField: {
    marginBottom: verticalScale(10),
  },
  titleText: {
    marginBottom: verticalScale(30),
  },
  btnGrp: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 0.48,
    marginHorizontal: moderateScale(6),
  },
  btnPrimary: {
    backgroundColor: cssVariables.colors.primary,
  },
  btnFacebook: {
    backgroundColor: "#4267B2",
    borderRadius: 8,
    padding: 6,
    marginVertical: 25,
    width: moderateVerticalScale(320),
  },
  remeberText: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: moderateScale(20),

    color: cssVariables.colors.darkGrey,
    fontSize: cssVariables.fontSize.text,
    fontFamily: cssVariables.fontFamily.OpenSansSemiBold,
  },
  forgotText: {
    fontFamily: cssVariables.fontFamily.OpenSansSemiBold,
    fontSize: cssVariables.fontSize.text,
    color: cssVariables.colors.darkGrey,
  },
});
