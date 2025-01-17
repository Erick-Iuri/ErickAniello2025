// Importações do Chakra UI
import { Flex, Box, Text, Button, Image, Link } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

//Color mode
import { ColorModeButton } from "@/components/ui/color-mode";

// Importações Materials UI
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Aplicação
export default function Work() {
  return (
    // Main: Container 1/2
    <Flex
      align={"center"}
      justify={"start"}
      direction={"column"}
      color={"black"}
      h="290vh"
      w="100%"
      bg="white"
      _dark={{ bg: "#1C1A1F", color: "white" }}
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
                  _dark={{ color: "white" }}
                  textDecor={"none"}
                  transition={"0.5s"}
                  _hover={{ color: "#01D1DD" }}
                >
                  {" "}
                  Home{" "}
                </Link>
              </Text>

              <Text>
                <Link
                  _dark={{ color: "white" }}
                  href="./contact"
                  color={"black"}
                  textDecor={"none"}
                  transition={"0.5s"}
                  _hover={{ color: "#01D1DD" }}
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
      </Flex>

      {/* Div: Imagens e textos */}
      <Flex direction={"column"} w={{ base: "100%", xl: "1100px" }}>
        {/* Texto 1 */}
        <Flex w="100%" justify={"center"}>
          {/* Flex Container 1 */}
          <Flex pt="40px" w="100%">
            {/* Flex Container 2 */}
            <Flex direction={"column"} fontSize={"48px"} w="100%">
              {/* H1 */}
              <Flex h="50px">
                <Text
                  pr="6px"
                  _dark={{ color: "white" }}
                  color="black"
                  fontWeight={"bold"}
                >
                  iCondo -
                </Text>
                <Text pr="6px" _dark={{ color: "#C9C9C9" }} color="black">
                  Mobile app
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Imagem 2 */}
        <Flex w="100%" justify={"center"} pt="30px">
          <Flex>
            <Image src="trabalhos/Grenn first image.png" />
          </Flex>
        </Flex>

        {/* Texto 2 */}
        <Flex w="100%" justify={"start"}>
          <Flex direction={"column"} fontSize={"18px"}>
            <Text
              color="black"
              _dark={{ color: "white" }}
              pt="20px"
              fontWeight={"bold"}
            >
              Full Preview
            </Text>
            <Text pt="20px" color="black" _dark={{ color: "#C9C9C9" }}>
              Here is the detail of our design project. Check it out!
            </Text>
          </Flex>
        </Flex>

         {/* Imagem 3 */}
         <Flex w="100%" justify={"center"} pt="40px">
          <Flex>
            <Image src="/trabalhos/Group 412.png" />
          </Flex>
        </Flex>

        {/* Imagem 3 */}
        <Flex w="100%" justify={"center"} pt="40px">
          <Flex>
            <Image src="/trabalhos/Group 413.png" />
          </Flex>
        </Flex>

         {/* Botão voltar ao topo */}
         <Button
          _dark={{color:"black", bg:"white"}}
          bg="black"
          color={"white"}
          position="fixed"
          bottom="60px" 
          right="100px" 
          zIndex="10"
          borderRadius={"50%"}
          w="auto"
          h="55px"
        >
          <ArrowUpwardIcon />
          </Button>
      </Flex>
    </Flex>
  );
}
