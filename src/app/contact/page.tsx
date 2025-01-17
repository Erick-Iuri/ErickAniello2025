"use client"

// Importações do Chakra UI
import { Flex, Box, Text, Button, Image, Link } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

//Color mode
import { ColorModeButton } from "@/components/ui/color-mode";

// Aplicação
export default function Contact() {
  return (
    // Main: Container 1/2
    <Flex
      align={"center"}
      justify={"start"}
      direction={"column"}
      color={"black"}
      h="100vh"
      w="100%"
      bg="white"
      _dark={{color:"white",bg:"#1C1A1F"}}
    >
      {/* Main: Container 2/2 */}
      <Flex direction={"column"} w={{ base: "100%", xl: "1100px" }}>
        {/* Nav: Barra de navegação */}
        <Flex w="100%" justify={"center"}>
          <Flex pt="20px" w="100%" justify={"space-between"} fontSize={"18px"}>
            <Flex>
              <Text fontWeight={"bold"}>
                Erick Aniello<span style={{ color: "#01D1DD" }}>.</span>
              </Text>
            </Flex>

            {/* Itens: Menu NAV */}
            <Flex>
              <Text pr="30px">
                <Link
                  href="./"
                  color={"black"}
                  textDecor={"none"}
                  transition={"0.5s"}
                  _hover={{ color: "#01D1DD" }}
                  _dark={{color:"white"}}
                >
                  {" "}
                  Work{" "}
                </Link>
              </Text>

              <Text fontWeight={"bold"}>
                <Link
                  href="./contact"
                  color={"black"}
                  textDecor={"none"}
                  transition={"0.5s"}
                  _hover={{ color: "#01D1DD" }}
                  _dark={{color:"white"}}
                >
                  {" "}
                  Contact
                </Link>
              </Text>
            </Flex>

            <Flex>
              <ColorModeButton />
            </Flex>
          </Flex>
        </Flex>

        {/* H1: Texto  */}
        <Flex mt="50px" justify={"center"}>
          <Flex direction={"column"}>
            <Text fontWeight={"bold"} fontSize={"50px"}>
              Contact Me
              <Text as="span" color={"#01D1DD"}>
                .
              </Text>
            </Text>
          </Flex>
        </Flex>

        {/* H2: Texto */}
        <Flex mt="20px" justify={"center"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            textAlign={"center"}
          >
            <Text fontSize={"18px"}>I'd love to hear from you!</Text>

            <Text mt="20px" fontSize={"18px"} w="80%">
              Whether you're interested in collaborating on a project, have a
              question, or just want to connect, feel free to reach out. I'm
              always open to new opportunities and discussions.
            </Text>
          </Flex>
        </Flex>

        {/* Contatos: */}
      </Flex>
    </Flex>
  );
}
