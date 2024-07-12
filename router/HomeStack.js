import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactList from "../screens/ContactList";
import AddContact from "../screens/AddContact";
import EditContact from "../screens/EditContact";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ContactList"
    >
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="AddContact" component={AddContact} />
      <Stack.Screen name="EditContact" component={EditContact} />
    </Stack.Navigator>
  );
}
