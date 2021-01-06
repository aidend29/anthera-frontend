import { StyleSheet } from "react-native";
import config from "../../../../config/configStyle";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },
  email: {
    marginBottom: 18,
  },
  signinText: {
    fontFamily: config().fontFamily.OpenSansSemiBold,
    fontSize: config().fontSize.secondaryHeading,
    color: config().colors.midGrey,
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
    backgroundColor: config().colors.primary,
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
    color: config().colors.darkGrey,
    fontSize: config().fontSize.text,
    fontFamily: config().fontFamily.openSansRegular,
  },
  forgotText: {
    fontFamily: config().fontFamily.openSansRegular,
    fontSize: config().fontSize.text,
    color: config().colors.darkGrey,
  },
});
