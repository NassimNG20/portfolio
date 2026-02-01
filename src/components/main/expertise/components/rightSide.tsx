//
//
//
//
//

import { Flex, Text } from "@/lib";
import { motion } from "framer-motion";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

//
export const RightSide = () => {
  return (
    <Flex h={400} justify="center" align="center">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Flex
          w={500}
          p={20}
          pl={30}
          direction="column"
          bdrs={15}
          bg="var(--card_color)"
          bd="1px solid var(--border_color)"
        >
          <Flex align="center" gap={8}>
            <HiMiniCodeBracketSquare
              color="var(--theme_color)"
              size={30}
              style={{ position: "relative", top: 1 }}
            />
            <Text fz={28}>Technical Stack</Text>
          </Flex>

          <Flex mt={20} gap={10}>
            <Flex direction="column" gap={10}>
              <Text fz={20}>Frontend Engineering</Text>
              <Text fz={14} c="var(--text_dimmed)">
                Specializing in React, Next.js, and TypeScript to build blazing
                fast, SEO-optimized web applications.
              </Text>
            </Flex>

            <Flex direction="column" gap={10}>
              <Text fz={20}>System Design</Text>
              <Text fz={14} c="var(--text_dimmed)">
                Architecting robust backends and database structures using
                Node.js and modern cloud infrastructure.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};
