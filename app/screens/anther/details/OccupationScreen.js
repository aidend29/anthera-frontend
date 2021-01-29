import React, { useContext, useState, useRef } from "react";
import { StyleSheet, Text } from "react-native";

import { moderateScale, verticalScale, cssVariables } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { View } from "react-native-animatable";
import AppInputLine from "../../../shared/AppInputLine";
import AppCheckBox from "../../../shared/AppCheckBox";
import { DetailsContext } from "../../../context";
// import { updateDetailsApi } from "./shared/index";

function OccupationScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);
  const [professionName, setProfessionName] = useState("");
  const companyName = useRef("");

  const handleDisplayingRoleInput = () => {
    if (professionName.length > 0) {
      return (
        <AppInputLine
          autoCapitalize="words"
          placeholder="company name (optional)"
          onChangeText={(text) => {
            companyName.current = text;
          }}
        />
      );
    }
  };
  return (
    <AppDetail
      progressNum={8}
      //Header
      headerTextFront="Your"
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
          professionName: professionName,
          companyName: companyName.current,
        };
        details.content["occupation"] = form;
        detailsContext.setDetails(details);

        console.log("occupation: ", detailsContext.details.content.occupation);
        // updateDetailsApi({
        //   profession: detailsContext.details.content.occupation.professionName,
        //   workplace_name: detailsContext.details.content.occupation.companyName,
        // });
        //setContext
        navigation.navigate("alcohol");
      }}
    >
      <View style={styles.container}>
        <AppInputLine
          autoCapitalize="words"
          placeholder="your profession (optional)"
          onChangeText={(text) => {
            setProfessionName(text);
          }}
          onClear={() => {
            setProfessionName("");
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
