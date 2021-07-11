import React from "react";
import { useNavigation } from "@react-navigation/native";

import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

import TabBarIcon from "../UI/TabBarIcon";

export default function headerRight() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const goToSettings = () => navigation.navigate("Settings");

  return (
    <TabBarIcon
      ionic="md-settings-outline"
      color={Colors[colorScheme].text}
      style={{ marginRight: 16 }}
      onPress={goToSettings}
    />
  );
}
