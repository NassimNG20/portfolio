//
//
//
//
// todo change font size with chatGPT

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselLayout } from "./carousel";
import { Flex, Text } from "@/lib";
import "./work.css";
// import { Projects } from "./projects";
//
export const WorkView = () => {
  return (
    <Flex id="work" h="100vh" align="center" justify="center">
      <Flex direction="column" w="90%">
        <Flex justify="space-between" align="center" w="100%">
          <Flex
            direction="column"
            w="fit-content"
            style={{ whiteSpace: "nowrap" }}
          >
            <Text fz={10} c="var(--theme_color)" style={{ letterSpacing: 2 }}>
              FULL-STACK PORTFOLIO
            </Text>
            <Text fz={40} fw={700}>
              Selected Works
            </Text>
          </Flex>
        </Flex>
        <CarouselLayout />
      </Flex>
    </Flex>
  );
};
