import { GestureResponderEvent } from "react-native";
export type Items = {
  id: number;
  name: string;
  done: boolean;
};
export type ItemProps = {
  title: string;
  done: boolean;
  handleDone: (event: GestureResponderEvent) => void;
};
export type BtnProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
};
export type listProps = {};
