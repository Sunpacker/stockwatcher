import AsyncStorage from "@react-native-async-storage/async-storage";

const setItem = async (name: string, value: string): Promise<void> => {
  AsyncStorage.setItem(name, value);
};
const getItem = async (name: string): Promise<string> => {
  return AsyncStorage.getItem(name);
};

export default {
  setItem,
  getItem,
};
