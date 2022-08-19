import React, { memo } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { windowWidth } from "../../../globalTheme/constants";
import { Colors } from "../../../globalTheme/colors";

interface IProps {
  name: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

const QuotesItemComponentFC = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.nameLabel}>{props.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{props.last}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{props.highestBid}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{props.percentChange}</Text>
      </View>
    </View>
  );
};

export const QuotesItemComponent = memo(QuotesItemComponentFC);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  } as ViewStyle,
  itemContainer: {
    borderWidth: 0.4,
    borderColor: Colors.darkGrayishBlue,
    width: windowWidth / 4.5,
    paddingHorizontal: 2,
    alignItems: "center"
  } as ViewStyle,
  nameLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
    color: Colors.primary
  } as TextStyle,
  label: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "400",
    color: Colors.black
  } as TextStyle,
});
