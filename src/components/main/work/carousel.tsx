import { useState } from "react";
import { useStore } from "@/zustand/store";

import { Image, UnstyledButton } from "@mantine/core";
import { Flex, Text } from "@/lib";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { NG_PROJECTS } from "./works";

// todo change font size with chatGPT
type CarouselProps = { is_infinite?: boolean };

export const CarouselLayout = ({ is_infinite = true }: CarouselProps) => {
  const [workIndex, setWorkIndex] = useState<number>(0);
  const methods = useStore((e) => e.methods);
  const total = NG_PROJECTS.length;

  const goNext = () => {
    if (is_infinite) {
      setWorkIndex((prev) => (prev + 1) % total);
    } else {
      setWorkIndex((prev) => Math.min(prev + 1, total - 1));
    }
  };

  const goPrev = () => {
    if (is_infinite) {
      setWorkIndex((prev) => (prev - 1 + total) % total);
    } else {
      setWorkIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <Flex direction="column" w="100%" h="fit-content" align="center" mt={15}>
      {/* Carousel */}
      <Flex
        h={400}
        w="100%"
        justify="center"
        align="center"
        pos="relative"
        overflow="hidden"
      >
        {NG_PROJECTS.map((e, i) => {
          const left = (i - workIndex) * 100;
          return (
            <Flex
              key={i}
              pos="absolute"
              left={`${left}vw`}
              top={0}
              w="100%"
              h="100%"
              justify="space-between"
              align="center"
              style={{ transition: "left 0.5s ease-in-out" }}
            >
              {/* Image left */}
              <Flex
                pos="relative"
                justify="center"
                h="90%"
                w={700}
                overflow="hidden"
                bdrs={5}
              >
                <Image
                  src={e.imagePath}
                  w="fit-content"
                  alt={e.description}
                  style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
                />
              </Flex>

              {/* Description right */}
              <Flex h="100%" align="center" justify="center">
                <Flex bdrs={10} gap={10} direction="column">
                  <Flex gap={10}>
                    {e.builtWith?.map((e, i) => {
                      return (
                        <Flex
                          key={i}
                          bd="1px solid var(--theme_color)"
                          bg="var(--card_color)"
                          pt={4}
                          pb={4}
                          pl={10}
                          pr={10}
                          bdrs={5}
                        >
                          <Text c="var(--theme_color)" fz={10}>
                            {e}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                  <Flex direction="column" gap={10}>
                    <Text fz={40} fw={700}>
                      {e.name[0].toUpperCase() + e.name.slice(1)}
                    </Text>
                    <Flex w={450} direction="column">
                      <Text fz={14} c="var(--text_dimmed)">
                        {e.description}
                      </Text>
                    </Flex>
                  </Flex>

                  <UnstyledButton
                    onClick={() => methods.setCurrentPage("contact")}
                  >
                    <Flex align="center" gap={5} mt={10}>
                      <Text fw={600} c="var(--theme_color)" fz={15}>
                        Get in touch
                      </Text>
                      <FaLongArrowAltRight color="var(--theme_color)" />
                    </Flex>
                  </UnstyledButton>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      {/* Navigation buttons */}
      <Flex gap={10} pos="absolute" right={50} bottom={0}>
        <UnstyledButton
          onClick={goPrev}
          w={35}
          h={35}
          bdrs={50}
          bd="1px solid var(--border_color)"
          bg="var(--card_color_bright)"
        >
          <Flex h="100%" justify="center" align="center">
            <IoIosArrowBack
              style={{ position: "relative", right: 1, top: 1 }}
            />
          </Flex>
        </UnstyledButton>
        <UnstyledButton
          onClick={goNext}
          w={35}
          h={35}
          bdrs={50}
          bd="1px solid var(--border_color)"
          bg="var(--card_color_bright)"
        >
          <Flex justify="center" align="center">
            <IoIosArrowForward style={{ position: "relative", top: 1 }} />
          </Flex>
        </UnstyledButton>
      </Flex>
    </Flex>
  );
};
