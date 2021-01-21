import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  appStyles,
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import HeightScreenSvg from "../../../assets/svg/HeightScreenSvg";
import AppInputLine from "../../../shared/AppInputLine";
import { DetailsContext } from "../../../context";
import { TouchableOpacity } from "react-native-gesture-handler";

function HeightScreen({ navigation }) {
  const [selectedUnitCM, setSelectedUnitCM] = useState({
    color: cssVariables.colors.primary,
  });
  const [selectedUnitFt, setSelectedUnitFt] = useState({});
  const [placeholder, setPlaceholder] = useState("183");
  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      progressNum={11}
      //Header
      headerTextFront="Your"
      headerTextColored="height"
      headerTextRest="is"
      //Svg
      BottomSvgname={HeightScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("smoke");
      }}
      botNavOnPressRight={() => {
        //setContext
        console.log("Dob selected", true);
        navigation.navigate("aboutYou");
      }}
    >
      <View style={styles.container}>
        <AppInputLine
          maxLength={3}
          placeholder={placeholder}
          onChangeText={() => {}}
          keyboardType="numeric"
          style={styles.container}
        />
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setSelectedUnitCM({ color: cssVariables.colors.primary });
              setSelectedUnitFt({});
              setPlaceholder("183");
            }}
          >
            <Text style={[appStyles.text, styles.text, selectedUnitCM]}>
              cm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setSelectedUnitCM();
              setSelectedUnitFt({ color: cssVariables.colors.primary });
              setPlaceholder("6.0");
            }}
          >
            <Text style={[appStyles.text, styles.text, selectedUnitFt]}>
              ft
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppDetail>
  );
}
const styles = StyleSheet.create({
  container: {
    width: moderateScale(80),
    flexDirection: "row",
  },
  btns: {
    flexDirection: "row",
  },
  text: {
    color: cssVariables.colors.secondary,
  },
  btn: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(2),
    paddingHorizontal: moderateScale(5),
  },
  btnSelected: {
    color: cssVariables.colors.primary,
  },
});
export default HeightScreen;
