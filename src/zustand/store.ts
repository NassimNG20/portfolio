//
//
//
//
import { create } from "zustand";
import { storeData, type DataTypes } from "./data";
import { actions, type ActionsTypes } from "./actions";
//
export type StoreType = DataTypes & ActionsTypes;
//
export const useStore = create<StoreType>((set, get, store) => ({
  ...storeData,
  ...actions({ set, get, store }),
}));
