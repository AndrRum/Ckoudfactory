import React, { memo } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { Colors } from "../../../globalTheme/colors";
import { windowWidth } from "../../../globalTheme/constants";

const QuotesHeaderNameFC = () => {
  return (
    <View style={styles.labelsContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Name</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Last</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Highest bid</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Percent change</Text>
      </View>
    </View>
  );
};

export const QuotesHeaderName = memo(QuotesHeaderNameFC);

const styles = StyleSheet.create({
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.tabGray,
  } as ViewStyle,
  itemContainer: {
    width: windowWidth / 4.5,
    justifyContent: "center",
    alignItems: 'center'
  } as ViewStyle,
  label: {
    textAlign: "center",
    color: Colors.white
  } as TextStyle
});
