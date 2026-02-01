//
//
//
//
//
import { useEffect, useRef } from "react";
//
//
import { Scrollbar } from "smooth-scrollbar-react";

import type SmoothScrollbar from "smooth-scrollbar";
//

import { HeaderLayout } from "@/components/header";

import { ExpertiseLayout } from "@/components/main/expertise";
import { ContactLayout } from "@/components/main/contact";
import { WorkLayout } from "@/components/main/work";

import { FooterLayout } from "@/components/footer";

import { NavigationLayout } from "@/components/navigation";
import { CanvasCursor } from "@/components/mouseCursor";

import { Flex } from "@/lib/flex";
import { useStore } from "@/zustand/store";
//
//
const App = () => {
  const currentPage = useStore((e) => e.currentPage);
  const updateScroll = useStore((e) => e.updateScroll);
  const ref = useRef<SmoothScrollbar>(null);

  useEffect(() => {
    const scrollToId = (id: string) => {
      if (!ref.current) return;
      const el = document.getElementById(id);

      if (!el) return;
      ref.current.scrollTo(0, el.offsetTop, 1000);
    };
    scrollToId(currentPage);
  }, [updateScroll, currentPage]);
  return (
    <Flex direction="column" pos="relative" h="100vh" w="100vw">
      <Scrollbar className="main_app_container" ref={ref} damping={0.05}>
        <HeaderLayout />
        <WorkLayout />
        <ExpertiseLayout />
        <ContactLayout />
        <FooterLayout />
      </Scrollbar>

      <CanvasCursor />

      <NavigationLayout />
    </Flex>
  );
};

export default App;
