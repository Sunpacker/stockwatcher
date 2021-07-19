import store from "../index";

export const getAppTheme = async (): Promise<string> => {
  return JSON.parse(await store.getItem("theme"));
};
export const setAppTheme = async (value: string): Promise<void> => {
  store.setItem("theme", value);
};

export const getAppLang = async (): Promise<string> => {
  return JSON.parse(await store.getItem("lang"));
};
export const setAppLang = async (value: string): Promise<void> => {
  store.setItem("lang", value);
};
