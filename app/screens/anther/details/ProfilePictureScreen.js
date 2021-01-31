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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import * as Animatable from "react-native-animatable";

import FemaleDefaultAvatar from "../../../assets/svg/FemaleDefaultAvatar";
import MaleDefaultAvatar from "../../../assets/svg/MaleDefaultAvatar";
import AppDetail from "../../../shared/AppDetail";
import AppInputLine from "../../../shared/AppInputLine";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";
import { AuthContext } from "../../../context";

import {
  updateDetailsAPI,
  uploadProfilePictureAPI,
} from "../../../api/details";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../../../config";

export const SmokeScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);
  const [isCompleteBtnDisabled, setIsCompleteBtnDisabled] = useState(true);
  const [isImageLaoding, setImageLoading] = useState(false);

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

  const loading = {
    0: {
      opacity: 1,
    },
    0.25: {
      opacity: 0.75,
    },
    0.5: {
      opacity: 0.45,
    },
    0.75: {
      opacity: 0.75,
    },
    1: {
      opacity: 1,
    },
  };

  const authContext = useContext(AuthContext);
  // console.log(authContext.user);

  // set dafault avatar depenidng on the gender chosen
  const handleDisplayingDefaultAvatar = () => {
    const AnimationWrap = ({ children }) => {
      return (
        <Animatable.View
          animation={isImageLaoding ? loading : null}
          iterationCount="infinite"
          easing="ease-out"
          duration={3000}
        >
          {children}
        </Animatable.View>
      );
    };
    if (isFemaleAvatar)
      return (
        <AnimationWrap>
          <FemaleDefaultAvatar
            width={moderateScale(180)}
            height={moderateScale(180)}
          />
        </AnimationWrap>
      );
    else
      return (
        <AnimationWrap>
          <MaleDefaultAvatar
            width={moderateScale(180)}
            height={moderateScale(180)}
          />
        </AnimationWrap>
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

  const imageCompressor = async (uri) => {
    const fileSizeErrorMargin = (size) => {
      //554 kb = 0.554 mb
      if (Platform.OS === "ios") {
        size = (size / 1000) * 3.85;
        // console.log(size + " kb");
        return size;
      }
      // console.log(size / 1000 + " kb");
      return size / 1000;
    };

    const compress = async (uri, compressVal) => {
      const manipResult = await ImageManipulator.manipulateAsync(uri, [], {
        compress: compressVal,
      });

      fileInfo = await FileSystem.getInfoAsync(manipResult.uri);
      // console.log(
      //   "AFTER @ " + compressVal + " - " + fileSizeErrorMargin(fileInfo.size)
      // );
      uploadProfilePictureAPI(authContext, manipResult.uri);
      setImage(manipResult.uri);
    };

    let fileInfo = await FileSystem.getInfoAsync(uri);
    const sizeEstimate = fileSizeErrorMargin(fileInfo.size);
    // console.log("ORIGINAL", sizeEstimate);

    switch (true) {
      case sizeEstimate < 1000:
        compress(fileInfo.uri, 0.9);
        break;
      case sizeEstimate < 2500:
        compress(fileInfo.uri, 0.8);
        break;
      case sizeEstimate < 3000:
        compress(fileInfo.uri, 0.7);
        break;
      case sizeEstimate < 4000:
        compress(fileInfo.uri, 0.5);
        break;
      case sizeEstimate < 5000:
        compress(fileInfo.uri, 0.3);
        break;
      default:
        compress(fileInfo.uri, 0.01);
        break;
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
        quality: 1,
      });
      if (!result.cancelled) {
        imageCompressor(result.uri);
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
        quality: 1,
      });

      if (!result.cancelled) {
        imageCompressor(result.uri);
      }
    } catch (error) {
      alert("Sorry, something went wrong opening camera.");
    }
  };

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

          updateDetailsAPI(authContext, {
            sex: detailsContext.details.content.identiity,
            purpose: detailsContext.details.content.purpose,
            sexual_orientation:
              detailsContext.details.content.sexualOrientation,
            relation_status: detailsContext.details.content.relationshipStatus,
            dob: detailsContext.details.content.dob,
            height_unit: detailsContext.details.content.height.unit,
            interests: JSON.stringify({
              data: detailsContext.details.content.interests,
            }),

            school_name: detailsContext.details.content.school.schoolName,
            school_major: detailsContext.details.content.school.majorName,
            school_graduated: detailsContext.details.content.school.graduated,

            profession:
              detailsContext.details.content.occupation.professionName,
            workplace_name:
              detailsContext.details.content.occupation.companyName,

            drinking_habbit: detailsContext.details.content.alcohol,
            smoking_habbit: detailsContext.details.content.smoke,

            height: parseInt(detailsContext.details.content.height.height),
            about_you: detailsContext.details.content.aboutYou,

            display_name: displayName,
            completion: true,
          });
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
  loader: {
    position: "absolute",
  },
});

export default SmokeScreen;
