//
//
//
//
//

import { Box } from "@mantine/core";

import ShikiHighlighter, { type Theme } from "react-shiki";
import themeCodeColor from "@/assets/themeCodeColor.json";
import { Flex, Text } from "@/lib";
//
interface CardCodeHighLighterProps {
  code: string;
  w?: number | string;
  h?: number | string;
}
//
export const CardCodeHighLighter = (props: CardCodeHighLighterProps) => {
  const dots: number = 13;
  return (
    <Flex
      w="100%"
      h="fit-content"
      direction="column"
      style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
    >
      <Flex
        bd="1px solid var(--border_color)"
        w="100%"
        align="center"
        h={40}
        bg="var(--card_color)"
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        pos="relative"
      >
        <Flex pos="absolute" w={65} left={0} ml={15} justify="space-evenly">
          <Box w={dots} h={dots} bdrs={10} bg="red" />
          <Box w={dots} h={dots} bdrs={10} bg="orange" />
          <Box w={dots} h={dots} bdrs={10} bg="green" />
        </Flex>
        <Text w="100%" fz={11} ta="center">
          NASSIM.TSX - EDITOR
        </Text>
      </Flex>
      <Flex
        w="100%"
        style={{
          border: "1px solid var(--border_color)",
          borderTop: "none",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <ShikiHighlighter
          className="ShikiHighlighter"
          language="tsx"
          theme={themeCodeColor as Theme}
          style={{
            flex: 1,
            fontSize: 12,
            borderRight: 0,
          }}
        >
          {props.code.trim()}
        </ShikiHighlighter>
      </Flex>
    </Flex>
  );
};
//

//
export const CodeAsString = () => {
  return `
import { Experience } from "@nassim/core";

const Portfolio = () => {
  return (
    <Layout>
      <Hero
        title="Web developer & designer"
        skills={["React", "Next.js", "TypeScript", "ex..."]}
      />
    </Layout>
  );
};`;
};
