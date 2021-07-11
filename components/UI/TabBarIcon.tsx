import React, { ComponentProps } from "react";
import { GestureResponderEvent, StyleProp, TextStyle } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

export default function TabBarIcon(props: {
  ionic?: ComponentProps<typeof Ionicons>["name"];
  foundation?: ComponentProps<typeof Foundation>["name"];
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  const { ionic, foundation, size = 32, style = { marginBottom: -4 } } = props;

  if (ionic) {
    return <Ionicons name={ionic} size={size} style={style} {...props} />;
  } else if (foundation) {
    return <Foundation name={foundation} size={size} style={style} {...props} />;
  }
}
