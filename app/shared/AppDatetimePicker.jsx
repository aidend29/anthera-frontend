import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  cssVariables,
  moderateScale,
  verticalScale,
  appStyles,
} from "../../config";

function AppDatetimePicker({ _mode, maxdate = 5844 }) {
  const getMaxDate = () => {
    const d = new Date();
    return new Date(d.setDate(d.getDate() - maxdate));
  };

  const [date, setDate] = useState(getMaxDate());
  const [mode, setMode] = useState(_mode);
  const [show, setShow] = useState(false);
  const [text, setText] = useState(getMaxDate().toDateString());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
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
    <View style={styles.container}>
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
          maximumDate={getMaxDate()}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{ width: moderateScale(300) }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AppDatetimePicker;
