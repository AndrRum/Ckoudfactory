import React, { useEffect } from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { HeaderComponent } from "../../components/HeaderComponent";
import { Tabs } from "../../navigation/components/navigationPages";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { IPoloniexModelItem } from "../../models/poloniex.model";
import { QuotesItemComponent } from "./components/QuotesItemComponent";
import { Colors } from "../../globalTheme/colors";
import { QuotesHeaderName } from "./components/QuotesHeaderName";
import { store } from "../../store/store";
import { observer } from "mobx-react";
import { LoadingComponent } from "../../components/LoadingComponent";
import { windowWidth } from "../../globalTheme/constants";

export const Quotes = observer(() => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  let intervalId: NodeJS.Timeout;
  useEffect(() => {
    store.fetchApiData();
    if (isFocused) {
      intervalId = setInterval(() => {
        store.fetchApiData();
      }, 5000);
    }

    return () => clearInterval(intervalId);

  }, [isFocused]);

  const goBackHandler = async () => {
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

  const renderErr = () => {
    return (
      <View style={styles.errorView}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorDescription}>
            Something went wrong
          </Text>
        </View>
      </View>
    );
  };

  if (store.responseData.length == 0 && !store.isError) {
    return <LoadingComponent />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderComponent onPressBack={goBackHandler} title={Tabs.quotes} />
        {store.isError ? renderErr() :
          <View style={styles.elContainer}>
            <QuotesHeaderName />
            <FlatList
              data={store.responseData}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id?.toString()}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        }
      </View>
      <View style={styles.empty} />
    </SafeAreaView>
  );
});

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
  errorView: {
    paddingHorizontal: 16,
    width: windowWidth,
    paddingTop: 8,
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
