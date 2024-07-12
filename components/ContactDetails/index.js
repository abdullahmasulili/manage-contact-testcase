import { View, Text, Button } from "react-native";
import React from "react";
import lodash from "lodash";

import Avatar from "../Avatar";

import GlobalStyles from "../../helpers/GlobalStyles";

export default function ContactDetails({ details, onEditPress }) {
  const contactActions = () => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
      }}
    >
      <View
        style={{
          marginTop: 15,
          borderRadius: 20,
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <Button title="Edit" onPress={onEditPress} />
      </View>
      <View
        style={{
          marginTop: 15,
          borderRadius: 20,
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <Button title="Delete" color={"#ef4444"} />
      </View>
    </View>
  );
  return (
    <>
      <Avatar size={"md"} />
      <View style={GlobalStyles.twoColumn}>
        <View>
          <Text style={GlobalStyles.textLight}>First Name</Text>
          <Text style={(GlobalStyles.textThick, GlobalStyles.textLarge)}>
            {lodash.capitalize(details?.firstName) ?? null}
          </Text>
        </View>
        <View>
          <Text style={GlobalStyles.textLight}>Last Name</Text>
          <Text style={(GlobalStyles.textThick, GlobalStyles.textLarge)}>
            {lodash.capitalize(details?.lastName) ?? null}
          </Text>
        </View>
      </View>
      <View>
        <Text style={GlobalStyles.textLight}>Age</Text>
        <Text style={(GlobalStyles.textThick, GlobalStyles.textLarge)}>
          {details?.age ?? null}
        </Text>
      </View>

      {contactActions()}
    </>
  );
}
