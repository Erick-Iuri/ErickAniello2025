// Importações do Chakra UI
import { Flex, Box, Text, Button, Image, Link } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

// Importações Materials UI
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Color mode
import { ColorModeButton } from "@/components/ui/color-mode";

// Aplicação
export default function Home() {
  return (
    // Main: Container 1/2
    <Flex
      align={"center"}
      justify={"start"}
      direction={"column"}
      color={"black"}
      h="200vh"
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
              <Text color="black" _dark={{color:"white"}} fontWeight={"bold"}>Erick Aniello</Text>
            </Flex>

            {/* Itens: Menu NAV */}
            <Flex>
              <Text pr="30px" fontWeight={"bold"}>
                <Link
                  href="./"
                  color="black"
                  textDecor={"none"}
                  transition={"0.5s"}
                  _dark={{ color: "white" }}
                  _hover={{ color: "#01D1DD" }}
                >
                  {" "}
                  Work{" "}
                </Link>
              </Text>

              <Text>
                <Link
                  _dark={{ color: "white" }}
                  href="./contact"
                  color="black"
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
              <ColorModeButton _hover={{bg:"none"}} color="black" _dark={{color:"white"}} />
            </Flex>
          </Flex>
        </Flex>

        {/* H1 da texto de apresentação */}
        <Flex w="100%" justify={"center"}>
          {/* Flex Container 1 */}
          <Flex pt="20px" w="100%">
            {/* Flex Container 2 */}
            <Flex direction={"column"} fontSize={"48px"} w="100%">
              {/* H1 */}
              <Flex h="50px">
                <Text pr="6px" _dark={{color:"white"}} color="black">Hi! I Am</Text>
                <Text color="black" _dark={{ color: "#C9C9C9" }}>
                  UX Designer
                </Text>
              </Flex>
              {/* H1/2 */}
              <Flex>
                <Text color={"black"} _dark={{color:"white"}}>Erick Aniello.</Text>
              </Flex>
              {/* H2/ Button */}
              <Flex justify={"space-between"}>
                {/* h2 */}
                <Flex
                  color={"black"}
                  pt="20px"
                  direction={"column"}
                  fontSize={"18px"}
                  fontWeight={"lighter"}
                  _dark={{ color: "#C9C9C9" }}
                >
                  <Text>5 years of experience in UX design and</Text>
                  <Text>front-end development.</Text>
                </Flex>

                {/* Button */}
                <Flex align={"end"}>
                  <Button
                  _hover={{bg:"white", color:"black", }}
                  transition={"0,5s"}
                    py="20px"
                    px="50px"
                    color="white"
                    _dark={{ color: "white", borderColor:"white", bg:"none" }}
                    border="1px"
                    bg="black"
                    borderColor={"black"}
                    borderStyle={"solid"}
                    borderRadius={"30px"}
                    fontSize={"17px"}
                  >
                    EXPLORE MORE
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Quadros de imagem 3/3 */}
        <Flex w="100%" justify={"center"} pt="20px">
          <Flex justify={"space-between"} w="100%">
            {/* Primeira imagem projeto 1/3 */}
            <Flex
              position="relative"
              borderRadius={"10px"}
              w="50%"
              h="600px"
              mr="10px" 
              cursor={"pointer"}
            >
              <Image borderRadius={"10px"} src="/banners/Group 412.png" />
              <Button
                bg="white"
                color={"black"}
                position="absolute"
                bottom={"20px"}
                left="20px"
                py="20px"
                px="197px"
                borderRadius={"30px"}
                fontWeight={"bold"}
                _hover={{bg:"black", color:"white", }}
                transition={"0,5s"}
              >
                MORE DETAILS
              </Button>
            </Flex>
            {/* Segunda imagem projeto 2/3 */}
            <Flex
              position="relative"
              w="25%"
              h="600px"
              borderRadius={"10px"}
              mr="10px"
            >
              <Image cursor="pointer" borderRadius={"10px"} src="/banners/Group 20.jpg" />
              <Button
                _hover={{bg:"white", color:"black", }}
                transition={"0,5s"}
                position="absolute"
                bottom={"20px"}
                left="20px"
                py="20px"
                px="66px"
                borderRadius={"30px"}
                bg="none"
                color={"white"}
                border="1px solid white"
              >
                MORE DETAILS
              </Button>
            </Flex>
            {/* Terceira imagem projeto 3/3 */}
            <Flex
              position="relative"
              w="25%"
              h="600px"
              borderRadius={"10px"}
              mr="10px"
              cursor={"pointer"}
            >
              <Image borderRadius={"10px"} src="/banners/Group 4123213.jpg" />
              <Button
                _hover={{bg:"white", color:"black", }}
                transition={"0,5s"}
                position="absolute"
                bottom={"20px"}
                left="20px"
                py="20px"
                px="66px"
                borderRadius={"30px"}
                bg="none"
                color={"white"}
                border="1px solid white"
              >
                MORE DETAILS
              </Button>
            </Flex>
          </Flex>
        </Flex>

        {/* Linha sobre e trabalhos 1 */}
        <Flex w="100%" justify={"center"} pt="20px">
          {/* Texto */}
          <Flex direction={"column"} fontSize={"18px"}>
            <Text color="black" _dark={{color:"white"}} pt="20px" fontWeight={"bold"}>
              About Me
            </Text>
            <Text pt="20px" color="black" _dark={{color:"#C9C9C9"}}> 
              Hello! I'm a passionate UX Designer with a deep understanding of
              front-end development. I bridge the gap between user needs and
              technical solutions.
            </Text>
          </Flex>
        </Flex>

        {/* Linha */}
        <Flex position="relative" w="100%" justify={"center"} pt="60px">
          <Flex w="100%" h="1px" bg="black" _dark={{bg:"white"}}></Flex>
          {/* botão com arrow */}
          <Button
            bg="none"
            color="black"
            _dark={{ color: "white" }}
            fontSize={"18px"}
            position={"absolute"}
            bottom="20%"
            left="85%"
          >
            Latest projects
            <ArrowOutwardIcon />
          </Button>
        </Flex>

        {/* Primeiro trabalho icondo */}
        <Flex w="100%" justify={"center"} pt="20px">
          <Flex>
            <Image src="banners/Grenn first image.png" />
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
