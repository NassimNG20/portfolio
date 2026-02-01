//
//
//
//
//

import { Box, UnstyledButton } from "@mantine/core";
import { motion } from "framer-motion";

import type { CurrentPageTypes } from "@/zustand/data";
import { useStore } from "@/zustand/store";

import { Flex, Text } from "@/lib";
//
//
import "./navigationStyle.css";
//
//
export const NavigationView = () => {
  const methods = useStore((e) => e.methods);
  const NavButton = (props: { page: CurrentPageTypes }) => {
    const { page } = props;
    const newPage = page === "expertise" ? "about" : page;
    return (
      <UnstyledButton
        w={60}
        h="100%"
        // bd="1px solid red"
        className="navigation_btn"
        onClick={() => methods.setCurrentPage(page)}
      >
        <Flex justify="center" align="center">
          {newPage[0].toUpperCase() + newPage.slice(1)}
        </Flex>
      </UnstyledButton>
    );
  };

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 1, duration: 1 }}
      style={{ width: "100%", position: "relative" }}
    >
      <Flex
        id="nav_bar"
        h={43}
        w="fit-content"
        pos="absolute"
        left="50%"
        bottom={20}
        bdrs={50}
        align="center"
        bg="var(--card_color)"
        tr={{ x: "-50%", y: "0px" }}
        onMouseEnter={() => methods.setAreaEntered(true)}
        onMouseLeave={() => methods.setAreaEntered(false)}
      >
        <Flex
          w="fit-content"
          h="100%"
          justify="space-between"
          align="center"
          ml={10}
        >
          <NavButton page="home" />
          <NavButton page="work" />
          <NavButton page="expertise" />
        </Flex>
        <Box mr={15} h="50%" w={1} bg="var(--border_color)" />
        <UnstyledButton
          w={90}
          className="navigation_btn_important"
          onClick={() => methods.setCurrentPage("contact")}
        >
          <Flex justify="center" align="center">
            <Text fw={600}>Let's talk</Text>
          </Flex>
        </UnstyledButton>
      </Flex>
    </motion.div>
  );
};
//
//
//
//
// const NavButton = () => {
//   return (
//     <UnstyledButton
//       w={50}
//       bd="1px solid red"
//       h="100%"
//       className="navigation_btn"
//       onClick={() => methods.setCurrentPage("expertise")}
//     >
//       <Flex justify="center" align="center">
//         About
//       </Flex>
//     </UnstyledButton>
//   );
// };
