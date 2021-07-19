import store from "../index";

export enum LangEnum {
  ru = "ru",
  en = "en",
}

export const getAppTheme = async (): Promise<string | null> => {
  const value: string = await store.getItem("theme");
  return value?.length ? value : null;
};
export const setAppTheme = async (value: string): Promise<void> => {
  store.setItem("theme", value);
};

export const getAppLang = async (): Promise<string | null> => {
  const value: string = await store.getItem("lang");
  return value?.length ? value : null;
};
export const setAppLang = async (value: string): Promise<void> => {
  store.setItem("lang", value);
};
