import React, { useContext, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  getContrast,
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
import { useEffect } from "react";

function IntrestsScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const removeItemFromSeachList = (item) => {
    const { id, interest } = item;
    const filteredData = interests.filter((item) => {
      return item.id !== id;
    });
    setInterests(filteredData);
    selectedInterests.push(item);
  };

  const handleInput = (text) => {
    getInterests(text, (data) => {
      // console.log(data.data);
      setInterests(data.data);
    });
  };

  useEffect(() => {
    handleInput("photo");
  }, []);
  return (
    <AppScreen>
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
            {selectedInterests.reverse().map((item, idx) => {
              return (
                <AppTag
                  name={item.interest}
                  key={idx}
                  closeIcon={true}
                  style={{
                    backgroundColor: item.color,
                    marginRight: moderateScale(10),
                  }}
                  foregroundColor={getContrast(item.color)}
                  onPress={() => {
                    const filtered = selectedInterests.filter((item, index) => {
                      return index !== idx;
                    });
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
            handleInput(text);
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
            renderItem={({ item }) => {
              for (let i = 0; i < selectedInterests.length; i++) {
                if (selectedInterests[i].interest == item.interest) {
                  return;
                }
              }
              return (
                <View style={styles.listItem}>
                  <AppTag
                    style={{
                      backgroundColor: item.color,
                      opacity: 0.6,
                    }}
                    foregroundColor={getContrast(item.color)}
                    name={item.interest}
                    onPress={() => {
                      removeItemFromSeachList(item);
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        {/* <View style={styles.svgWrap}>
          <PurposeScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View> */}
      </View>
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
    marginHorizontal: moderateScale(40),
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: { marginVertical: verticalScale(10) },
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
