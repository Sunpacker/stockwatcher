import React from "react";
// import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet } from "react-native";

import { IStocksRequest } from "../api/types";

import { Text, View } from "../components/Themed";
import { getStocks } from "../store/ducks/stocks";

export default function StocksScreen() {
  // const { t } = useTranslation();
  const [stocks, setStocks] = React.useState<IStocksRequest | null>(null);

  React.useEffect(() => {
    const fetch = async () => {
      setStocks(await getStocks());
    };

    fetch();
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.title}>{stocks ? stocks.quotes[0].longname : <ActivityIndicator size="large" />}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
