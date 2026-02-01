//
//
//
//
//

import { Flex, Text } from "@/lib";
import { motion } from "framer-motion";
import { HeroText } from "../animate";

import { Counter } from "@/lib/animation/motion";

//
export const LeftSide = () => {
  const lines = [
    "I am Garidi Nassim, a web developer and designer",
    "with a focus on high-end performance and scalable",
    "architectures. I bridge the gap between complex",
    "engineering and elegant user interfaces.",
  ];
  return (
    <Flex flex={1} direction="column" h={450}>
      <Text fz={12} ls={2} c="var(--theme_color)">
        EXPERTISE
      </Text>

      <Flex direction="column" mt={20} mb={20}>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Text fz={64} fw={900} lh={1}>
            Code with
          </Text>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          // viewport={{ amount: "all" }}
        >
          <Text fz={64} fw={900} lh={1}>
            Precision. Design
          </Text>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          // viewport={{ margin: "-200px" }}
        >
          <Text fz={64} fw={900} lh={1}>
            with Purpose.
          </Text>
        </motion.div>
      </Flex>

      <HeroText lines={lines} />
      <MoreInfo />
    </Flex>
  );
};
//
//
//
//
const MoreInfo = () => {
  const years_num = Counter({ end: 8, duration: 1, delay: 1 });
  const commits_num = Counter({ end: 40, duration: 1, delay: 1 });
  return (
    <Flex mt={30} gap={20}>
      <Flex direction="column">
        <Text fz={32} fw={900}>
          {years_num}+
        </Text>
        <Text fz={12} c="var(--text_dimmed)">
          YEARS XP
        </Text>
      </Flex>

      <Flex direction="column">
        <Text fz={32} fw={900}>
          {commits_num}+
        </Text>
        <Text fz={12} c="var(--text_dimmed)">
          COMMITS
        </Text>
      </Flex>
    </Flex>
  );
};
