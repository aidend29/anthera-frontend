import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";

import AppCheckBox from "./AppCheckBox";
import { verticalScale } from "../../config";

function AppCheckboxGroup({ children, onChange, style }) {
  const [current, setCurrent] = useState(0);
  const refsArr = [];
  return (
    <View onChange={onChange(current)} style={[styles.container, style]}>
      {children.map((value, index) => {
        const ref = useRef(null);
        refsArr.push(ref);
        return (
          <AppCheckBox
            style={styles.checkbox}
            text={value.props.children}
            key={index}
            initializeWith={() => {
              return index === 0 ? true : false;
            }}
            onChange={() => {
              // console.log(index, value);
              setCurrent(index);
              refsArr.map((value, idx) => {
                index === idx
                  ? value.current.setSlected(true)
                  : value.current.setSlected(false);
              });
            }}
            ref={ref}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  checkbox: { marginVertical: verticalScale(10) },
});
export default AppCheckboxGroup;
