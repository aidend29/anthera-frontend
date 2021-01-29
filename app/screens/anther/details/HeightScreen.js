import React, { useContext, useState, useRef } from "react";
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
// import { updateDetailsApi } from "./shared/index";

function HeightScreen({ navigation }) {
  const [selectedUnitCM, setSelectedUnitCM] = useState({
    color: cssVariables.colors.primary,
  });
  const [selectedUnitFt, setSelectedUnitFt] = useState({});
  const [placeholder, setPlaceholder] = useState("164");
  const [currentText, setcurrentText] = useState("164");
  const detailsContext = useContext(DetailsContext);
  const height = useRef(164);

  return (
    <AppDetail
      progressNum={11}
      //Header
      headerTextFront="Your"
      headerTextColored="height"
      headerTextRest="is"
      //Svg
      BottomSvgname={HeightScreenSvg}
      svgWidth={150}
      svgHeight={150}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("smoke");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;
        let form = {
          height: height.current,
          unit: selectedUnitCM ? "cm" : "ft",
        };
        details.content["height"] = form;
        detailsContext.setDetails(details);

        console.log("height: ", detailsContext.details.content.height);
        // updateDetailsApi({
        //   height: parseInt(detailsContext.details.content.height.height),
        //   height_unit: detailsContext.details.content.height.unit,
        // });
        navigation.navigate("aboutYou");
      }}
    >
      <View style={styles.container}>
        <AppInputLine
          maxLength={3}
          placeholder={placeholder}
          onChangeText={(text) => {
            height.current = text;
          }}
          keyboardType="numeric"
          isClearBtn={false}
          showLetterCounter={false}
          style={styles.container}
          styleText={{
            paddingVertical: moderateScale(2),
            width: "auto",
          }}
        />
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setSelectedUnitCM({ color: cssVariables.colors.primary });
              setSelectedUnitFt({});
              setPlaceholder("164");
            }}
          >
            <Text style={[appStyles.text, styles.text, selectedUnitCM]}>
              cm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            maxLength={false}
            onPress={() => {
              setSelectedUnitCM();
              setSelectedUnitFt({ color: cssVariables.colors.primary });
              setPlaceholder("5.38");
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
    width: moderateScale(100),
    flexDirection: "row",
    justifyContent: "center",
  },
  btns: {
    flexDirection: "row",
  },
  text: {
    color: cssVariables.colors.secondary,
  },
  btn: {
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(2),
    paddingHorizontal: moderateScale(5),
  },
  btnSelected: {
    color: cssVariables.colors.primary,
  },
});
export default HeightScreen;
