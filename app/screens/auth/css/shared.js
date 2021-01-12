import { StyleSheet, Platform } from "react-native";
import { styleVariables, moderateScale } from "../../../../config";

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
    fontFamily: styleVariables().fontFamily.OpenSansBold,
    fontSize: styleVariables().fontSize.secondaryHeading,
    color: styleVariables().colors.midGrey,
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
    backgroundColor: styleVariables().colors.primary,
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
    color: styleVariables().colors.darkGrey,
    fontSize: styleVariables().fontSize.text,
    fontFamily: styleVariables().fontFamily.OpenSansSemiBold,
  },
  forgotText: {
    fontFamily: styleVariables().fontFamily.OpenSansSemiBold,
    fontSize: styleVariables().fontSize.text,
    color: styleVariables().colors.darkGrey,
  },
});
