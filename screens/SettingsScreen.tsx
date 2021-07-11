import i18next from "i18next";
import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function StocksScreen() {
  const changeLang = lang => i18next.changeLanguage(lang);

  return (
    <View style={s.container}>
      <Text onPress={() => changeLang("ru")}>RU</Text>
      <Text onPress={() => changeLang("en")}>EN</Text>

      <Text style={s.title}>Settings</Text>
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
