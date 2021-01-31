import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNaviagtor from "./app/Navigation/AuthNaviagtor";
import AppNaviagtor from "./app/Navigation/AppNavigator";
import DetailsNaviagtor from "./app/Navigation/DetailsNaviagtor";

//FONTS
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/open-sans";
import { AuthContext, DetailsContext } from "./app/context";

import { getDetailsAPI } from "./app/api/details";

//MODAL
export default function App() {
  const [user, setUser] = useState();
  const [details, setDetails] = useState({
    content: {},
  });
  const [detailsComplete, setDetailsComplete] = useState(false);

  // LOADING FONTS
  let [fontsLoaded] = useFonts({
    "Lato-Light": require("./app/assets/fonts/Lato2OFL/Lato-Light.ttf"),
    "Lato-Regular": require("./app/assets/fonts/Lato2OFL/Lato-Regular.ttf"),
    "Lato-Medium": require("./app/assets/fonts/Lato2OFL/Lato-Medium.ttf"),
    "Lato-Heavy": require("./app/assets/fonts/Lato2OFL/Lato-Heavy.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const setDetailsStatus = async () => {
      try {
        const res = await getDetailsAPI(user.id);
        // console.log(res);
        if (res.status === 200) {
          setDetailsComplete(res.data.details.completion);
        }
      } catch (error) {}
    };

    setDetailsStatus();

    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {handleNavigators()}
          {/* {user ? <AppNaviagtor /> : <AuthNaviagtor />} */}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

  function handleNavigators() {
    if (user) {
      if (detailsComplete) {
        return <AppNaviagtor />;
      } else {
        return (
          <DetailsContext.Provider value={{ details, setDetails }}>
            <DetailsNaviagtor />
          </DetailsContext.Provider>
        );
      }
    } else {
      return <AuthNaviagtor />;
    }
  }
}
