import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

import {
  cssVariables,
  moderateScale,
  verticalScale,
  appStyles,
} from "../../config";

function AppDatetimePicker({ _mode, maxdate, getSelectedDate, style }) {
  const [date, setDate] = useState(maxdate());
  const [mode, setMode] = useState(_mode);
  const [show, setShow] = useState(false);
  const [text, setText] = useState(maxdate().toDateString());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    getSelectedDate(currentDate);
    setText(new Date(currentDate).toDateString());
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(_mode);
    toggle();
  };

  const toggle = () => {
    const tmp = !show;
    setShow(tmp);
    return tmp;
  };

  return (
    <Animatable.View
      style={[styles.container, style]}
      animation="fadeIn"
      duration={1000}
    >
      <TouchableOpacity onPress={showDatepicker}>
        <Text style={[appStyles.text, { paddingBottom: verticalScale(10) }]}>
          {text}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          maximumDate={maxdate()}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{ width: moderateScale(300) }}
        />
      )}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AppDatetimePicker;
