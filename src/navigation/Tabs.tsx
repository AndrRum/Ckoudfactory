import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "../screens/about/About";
import { Quotes } from "../screens/quotes/Quotes";
import { Tabs } from "./components/navigationPages";
import { Colors } from "../globalTheme/colors";
import { TabIcon } from "./components/TabIcon";

const Tab = createBottomTabNavigator();

export const TabNavigationComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <TabIcon focused={focused} name={route.name} />;
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.tabGray,
        tabBarLabelStyle: { paddingBottom: 4 },
        tabBarStyle: {
          position: "absolute",
          paddingTop: 2,
          bottom: 0,
          elevation: 0,
          backgroundColor: Colors.tabBackground,
        },
      })}
      initialRouteName={Tabs.about}
    >
      <Tab.Screen
        name={Tabs.about}
        component={About}
        options={
          {
            tabBarLabel: Tabs.about,
          }
        }
      />
      <Tab.Screen
        name={Tabs.quotes}
        component={Quotes}
        options={{
          tabBarLabel: Tabs.quotes,
        }}
      />
    </Tab.Navigator>
  );
};
