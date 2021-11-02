import * as React from "react";
import { View, Text, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen Imports
import loginScreen from "./screens/loginScreen";
import cardScreen from "./screens/cardScreen";
import editScreen from "./screens/editScreen";
import addNewScreen from "./screens/addNewScreen";
const UnAuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const UnAuthStackScreen = () => (
  <UnAuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="loginScreen"
  >
    <UnAuthStack.Screen name="loginScreen" component={loginScreen} />
  </UnAuthStack.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: true }}>
    <AuthStack.Screen
      name="cardScreen"
      component={cardScreen}
      options={{ title: "Home" }}
    />
    <AuthStack.Screen
      name="editScreen"
      component={editScreen}
      options={{ title: "Edit" }}
    />
    <AuthStack.Screen
      name="addNewScreen"
      component={addNewScreen}
      options={{ title: "Add New" }}
    />
  </AuthStack.Navigator>
);

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="UnAuthStackScreen"
  >
    <MainStack.Screen
      name="AuthStackScreen"
      component={AuthStackScreen}
      options={{ title: "Welcome" }}
    />

    <MainStack.Screen
      name="UnAuthStackScreen"
      component={UnAuthStackScreen}
      options={{ title: "Welcome" }}
    />
  </MainStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
