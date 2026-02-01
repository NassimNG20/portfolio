//
//
//
//
//
//
import { Flex, Text } from "@/lib";
//
//
import { PiBracketsCurlyBold } from "react-icons/pi";
//
const footer_height = 250;
//
export const FooterView = () => {
  return (
    <Flex
      w="100%"
      h={footer_height}
      justify="center"
      align="center"
      style={{ borderTop: "1px solid var(--border_color)" }}
    >
      <Flex w="70%" justify="space-between">
        <Flex align="center" h={60} justify="center">
          <Flex
            mr={5}
            bdrs={3}
            h={35}
            w={35}
            bd="1px solid var(--border_color)"
            bg="var(--card_color)"
            pos="relative"
          >
            <PiBracketsCurlyBold
              style={{
                position: "absolute",
                left: "calc(50% + 1px)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              color="var(--theme_color)"
              size={20}
            />
          </Flex>
          <Flex direction="column">
            <Text fz={12} fw={700} w="fit-content">
              GARIDI NASSIM
            </Text>
            <Text c="var(--text_dimmed)" fz={10} w="fit-content" ls={1}>
              ENGINEERING PORTFOLIO
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="flex-end">
          <Text fz={11} opacity={0.3}>
            © 2024 Nassim. Built with Vite & React.js & Mantine.
          </Text>
          <Text fz={11} opacity={0.3}>
            v1.0.0-stable
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const FakeFooter = () => {
  return (
    <div
      style={{
        width: "100vw",
        // backgroundColor: "var(--footer_background_color)",
        backgroundColor: "transparent",
        height: footer_height,
        zIndex: -1,
      }}
    />
  );
};
