//
//
//
//
//
//
import { Flex, Text } from "@/lib";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { motion, type Variants } from "framer-motion";
import { FormCard } from "./formCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeSlideVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ContactView = () => {
  return (
    <Flex
      id="contact"
      h="100vh"
      w="100%"
      justify="center"
      align="center"
      pos="relative"
      // bd="1px solid red"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* Left Side: Text Info */}
        <Flex direction="column">
          <motion.div variants={fadeSlideVariants}>
            <Text fz={12} fw={600} c="var(--theme_color)" ls={1}>
              GET IN TOUCH
            </Text>
          </motion.div>

          <Flex direction="column">
            <motion.div variants={fadeSlideVariants}>
              <Text fz={64} fw={900}>
                Send a request
              </Text>
            </motion.div>
            <motion.div variants={fadeSlideVariants}>
              <Text fz={16} c="var(--text_dimmed)" w={400}>
                Have a vision you want to bring to life? I'm available for new
                projects and interesting collaborations. Let's build something
                exceptional together.
              </Text>
            </motion.div>
          </Flex>

          <motion.div variants={fadeSlideVariants}>
            <Flex
              mt={20}
              mb={15}
              w={60}
              h={2}
              bg="var(--theme_color)"
              style={{ opacity: 0.6 }}
            />
          </motion.div>
          <motion.div variants={fadeSlideVariants}>
            <Flex align="center">
              <Flex
                pos="relative"
                top={2}
                w={30}
                h={30}
                justify="center"
                align="center"
                bd="1px solid var(--border_color)"
                bg="var(--card_color)"
                bdrs={5}
                mr={5}
              >
                <MdOutlineAlternateEmail color="var(--theme_color)" />
              </Flex>
              <Text c="var(--text_dimmed)" fz={16}>
                nassimng20@gmail.com
              </Text>
            </Flex>
          </motion.div>
        </Flex>

        {/* Right Side: Form Card */}
        <FormCard />
      </motion.div>
    </Flex>
  );
};
