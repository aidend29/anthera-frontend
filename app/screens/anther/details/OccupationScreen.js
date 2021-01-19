import React, { useContext } from "react";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import OccupationScreenSvg from "../../../assets/svg/OccupationScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppInputField from "../../../shared/AppInputField";
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

function OccupationScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <ProgressDots num={8} />
      <AppTextColorCoded
        front="I "
        colored="work"
        rest="at..."
        styles={[appStyles.smHeading, styles.title]}
        animation="fadeInUp"
      />
      <View style={styles.svgWrap}>
        <OccupationScreenSvg
          height={verticalScale(170)}
          width={moderateScale(170)}
        />
      </View>
      <View style={styles.midContainer}>
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

      <View style={styles.navBtnContainer}>
        <AppButtonRound
          icon="leftcircle"
          go="back"
          style={styles.navBtn}
          onPress={() => {
            navigation.navigate("school");
          }}
        />
        <AppButtonRound
          icon="leftcircle"
          style={styles.navBtn}
          onPress={() => {
            navigation.navigate("alcohol");
          }}
        />
      </View>
    </AppScreen>
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
    marginVertical: verticalScale(10),
  },

  midContainer: {
    marginTop: verticalScale(-10),
    marginBottom: verticalScale(50),
    marginHorizontal: moderateScale(50),
  },
  checkbox: {},
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
export default OccupationScreen;
