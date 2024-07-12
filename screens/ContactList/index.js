import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { getContacts } from "../../redux/slicers/contactSlicer";

import ContactCard from "../../components/ContactCard";
import styles from "./styles";

export default function ContactList() {
  const contactList = [
    {
      name: "John Doe",
      phone: "555-1234",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    {
      name: "Jane Smith",
      phone: "555-5678",
      email: "jane.smith@example.com",
      address: "456 Oak St, Anytown, USA",
    },
    {
      name: "Bob Johnson",
      phone: "555-8765",
      email: "bob.johnson@example.com",
      address: "789 Pine St, Anytown, USA",
    },
    {
      name: "Alice Williams",
      phone: "555-4321",
      email: "alice.williams@example.com",
      address: "321 Maple St, Anytown, USA",
    },
    {
      name: "Charlie Brown",
      phone: "555-6789",
      email: "charlie.brown@example.com",
      address: "654 Elm St, Anytown, USA",
    },
    {
      name: "Diane Miller",
      phone: "555-9876",
      email: "diane.miller@example.com",
      address: "987 Cedar St, Anytown, USA",
    },
    {
      name: "Edward Wilson",
      phone: "555-2468",
      email: "edward.wilson@example.com",
      address: "246 Birch St, Anytown, USA",
    },
    {
      name: "Fiona Davis",
      phone: "555-1357",
      email: "fiona.davis@example.com",
      address: "135 Spruce St, Anytown, USA",
    },
    {
      name: "George Harris",
      phone: "555-2469",
      email: "george.harris@example.com",
      address: "369 Ash St, Anytown, USA",
    },
    {
      name: "Hannah Clark",
      phone: "555-9753",
      email: "hannah.clark@example.com",
      address: "753 Willow St, Anytown, USA",
    },
  ];

  const { contacts, loading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    console.log(contacts);
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactCard contactName={item.firstName} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
