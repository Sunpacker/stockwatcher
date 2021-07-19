import { FC, memo } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
  onPress?: () => void;
}

const Button: FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.wrapper}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
  },
});

export default memo(Button);
