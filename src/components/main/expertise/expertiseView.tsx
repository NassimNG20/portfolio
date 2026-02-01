//
//
//
//
import { Flex } from "@/lib";
import { LeftSide } from "./components/leftSide";
import { RightSide } from "./components/rightSide";

export const ExpertiseView = () => {
  return (
    <Flex id="expertise" h="100vh" w="100%" justify="center" align="center">
      <Flex w="85%">
        <LeftSide />
        <RightSide />
      </Flex>
    </Flex>
  );
};
