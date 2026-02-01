//
//
//
//
//
//
//
//
import { Text } from "@/lib";
import { motion, type Variants } from "framer-motion";

//
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Automatically delays each line by 0.2s
      delayChildren: 0.5, // Initial wait before the first line starts
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const HeroText = (props: { lines: string[] }) => {
  const { lines } = props;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      {lines.map((text, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Text c="var(--text_dimmed)" fz={16}>
            {text}
          </Text>
        </motion.div>
      ))}
    </motion.div>
  );
};
