import React, { useRef, useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import FemaleDefaultAvatar from "../../../assets/svg/FemaleDefaultAvatar";
import MaleDefaultAvatar from "../../../assets/svg/MaleDefaultAvatar";
import AppDetail from "../../../shared/AppDetail";
import AppInputLine from "../../../shared/AppInputLine";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import AppError from "../../../shared/AppError";
import { DetailsContext } from "../../../context";
import { updateDetailsApi } from "./shared/index";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../../../config";

export const SmokeScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);
  const [isCompleteBtnDisabled, setIsCompleteBtnDisabled] = useState(true);

  const detailsContext = useContext(DetailsContext);
  const [isFemaleAvatar, setIsFemaleAvatar] = useState(
    detailsContext.details.content["identiity"] == "Male" ? false : true
  );

  const [image, setImage] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useEffect(() => {}, []);

  const handleDisplayingDefaultAvatar = () => {
    if (isFemaleAvatar)
      return (
        <FemaleDefaultAvatar
          width={moderateScale(180)}
          height={moderateScale(180)}
        />
      );
    else
      return (
        <MaleDefaultAvatar
          width={moderateScale(180)}
          height={moderateScale(180)}
        />
      );
  };

  const onOpenModel = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  const requestMediaLibaryPermissions = async () => {
    try {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need media liabry permissions.");
      }
    } catch (error) {
      alert("Sorry, something went wrong getting media libary permissions.");
    }
  };

  const requestCameraPermissions = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions.");
      }
    } catch (error) {
      alert("Sorry, something went wrong getting media camera permissions.");
    }
  };

  const laucnhImageBrowser = async () => {
    requestMediaLibaryPermissions();
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [7, 10],
        quality: 0.8,
      });

      // console.log(result);
      //Compress Image

      if (!result.cancelled) {
        // compressImage(result);
        setImage(result.uri);
      }
    } catch (error) {
      alert("Sorry, something went wrong opening media libary.");
    }
  };

  const launchCamera = async () => {
    requestCameraPermissions();
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [7, 10],
        quality: 0.8,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      alert("Sorry, something went wrong opening camera.");
    }
  };

  const handleUpdateApi = () => {
    updateDetailsApi({
      sex: detailsContext.details.content.identiity,
      purpose: detailsContext.details.content.purpose,
      sexual_orientation: detailsContext.details.content.sexualOrientation,
      dob: detailsContext.details.content.dob,
      height_unit: detailsContext.details.content.height.unit,
      interests: JSON.stringify({
        data: detailsContext.details.content.interests,
      }),

      school_name: detailsContext.details.content.school.schoolName,
      school_major: detailsContext.details.content.school.majorName,
      school_graduated: detailsContext.details.content.school.graduated,

      profession: detailsContext.details.content.occupation.professionName,
      workplace_name: detailsContext.details.content.occupation.companyName,

      drinking_habbit: detailsContext.details.content.alcohol,
      smoking_habbit: detailsContext.details.content.smoke,

      height: parseInt(detailsContext.details.content.height.height),
      about_you: detailsContext.details.content.aboutYou,

      display_name: displayName,
    });
  };

  const handleComplete = () => {
    let detailContents = detailsContext.details.content;
    handleUpdateApi();
    console.log(detailContents);
  };

  const isCompleteButtonDisabed = () => {};
  return (
    <>
      <AppDetail
        progressNum={13}
        //Header
        headerTextFront="Select a"
        headerTextColored="profile"
        headerTextRest="picture"
        //Svg
        //Navigation
        botNavOnPressLeft={() => {
          navigation.navigate("aboutYou");
        }}
        displayButtonDone={true}
        btnNextDisabled={image && displayName ? false : true}
        botNavOnPressRight={() => {
          //setContext
          let details = detailsContext.details;
          details.content["profilePicture"] = { displayName, image };
          detailsContext.setDetails(details);

          // console.log(
          //   "profilePicture: ",
          //   detailsContext.details.content.profilePicture
          // );
          handleComplete();
          navigation.navigate("profilePicture");
        }}
      >
        <TouchableOpacity onPress={onOpenModel}>
          {!image && handleDisplayingDefaultAvatar()}
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: moderateScale(180),
                height: moderateScale(180),
                borderRadius: moderateScale(100),
              }}
            />
          )}
        </TouchableOpacity>
        <View style={{ marginVertical: verticalScale(20) }}>
          <AppInputLine
            autoCapitalize="words"
            maxLength={12}
            placeholder="display name"
            onClear={() => {
              setDisplayName(null);
            }}
            onChangeText={(text) => {
              setDisplayName(text);
            }}
            styleText={{
              paddingVertical: moderateScale(2),
              width: "auto",
              textAlign: "center",
            }}
          />
        </View>
      </AppDetail>
      <Modalize ref={modalizeRef} modalHeight={verticalScale(150)}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={laucnhImageBrowser}>
            <Ionicons
              name="ios-image"
              size={moderateScale(40)}
              color={cssVariables.colors.secondary}
            />
            <Text>Browse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={launchCamera}>
            <Ionicons
              name="camera"
              size={moderateScale(40)}
              color={cssVariables.colors.primary}
            />
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(150),
  },
  btn: {
    marginHorizontal: moderateScale(50),
    marginBottom: verticalScale(30),
  },
});

export default SmokeScreen;
