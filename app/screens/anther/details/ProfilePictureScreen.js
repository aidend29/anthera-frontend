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

import FemaleDefaultAvatar from "../../../assets/svg/FemaleDefaultAvatar";
import MaleDefaultAvatar from "../../../assets/svg/MaleDefaultAvatar";
import AppDetail from "../../../shared/AppDetail";
import AppInputLine from "../../../shared/AppInputLine";
import AppCheckboxGroup from "../../../shared/AppCheckboxGroup";
import { DetailsContext } from "../../../context";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../../../config";

export const SmokeScreen = ({ navigation }) => {
  const form = useRef({ displayName: "", img: null });
  const modalizeRef = useRef(null);

  const detailsContext = useContext(DetailsContext);
  const [isFemaleAvatar, setIsFemaleAvatar] = useState(
    detailsContext.details.content["identiity"] == "Male" ? false : true
  );

  const [image, setImage] = useState(null);

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
        quality: 1,
      });

      // console.log(result);

      if (!result.cancelled) {
        form.current.img = result.base64;
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
        quality: 1,
      });

      if (!result.cancelled) {
        form.current.img = result.base64;
        setImage(result.uri);
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
        botNavOnPressRight={() => {
          //setContext
          let details = detailsContext.details;
          details.content["profilePicture"] = form.current;
          detailsContext.setDetails(details);

          console.log(
            "profilePicture: ",
            detailsContext.details.content.profilePicture
          );
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
            onChangeText={(text) => {
              form.current.displayName = text;
            }}
            isClearBtn={false}
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
