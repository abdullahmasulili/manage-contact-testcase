import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";
import lodash from "lodash";

import { getContactById, getContacts } from "../../redux/slicers/contactSlicer";

import ContactCard from "../../components/ContactCard";
import styles from "./styles";
import Avatar from "../../components/Avatar";
import GlobalStyles from "../../helpers/GlobalStyles";
import ContactDetails from "../../components/ContactDetails";
import FAB from "../../components/FAB";

export default function ContactList({ navigation }) {
  const { contacts, contactDetails, loading, error } = useSelector(
    (state) => state.contacts
  );
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  async function onCardPress(contactId) {
    await dispatch(getContactById(contactId)).unwrap();
    setModalVisible(true);
  }

  function resolveHideModal() {
    setModalVisible(false);
  }

  function onFabPress() {
    navigation.navigate("AddContact");
  }

  function onEditPress() {
    navigation.navigate("EditContact");
  }

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactCard
            contactId={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            onCardPress={() => onCardPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <FAB onFabPress={onFabPress} />

      <Modal
        isVisible={modalVisible}
        onBackdropPress={resolveHideModal}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={500}
        animationOutTiming={500}
        style={{ margin: 0 }}
      >
        <View style={styles.contactDetailWrap}>
          <ContactDetails details={contactDetails} onEditPress={onEditPress} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
