import i18next from "i18next";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import { LangEnum, getAppLang, setAppLang } from "../store/ducks/settings";

import { Text, View } from "../components/Themed";

export default function StocksScreen() {
  const { t } = useTranslation();
  const [lang, setLang] = React.useState<string | null>(LangEnum.en);

  const changeLang = (lang: LangEnum) => {
    i18next.changeLanguage(lang);
    setLang(lang);
    setAppLang(lang);
  };

  React.useEffect(() => {
    const fetchSettings = async () => {
      const langStore = await getAppLang();
      setLang(langStore ? langStore : LangEnum.en);
    };

    fetchSettings();
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.groupTitle}>{t("lang")}</Text>
      <View style={s.buttonGroup}>
        {Object.keys(LangEnum).map((item: string, i: number) => (
          <Button
            key={i}
            title={LangEnum[item]}
            onPress={() => changeLang(LangEnum[item])}
            disabled={!lang || lang === LangEnum[item]}
          />
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
  },
  groupTitle: {
    marginBottom: 12,
  },
});
