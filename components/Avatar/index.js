import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";

export default function Avatar({ size }) {
  function resolveAvatarSize() {
    switch (size) {
      case "sm":
        return 35;
      case "md":
        return 48;
      case "lg":
        return 56;
      default:
        return 35;
    }
  }

  return (
    <View
      style={[
        styles.container,
        { height: resolveAvatarSize(size), width: resolveAvatarSize(size) },
      ]}
    >
      <Text>B</Text>
    </View>
  );
}
