import React, { useContext, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
  googleMatCols,
} from "../../../../config/index";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import AppInputField from "../../../shared/AppInputField";
import AppTag from "../../../shared/AppTag";
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

import { getInterests } from "../../../api/details";
import { ScrollView } from "react-native-gesture-handler";

function IntrestsScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const removeItemFromSeachList = ({ id, interest }) => {
    const filteredData = interests.filter((item) => {
      return item.id !== id;
    });
    setInterests(filteredData);
    selectedInterests.push(interest);
  };

  let colo = 0;

  function test() {
    const idx = colo % googleMatCols.length;
    const tmp = googleMatCols[idx];
    colo++;
    return tmp;
  }

  return (
    <AppScreen>
      <View style={styles.container}>
        <ProgressDots num={6} />
        <AppTextColorCoded
          front="Things "
          colored="I like"
          rest="doing are..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.midContainer}>
          <View
            style={{
              width: moderateScale(300),
              height: verticalScale(100),
              marginBottom: verticalScale(10),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {selectedInterests.map((item, idx) => {
                return (
                  <AppTag
                    name={item}
                    key={idx}
                    closeIcon={true}
                    style={{ marginRight: moderateScale(10) }}
                    onPress={() => {
                      const filtered = selectedInterests.filter(
                        (item, index) => {
                          return index !== idx;
                        }
                      );
                      setSelectedInterests(filtered);
                    }}
                  ></AppTag>
                );
              })}
            </ScrollView>
          </View>
          <AppInputField
            placeholder="i.e. hiking"
            icon="magnify"
            onChangeText={() => {}}
            apiCallOnTextChange={(text) => {
              getInterests(text, (data) => {
                // console.log(data.data);
                setInterests(data.data);
              });
            }}
          />
          <View
            style={{
              width: moderateScale(300),
              height: verticalScale(200),
              marginTop: verticalScale(10),
            }}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={interests}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <AppTag
                    style={{
                      backgroundColor: test(),
                    }}
                    name={item.interest}
                    onPress={() => {
                      removeItemFromSeachList(item);
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
        {/* <View style={styles.svgWrap}>
          <PurposeScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View> */}
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("relationshipStatus");
            }}
          />
          <AppButtonRound
            icon="leftcircle"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("school");
            }}
          />
        </View>
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
    marginTop: verticalScale(40),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(30),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginHorizontal: moderateScale(20),
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
  tagText: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(8),
  },
  tagWrap: {
    borderWidth: 1.5,
    borderRadius: 30,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
  },
});
export default IntrestsScreen;
