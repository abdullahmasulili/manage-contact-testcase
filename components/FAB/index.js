import { View, Text, Pressable } from "react-native";
import React from "react";

export default function FAB({ onFabPress }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 15,
        right: 0,
        borderRadius: 1000,
        backgroundColor: "#2dd4bf",
        overflow: "hidden",
      }}
    >
      <Pressable android_ripple={{ color: "#5eead4" }} onPress={onFabPress}>
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#FFF" }}>+</Text>
        </View>
      </Pressable>
    </View>
  );
}
