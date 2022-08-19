import React from "react";
import { SafeAreaView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../globalTheme/colors";
import { useNavigation } from "@react-navigation/native";
import { Tabs } from "../../navigation/components/navigationPages";

export const About = () => {
  const navigation = useNavigation();

  const navigationHandler = (): void => {
    // @ts-ignore
    navigation.navigate(Tabs.quotes)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.elementsContainer}>
        <Text>About</Text>
        <TouchableOpacity style={styles.button} onPress={navigationHandler} >
          <Text style={styles.buttonLabel}>Navigate to quotes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  elementsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  } as ViewStyle,
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8
  } as ViewStyle,
  buttonLabel: {
    color: Colors.tabBackground
  } as TextStyle
});
