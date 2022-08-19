import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../globalTheme/styles";
import { Colors } from "../globalTheme/colors";

export const LoadingComponent = (props: JSX.IntrinsicClassAttributes<ActivityIndicator>) => {
  return (
    <View style={{...globalStyles.flexCenter}}>
      <ActivityIndicator {...props}/>
    </View>
  );
};

LoadingComponent.defaultProps = {
  color: Colors.primary,
  animating: true,
  size: "large",
};
