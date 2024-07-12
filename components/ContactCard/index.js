import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import lodash from "lodash";

import styles from "./styles";
import Avatar from "../Avatar";

export default function ContactCard({ firstName, lastName, contactId }) {
  const [fullName, setFullName] = useState("");

  function resolveFullName() {
    const joinedName = firstName.concat(" ", lodash.upperFirst(lastName));
    setFullName(lodash.upperFirst(joinedName));
  }

  function onCardPress() {
    console.log("pressed");
  }

  useEffect(() => {
    resolveFullName();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#f1f5f9" }} onPress={onCardPress}>
        <View style={styles.contentWrap}>
          <Avatar />
          <Text>{fullName}</Text>
        </View>
      </Pressable>
    </View>
  );
}
