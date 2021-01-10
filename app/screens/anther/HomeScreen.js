import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen(props) {
  return (
    <View>
      <Text style={styles.container}>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
