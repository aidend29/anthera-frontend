import React, { useContext, useRef } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import { moderateScale, verticalScale } from "../../../../config/index";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

function AlcoholScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const alcoholOption = useRef(0);

  return (
    <AppDetail
      progressNum={9}
      //Header
      headerTextColored="Drinking"
      headerTextRest="habbits"
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("occupation");
      }}
      botNavOnPressRight={() => {
        let details = detailsContext.details;
        details.content["alcohol"] = alcoholOption.current;
        detailsContext.setDetails(details);

        console.log("alcohol: ", detailsContext.details.content.alcohol);
        //setContext
        navigation.navigate("smoke");
      }}
    >
      <AppCheckboxGroup
        onChange={(idx) => {
          alcoholOption.current = idx;
        }}
      >
        <Text>a drinker</Text>
        <Text>not a drinker</Text>
        <Text>a occasional drinker</Text>
        <Text>prefer not to say</Text>
      </AppCheckboxGroup>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(30),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(140),
  },
});
export default AlcoholScreen;
