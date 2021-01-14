import { StyleSheet, Platform } from "react-native";
import { cssVariables, moderateScale } from "../../../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },
  inputField: {
    marginBottom: 10,
  },
  titleText: {
    marginBottom: 45,
  },
  btnGrp: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 0.48,
  },
  btnPrimary: {
    backgroundColor: cssVariables.colors.primary,
  },
  btnFacebook: {
    backgroundColor: "#4267B2",
    borderRadius: 8,
    padding: 6,
    width: "100%",
    marginVertical: 25,
  },
  remeberText: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 30,
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
