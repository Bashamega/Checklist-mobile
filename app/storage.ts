import AsyncStorage from "@react-native-async-storage/async-storage";
import { Items } from "./types";
export const storeData = async (value: Items): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("data-items", jsonValue);
    return true;
  } catch (error) {
    return false;
  }
};
export const getData = async () => {
  const value = await AsyncStorage.getItem("data-items");
  return value;
};
