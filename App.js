import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./redux/store";
import { navigationRef } from "./helpers/RootNavigation";

import HomeStack from "./router/HomeStack";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider style={styles.container}>
          <HomeStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
