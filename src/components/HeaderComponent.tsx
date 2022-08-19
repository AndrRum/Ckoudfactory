import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { windowWidth } from "../globalTheme/constants";

export interface IProps {
  title: string;
  onPressBack: () => void,
}

export const HeaderComponent = ({title, onPressBack}: IProps) => {

  const renderTitle = (): React.ReactNode => {
    return (
      <Text style={styles.headerTitle}>
        {title}
      </Text>
    );
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={onPressBack} style={styles.touchableContainer}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      {title && renderTitle()}
      <View style={styles.empty}/>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: windowWidth,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  } as ViewStyle,
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  headerTitle: {
    fontWeight: "600",
    paddingLeft: 16,
  } as TextStyle,
  touchableContainer: {
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  empty: {
    width: 30,
    paddingHorizontal: 16,
  } as ViewStyle
});
