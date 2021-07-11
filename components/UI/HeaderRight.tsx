import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import TabBarIcon from "../UI/TabBarIcon";

export default function headerRight() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const goToSettings = () => navigation.navigate("Settings");

  return (
    <Pressable android_ripple={{ radius: 22 }} style={{ marginRight: 6 }} onPress={goToSettings}>
      <TabBarIcon ionic="md-settings-outline" color={Colors[colorScheme].text} size={24} style={{ padding: 10 }} />
    </Pressable>
  );
}
