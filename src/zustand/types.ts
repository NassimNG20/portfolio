//
//
//
//
//

import type { StoreApi } from "zustand";
import type { StoreType } from "./store";

//
export interface ZustandProps {
  set: StoreApi<StoreType>["setState"];
  get: StoreApi<StoreType>["getState"];
  store: StoreApi<StoreType>;
}
