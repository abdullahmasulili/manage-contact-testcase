import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";

import store from "./redux/store";

import ContactList from "./screens/ContactList";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <ContactList />
      </SafeAreaProvider>
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
