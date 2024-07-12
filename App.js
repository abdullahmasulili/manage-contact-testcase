import { StyleSheet, Text, View } from "react-native";
import ContactList from "./screens/ContactList";

export default function App() {
  return (
    <View style={styles.container}>
      <ContactList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
