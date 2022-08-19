import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { Tabs } from "./navigationPages";

interface IProps {
  name: string;
  focused: boolean;
}

export const TabIcon = (props: IProps) => {
  let iconName;
  switch (props.name) {
    case Tabs.about:
      iconName = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Qsicon_Achtung_grey.svg/640px-Qsicon_Achtung_grey.svg.png";
      break;
    case Tabs.quotes:
      iconName = "https://p7.hiclipart.com/preview/668/233/75/banknote-united-states-dollar-computer-icons-united-states-one-dollar-bill-dollar-bills.jpg";
      break;
  }
  return <Image source={{ uri: iconName }} style={props.focused ?
    styles.imageWhenFocused : styles.imageWhenUnfocused} />;
};

const styles = StyleSheet.create({
  imageWhenFocused: {
    width: 20,
    height: 20,
  } as ImageStyle,
  imageWhenUnfocused: {
    width: 16,
    height: 16,
  } as ImageStyle,
});
