//
//
//
//
//

import { Box } from "@mantine/core";
import { Flex, Text } from "@/lib";
import { motion } from "framer-motion";

import { CardCodeHighLighter, CodeAsString } from "./cardCodeHighLighter";
import "./header.css";
//
export const HeaderView = () => {
  const code = CodeAsString();

  return (
    <Flex
      id="home"
      w="100%"
      h="100vh"
      align="center"
      p={20}
      pr={60}
      className="header"
    >
      <Flex flex={1} direction="column" align="center" h="fit-content">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 1, duration: 1 }}
        >
          <HeaderDevAvailable />
        </motion.div>
        <Flex mt={10} mb={30} direction="column" align="center" w="100%">
          <HeaderTitle />
          <HeaderDescription />
        </Flex>
      </Flex>
      <Flex pos="relative" flex={0.7} style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <motion.div
            initial={{ height: 40 }}
            animate={{ height: 310 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <CardCodeHighLighter code={code} />
          </motion.div>
        </motion.div>
      </Flex>
    </Flex>
  );
};
//
//
const HeaderTitle = () => {
  return (
    <Flex gap={10}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.5, duration: 1 }}
      >
        <Text fz={80} fw="bold" c="var(--text_color)">
          Garidi
        </Text>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.6, duration: 1 }}
      >
        <Text
          fz={80}
          className="header_nassim"
          c="var(--theme_color)"
          fw="bold"
        >
          Nassim
        </Text>
      </motion.div>
    </Flex>
  );
};
const HeaderDescription = () => {
  return (
    <Flex direction="column" align="center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.7, duration: 1 }}
        style={{ display: "flex", gap: 5 }}
      >
        <Text fw="bold" fz={16}>
          Web Developer & Designer
        </Text>
        <Text c="var(--text_dimmed)" fz={16}>
          crafting hight-performance digital
        </Text>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.8, duration: 1 }}
      >
        <Text c="var(--text_dimmed)" fz={16}>
          experiences with technical precision.
        </Text>
      </motion.div>
    </Flex>
  );
};

const HeaderDevAvailable = () => {
  return (
    <Flex
      pl={10}
      pr={10}
      pt={3}
      pb={3}
      bd="1px solid var(--border_color)"
      bg="var(--card_color)"
      align="center"
      bdrs={20}
    >
      <Box w={6} h={6} bg="green" bdrs={10} mr={7} />
      <Text fz={11} style={{ letterSpacing: 1 }}>
        AVAILABLE FOR HIRE
      </Text>
    </Flex>
  );
};
