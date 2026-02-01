//
//
//
//
export type CurrentPageTypes = "home" | "work" | "expertise" | "contact";
import type Scrollbar from "smooth-scrollbar";
//
//
export interface DataTypes {
  is_nav: boolean;
  scrollbar: Scrollbar | null;
  currentPage: CurrentPageTypes;
  updateScroll: boolean;
}
//
//
export const storeData: DataTypes = {
  is_nav: false,
  scrollbar: null,
  currentPage: "home",
  updateScroll: false,
} as const satisfies DataTypes;
