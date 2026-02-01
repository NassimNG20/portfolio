//
//
//
//

import type { CurrentPageTypes } from "./data";
import type { ZustandProps } from "./types";
import type Scrollbar from "smooth-scrollbar";
//
export interface ActionsTypes {
  methods: {
    setAreaEntered: (e: boolean) => void;
    setScrollbar: (scrollbar: Scrollbar | null) => void;
    scrollToId: (id: string) => void;
    setCurrentPage: (e: CurrentPageTypes) => void;
  };
}
//
//
export const actions = (props: ZustandProps): ActionsTypes => {
  const { set, get } = props;
  return {
    methods: {
      setAreaEntered: (is_nav) => set({ is_nav }),

      setCurrentPage: (currentPage) =>
        set((e) => ({ currentPage, updateScroll: !e.updateScroll })),

      setScrollbar: (scrollbar) => set({ scrollbar }),
      scrollToId: (id: string) => {
        const scrollbar = get().scrollbar;
        if (!scrollbar) return;
        const element = document.getElementById(id);
        if (!element) return;

        scrollbar.scrollIntoView(element, {
          alignToTop: true,
          onlyScrollIfNeeded: true,
          offsetTop: 0,
        });
      },
    },
  } as const satisfies ActionsTypes;
};
