import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { fetchStocks, IStocksRequest } from "../api/rest/stocks";

import { Text, View } from "../components/Themed";

export default function StocksScreen() {
  const { t } = useTranslation();
  const [stocks, setStocks] = React.useState<IStocksRequest | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchStocks();

        if (!data?.count) setError("Ошибка при получении данных по тикеру.");
        setStocks(data);
      } catch (e) {
        setError("Ошибка при получении данных.");
        throw e;
      }
    };

    fetch();
  }, []);

  return (
    <View style={s.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text style={s.title}>{stocks ? stocks.quotes[0].longname : `${t("loading")}...`}</Text>
      )}
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
