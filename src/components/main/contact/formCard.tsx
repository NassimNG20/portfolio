import { useRef } from "react";
import { Flex, Text } from "@/lib";
import { Button, Input, Textarea } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import { useEmailJS } from "@/hooks/useEmailJs";

export const FormCard = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { sendEmail, loading, success, error } = useEmailJS();

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formRef);
  };

  return (
    <motion.div variants={formVariants}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Flex
          direction="column"
          mt={20}
          p={20}
          w={400}
          gap={20}
          bg="var(--card_color)"
          bd="1px solid var(--border_color)"
          bdrs={10}
        >
          <input type="hidden" name="title" value="Portfolio Contact" />
          <Flex w="100%" gap={20}>
            <CustomInput name="name" placeholder="Your name" text="Name" />
            <CustomInput name="email" placeholder="Your email" text="Email" />
          </Flex>

          <CustomTextArea
            name="message"
            placeholder="Describe your request, issue, or idea…"
            text="Request details"
          />

          <Button
            h={40}
            radius={5}
            variant="filled"
            type="submit"
            disabled={loading}
          >
            <Text fw={700} ls={0.5} fz={14}>
              {loading ? "Sending..." : "Send request"}
            </Text>
          </Button>

          {success && (
            <Text fz={12} c="green">
              ✅ Message sent successfully
            </Text>
          )}

          {error && (
            <Text fz={12} c="red">
              {error}
            </Text>
          )}
        </Flex>
      </form>
    </motion.div>
  );
};
interface CustomInputProps {
  text: string;
  placeholder: string;
  name: string;
}

const CustomInput = ({ text, placeholder, name }: CustomInputProps) => {
  return (
    <Flex direction="column">
      <Text fz={12} c="var(--text_dimmed)" mb={10} ls={1}>
        {text.toUpperCase()}
      </Text>

      <Input
        name={name} // 🔴 REQUIRED for EmailJS
        placeholder={placeholder}
        styles={{
          input: {
            border: "1px solid var(--border_color)",
            backgroundColor: "var(--card_color_bright)",
            borderRadius: 5,
          },
        }}
      />
    </Flex>
  );
};
interface CustomTextAreaProps {
  text: string;
  placeholder: string;
  name: string;
}

const CustomTextArea = ({ text, placeholder, name }: CustomTextAreaProps) => {
  return (
    <Flex direction="column">
      <Text fz={12} c="var(--text_dimmed)" mb={10} ls={1}>
        {text.toUpperCase()}
      </Text>

      <Textarea
        name={name} // 🔴 REQUIRED for EmailJS
        placeholder={placeholder}
        styles={{
          input: {
            height: 150,
            paddingLeft: 15,
            paddingTop: 12,
            border: "1px solid var(--border_color)",
            backgroundColor: "var(--card_color_bright)",
            borderRadius: 5,
          },
        }}
      />
    </Flex>
  );
};
