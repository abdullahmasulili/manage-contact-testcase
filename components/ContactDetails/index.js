import { View, Text, Button } from "react-native";
import React from "react";
import lodash from "lodash";

import Avatar from "../Avatar";

import GlobalStyles from "../../helpers/GlobalStyles";

export default function ContactDetails({ details }) {
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
      <View style={{ marginTop: 15, borderRadius: 20, overflow: "hidden" }}>
        <Button title="Delete" color={"#ef4444"} />
      </View>
    </>
  );
}
