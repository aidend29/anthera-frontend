import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNaviagtor from "./app/Navigation/AuthNaviagtor";
import AppNaviagtor from "./app/Navigation/AppNavigator";
import DetailsNaviagtor from "./app/Navigation/DetailsNaviagtor";

//FONTS
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/open-sans";
import { AuthContext, DetailsContext } from "./app/context";

export default function App() {
  const [user, setUser] = useState();
  const [details, setDetails] = useState({
    status: null,
    progress: { current: 1, max: 10 },
  });

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
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {test()}
          {/* {user ? <AppNaviagtor /> : <AuthNaviagtor />} */}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

  function test() {
    if (user) {
      if (details.status != null) {
        //Go to app
        return <AppNaviagtor />;
      } else {
        //Go to details nav
        return (
          <DetailsContext.Provider value={{ details, setDetails }}>
            <DetailsNaviagtor />
          </DetailsContext.Provider>
        );
      }
    } else {
      //Go to auth nav
      return <AuthNaviagtor />;
    }
  }
}
