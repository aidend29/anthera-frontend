import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { cssVariables, appStyles, moderateScale } from "../../config";

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
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => {
          set_Selected(!_selected);
          onChange(!_selected);
        }}
      >
        {!_selected && (
          <Feather
            name="circle"
            size={moderateScale(24)}
            color={cssVariables.colors.grey}
          />
        )}
        {_selected && (
          <Feather
            name="check-circle"
            size={moderateScale(24)}
            color={cssVariables.colors.primary}
          />
        )}
        <Text style={[appStyles.text, styles.text]}>{text}</Text>
      </TouchableOpacity>
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
    fontFamily: cssVariables.fontFamily.light,
  },
});
export default AppCheckBox;
