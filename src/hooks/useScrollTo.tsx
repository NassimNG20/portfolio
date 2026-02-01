import { useRef, useCallback } from "react";
import type Scrollbar from "smooth-scrollbar";

export const useScrollbarScroll = () => {
  // Ref to hold the Scrollbar instance
  const scrollbarRef = useRef<Scrollbar | null>(null);

  // Function to attach ref to Scrollbar component
  const setScrollbarRef = useCallback((instance: Scrollbar | null) => {
    scrollbarRef.current = instance;
  }, []);

  // Function to scroll to an element by ID
  const scrollToId = useCallback(
    (id: string, options?: { alignToTop?: boolean }) => {
      if (!scrollbarRef.current) return;
      const element = document.getElementById(id);
      if (!element) return;

      scrollbarRef.current.scrollIntoView(element, {
        alignToTop: options?.alignToTop ?? true,
        onlyScrollIfNeeded: true,
      });
    },
    [],
  );

  return { setScrollbarRef, scrollToId };
};
