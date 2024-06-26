import AsyncStorage from "@react-native-async-storage/async-storage";
import { Items } from "./types";
export const storeData = async (key:string, value: Items): Promise<boolean> => {
  try {
    // Retrieve existing data
    const existingData = await AsyncStorage.getItem(key);
    let dataArray: Items[] = [];
    // If there's existing data, parse it into an array
    if (existingData !== null) {
      const parsedData = JSON.parse(existingData);
      if (Array.isArray(parsedData)) {
        dataArray = parsedData;
      }
    }

    // Add the new value to the array
    dataArray.push(value);

    // Save the updated array back to AsyncStorage
    const jsonValue = JSON.stringify(dataArray);
    await AsyncStorage.setItem(key, jsonValue);

    return true;
  } catch (error) {
    //console.error("Error storing data", error);
    return false;
  }
};
export const getData = async (key:string): Promise<Items[] | null> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
export const updateDataDone = async (key:string, value: Items): Promise<boolean> => {
  //console.log("started")
  try {
    // Retrieve existing data
    const existingData = await AsyncStorage.getItem(key);
    let dataArray: Items[] = [];
    // If there's existing data, parse it into an array
    if (existingData !== null) {
      const parsedData = JSON.parse(existingData);
      if (Array.isArray(parsedData)) {
        dataArray = parsedData;
      }
    }

    // Add the new value to the array
    const updatedDataArray = dataArray.map((element) => {
      //console.log({element, value})
      if (element.id === value.id) {
        return { ...element, done: value.done };
      }
      return element;
    });
    dataArray = updatedDataArray;
    //console.log(dataArray)
    // Save the updated array back to AsyncStorage
    const jsonValue = JSON.stringify(dataArray);
    await AsyncStorage.setItem(key, jsonValue);

    return true;
  } catch (error) {
    //console.error("Error storing data", error);
    return false;
  }
};
export const clearData = async (key:string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, "null");
    return true;
  } catch (error) {
    //console.error("Error storing data", error);
    return false;
  }
};
