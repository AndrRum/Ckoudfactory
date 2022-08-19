import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Root } from "./components/navigationPages";
import { TabNavigationComponent } from "./Tabs";

const Stack = createNativeStackNavigator();

export const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={Root.tabs} component={TabNavigationComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
