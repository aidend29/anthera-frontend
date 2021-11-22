import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";

import { cssVariables, moderateScale, verticalScale } from "../../config";
import * as Animatable from "react-native-animatable";

function AppFeaturePresenter({ style, items, ms }) {
  const [dots, setDots] = useState(null);
  const [currentText, setCurrentText] = useState(items[0]);
  const [reanimate, setreAnimate] = useState(false);
  const currentIdx = useRef(0);
  const interval = useRef(null);

  const displayDots = (selectedIdx) => {
    setDots(
      items.map((itm, idx) => {
        return (
          <View
            key={idx}
            style={[
              styles.dot,
              {
                backgroundColor:
                  selectedIdx === idx
                    ? cssVariables.colors.primary
                    : cssVariables.colors.secondary,
              },
            ]}
          ></View>
        );
      })
    );
  };
  const handleLooping = () => {
    setreAnimate(false);
    currentIdx.current =
      currentIdx.current === items.length - 1 ? 0 : currentIdx.current + 1;
    setCurrentText(items[currentIdx.current]);
    displayDots(currentIdx.current);
    setreAnimate(true);
  };

  useEffect(() => {
    if (interval.current != null) clearInterval(interval.current);
    displayDots(0);
    setreAnimate(true);
    interval.current = setInterval(handleLooping, ms);
  }, []);

  return (
    <View style={[styles.container, style]}>
      {reanimate && (
        <Animatable.Text animation="fadeIn" duration={1000} style={styles.text}>
          {currentText}
        </Animatable.Text>
      )}
      <View style={styles.dotsWrapper}>{dots}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  dotsWrapper: {
    marginTop: verticalScale(10),
    flexDirection: "row",
  },
  dot: {
    marginHorizontal: moderateScale(4),
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: moderateScale(100),
    backgroundColor: cssVariables.colors.secondary,
  },
  text: {
    marginTop: verticalScale(1),
    fontFamily: cssVariables.fontFamily.regular,
    fontSize: moderateScale(12),
    color: cssVariables.colors.midGrey,
  },
});
export default AppFeaturePresenter;
