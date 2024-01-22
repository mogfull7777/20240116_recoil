import { atom } from "recoil";

// 초기값 설정.

export const todoListState = atom({
  key: "todoListState",
  default: [],
});
