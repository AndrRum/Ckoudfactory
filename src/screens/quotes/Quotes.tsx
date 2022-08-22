import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { HeaderComponent } from "../../components/HeaderComponent";
import { Tabs } from "../../navigation/components/navigationPages";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useGetTickerQuery } from "../../redux/poloniex.api";
import { LoadingComponent } from "../../components/LoadingComponent";
import { IPoloniexModelItem } from "../../models/poloniex.model";
import { QuotesItemComponent } from "./components/QuotesItemComponent";
import { Colors } from "../../globalTheme/colors";
import { QuotesHeaderName } from "./components/QuotesHeaderName";

export const Quotes = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { isLoading, isError, data } = useGetTickerQuery(undefined, {
    pollingInterval: isFocused ? 5000 : 0,
  });

  const goBackHandler = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: ListRenderItemInfo<IPoloniexModelItem>): React.ReactElement => {
    return <QuotesItemComponent
      name={item.name}
      highestBid={item.highestBid}
      last={item.last}
      percentChange={item.percentChange}
      key={item.id}
    />;
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderComponent onPressBack={goBackHandler} title={Tabs.quotes} />
        <View style={styles.elContainer}>
          {
            isError ?
              <View style={styles.errorContainer}>
                <Text style={styles.errorDescription}>
                  Something went wrong
                </Text>
              </View> : null
          }
          <QuotesHeaderName />
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
      <View style={styles.empty} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  elContainer: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  errorContainer: {
    backgroundColor: Colors.backRed,
    paddingVertical: 16,
    borderRadius: 18,
  } as ViewStyle,
  errorDescription: {
    color: Colors.red,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.red,
  } as ViewStyle,
  flatListContainer: {
    paddingHorizontal: 16,
  } as ViewStyle,
  empty: {
    height: 120,
  } as ViewStyle,
});
