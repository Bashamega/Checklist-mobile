import { GestureResponderEvent } from "react-native";
export type Items = {
  id: number;
  name: string;
  done: boolean;
  time: {
    hours: number,
    minutes: number
  }
};
export type ItemProps = {
  title: string;
  done: boolean;
  time: any;
  date:string;
  handleDone: (event: GestureResponderEvent) => void;
};
export type BtnProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
};
export type listProps = {};
