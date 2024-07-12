import { View, Text, Pressable } from "react-native";
import React from "react";

import styles from "./styles";
import Avatar from "../Avatar";

export default function ContactCard({ contactName }) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#f1f5f9" }}>
        <View style={styles.contentWrap}>
          <Avatar />
          <Text>{contactName}</Text>
        </View>
      </Pressable>
    </View>
  );
}
