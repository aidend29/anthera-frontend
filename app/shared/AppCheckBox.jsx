import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { cssVariables, appStyles, moderateScale } from "../../config";
import Checkbox from "../assets/svg/CheckboxChecked";
import CheckboxChecked from "../assets/svg/Checkbox";
import * as Animatable from "react-native-animatable";

const AppCheckBox = forwardRef(
  ({ style, onChange, text, initializeWith = false }, ref) => {
    const [_selected, set_Selected] = useState(initializeWith);

    const setSlected = (value) => {
      set_Selected(value);
    };

    useImperativeHandle(ref, () => {
      return {
        setSlected: setSlected,
      };
    });

    return (
      <Animatable.View animation="fadeIn" duration={1200}>
        <TouchableOpacity
          style={[styles.container, style]}
          onPress={() => {
            set_Selected(!_selected);
            onChange(!_selected);
          }}
        >
          {!_selected && (
            <CheckboxChecked
              width={moderateScale(22)}
              height={moderateScale(22)}
            />
          )}
          {_selected && (
            <Checkbox width={moderateScale(22)} height={moderateScale(22)} />
          )}
          <Text style={[appStyles.text, styles.text]}>{text}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: moderateScale(10),
  },
});
export default AppCheckBox;
