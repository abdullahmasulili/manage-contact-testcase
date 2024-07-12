import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddContact({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Text>Add Contact</Text>
    </SafeAreaView>
  );
}
