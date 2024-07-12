import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { getContacts } from "../../redux/slicers/contactSlicer";

import ContactCard from "../../components/ContactCard";
import styles from "./styles";

export default function ContactList() {
  const { contacts, loading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactCard
            contactId={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
