import React, { useContext } from "react";

import { moderateScale, verticalScale } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { View } from "react-native-animatable";
import AppInputLine from "../../../shared/AppInputLine";
import { DetailsContext } from "../../../context";

function OccupationScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      progressNum={8}
      //Header
      headerTextFront="Where you"
      headerTextColored="work"
      //Bottom Svg
      BottomSvgname={OccupationScreenSvg}
      svgWidth={170}
      svgHeight={170}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("school");
      }}
      botNavOnPressRight={() => {
        //setContext
        navigation.navigate("alcohol");
      }}
    >
      <View
        style={{
          marginHorizontal: moderateScale(50),
        }}
      >
        <AppInputLine
          placeholder="Name of where you work"
          onChangeText={(text) => {}}
        />
        <AppInputLine placeholder="Role" onChangeText={(text) => {}} />
      </View>
    </AppDetail>
  );
}

export default OccupationScreen;
