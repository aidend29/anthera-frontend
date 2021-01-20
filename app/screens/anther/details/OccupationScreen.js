import React, { useContext } from "react";

import { moderateScale, verticalScale } from "../../../../config";
import AppDetail from "../../../shared/AppDetail";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { View } from "react-native-animatable";
import AppInputField from "../../../shared/AppInputField";
import { DetailsContext } from "../../../context";

function OccupationScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppDetail
      progressNum={8}
      //Header
      headerTextFront="I"
      headerTextColored="work"
      headerTextRest="at..."
      //Bottom Svg
      Svgname={OccupationScreenSvg}
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
        <AppInputField
          placeholder="abc.inc"
          icon={null}
          onChangeText={(text) => {}}
          apiCallOnTextChange={() => {}}
          style={{
            marginVertical: verticalScale(10),
          }}
        />
        <AppInputField
          placeholder="software engineer"
          icon={null}
          onChangeText={(text) => {}}
          apiCallOnTextChange={() => {}}
          style={{ marginVertical: verticalScale(10) }}
        />
      </View>
    </AppDetail>
  );
}

export default OccupationScreen;
