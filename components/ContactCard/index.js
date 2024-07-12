import { View, Text, Pressable } from "react-native";
import React from "react";

import styles from "./styles";
import Avatar from "../Avatar";

export default function ContactCard() {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#e2e8f0" }}>
        <View style={styles.contentWrap}>
          <Avatar />
          <Text>John Doe</Text>
        </View>
      </Pressable>
    </View>
  );
}
