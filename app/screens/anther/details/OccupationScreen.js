import React, { useContext, useState, useRef } from "react";
import { StyleSheet, Text } from "react-native";

import { moderateScale, verticalScale, cssVariables } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { View } from "react-native-animatable";
import AppInputLine from "../../../shared/AppInputLine";
import AppCheckBox from "../../../shared/AppCheckBox";
import { DetailsContext } from "../../../context";

function OccupationScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const [occupationName, setOccupationName] = useState("");
  const roleName = useRef("");

  const handleDisplayingRoleInput = () => {
    if (occupationName.length > 0) {
      return (
        <AppInputLine
          autoCapitalize="words"
          placeholder="position/role (optional)"
          onChangeText={(text) => {
            roleName.current = text;
          }}
        />
      );
    }
  };
  return (
    <AppDetail
      progressNum={8}
      //Header
      headerTextFront="Where you"
      headerTextColored="work"
      //Bottom Svg
      BottomSvgname={OccupationScreenSvg}
      svgWidth={190}
      svgHeight={190}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("school");
      }}
      botNavOnPressRight={() => {
        let details = detailsContext.details;
        let form = {
          occupationName: occupationName,
          roleName: roleName.current,
        };
        details.content["occupation"] = form;
        detailsContext.setDetails(details);

        console.log("occupation: ", detailsContext.details.content.occupation);
        //setContext
        navigation.navigate("alcohol");
      }}
    >
      <View style={styles.container}>
        <AppInputLine
          autoCapitalize="words"
          placeholder="name of place you work (optional)"
          onChangeText={(text) => {
            setOccupationName(text);
          }}
          onClear={() => {
            setOccupationName("");
          }}
        />
        {handleDisplayingRoleInput()}
      </View>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cssVariables.screenMaxWidth - moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OccupationScreen;
