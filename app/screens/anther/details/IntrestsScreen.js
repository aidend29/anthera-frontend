import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  getContrast,
} from "../../../../config/index";
import { View } from "react-native-animatable";

import AppSearchbox from "../../../shared/AppSearchbox";
import AppTag from "../../../shared/AppTag";
import { DetailsContext } from "../../../context";
import { getInterestsAPI } from "../../../api/details";
import AppDetail from "../../../shared/AppDetail";
// import { updateDetailsApi } from "./shared/index";

function IntrestsScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  const [currentSearchTerm, setCurrentSearchTerm] = useState(null);
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
    getInterestsAPI(text, (data) => {
      // console.log(data.data);
      setInterests(data.data);
    });
  };

  useEffect(() => {
    handleInput("photo");
  }, []);
  return (
    <AppDetail
      progressNum={6}
      //Header
      headerTextFront="Things"
      headerTextColored="you like"
      headerTextRest="doing are"
      //Svg
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("relationshipStatus");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;
        details.content["interests"] = [];
        selectedInterests.map((item) => {
          details.content["interests"].push(item.interest);
        });
        detailsContext.setDetails(details);

        console.log("interests: ", detailsContext.details.content.interests);
        // updateDetailsApi({
        //   interests: JSON.stringify({
        //     data: detailsContext.details.content.interests,
        //   }),
        // });
        navigation.navigate("school");
      }}
    >
      <View style={styles.constainer}>
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
                  handleInput(currentSearchTerm);
                }}
              ></AppTag>
            );
          })}
        </ScrollView>
      </View>
      <AppSearchbox
        placeholder="i.e. hiking"
        apiCallOnTextChange={(text) => {
          setCurrentSearchTerm(text);
          handleInput(text);
        }}
      />
      <View
        style={{
          height: verticalScale(200),
          marginTop: verticalScale(10),
        }}
      >
        <Animatable.View duration={1000} animation="fadeIn">
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
        </Animatable.View>
      </View>
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  constainer: {
    height: verticalScale(100),
    marginBottom: verticalScale(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: cssVariables.screenMaxWidth - moderateScale(50),
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
