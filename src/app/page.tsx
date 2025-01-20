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
    <Flex
      align={"center"}
      justify={"start"}
      direction={"column"}
      color={"black"}
      h="auto"
      w="100%"
      bg="white"
      _dark={{ bg: "#1C1A1F", color: "white" }}
    >
      {/* ~1280px */}
      <Flex
        /* Essa linha mostra o conteudo para a página */
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
        }}
        direction={"column"}
        w={{ base: "100%", xl: "1100px" }}
      >
        {/* Nav: Barra de navegação */}
        <Flex
          w="100%"
          justify={"center"}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Flex pt="20px" w="100%" justify={"space-between"} fontSize={"18px"}>
            <Flex>
              <Text
                color="black"
                _dark={{ color: "white" }}
                fontWeight={"bold"}
              >
                Erick Aniello
              </Text>
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
              <ColorModeButton
                _hover={{ bg: "none" }}
                color="black"
                _dark={{ color: "white" }}
              />
            </Flex>
          </Flex>
        </Flex>

        {/* H1 do texto de apresentação */}
        <Flex w="100%" justify={"center"}>
          {/* Flex Container 1 */}
          <Flex pt="20px" w="100%">
            {/* Flex Container 2 */}
            <Flex direction={"column"} fontSize={"48px"} w="100%">
              {/* H1 */}
              <Flex
                h="50px"
                justify={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                  xl: "start",
                }}
              >
                <Text pr="6px" _dark={{ color: "white" }} color="black">
                  Hi! I Am
                </Text>
                <Text color="black" _dark={{ color: "#C9C9C9" }}>
                  UX Designer
                </Text>
              </Flex>
              {/* H1/2 */}
              <Flex
                justify={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                  xl: "start",
                }}
              >
                <Text color={"black"} _dark={{ color: "white" }}>
                  Erick Aniello.
                </Text>
              </Flex>
              {/* H2/ Button */}
              <Flex
                display={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "flex",
                }}
                direction={"row"}
                justify={"space-between"}
              >
                {/* h2 */}
                <Flex
                  pb={{
                    base: "20px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                    xl: "20px",
                  }}
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
                    _hover={{ bg: "white", color: "black" }}
                    transition={"0,5s"}
                    py="20px"
                    px="50px"
                    color="white"
                    _dark={{ color: "white", borderColor: "white", bg: "none" }}
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
          <Flex
            justify={"space-between"}
            w="100%"
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            {/* Primeira imagem projeto 1/3 */}
            <Flex
              pb={{
                base: "10px",
                sm: "10px",
                md: "10px",
                lg: "10px",
                xl: "0px",
              }}
              justify={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "50%",
              }}
              position="relative"
              borderRadius={"10px"}
              h="600px"
              mr="10px"
              cursor={"pointer"}
            >
              <Image borderRadius={"10px"} src="/banners/Group 412.png" />
              <Button
                display={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "flex",
                }}
                bg="white"
                color={"black"}
                position="absolute"
                bottom={"20px"}
                left="20px"
                py="20px"
                px="197px"
                borderRadius={"30px"}
                fontWeight={"bold"}
                _hover={{ bg: "black", color: "white" }}
                transition={"0,5s"}
              >
                MORE DETAILS
              </Button>
            </Flex>
            {/* Segunda imagem projeto 2/3 */}
            <Flex
              pb={{
                base: "10px",
                sm: "10px",
                md: "10px",
                lg: "10px",
                xl: "0px",
              }}
              justify={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              position="relative"
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "25%",
              }}
              h="600px"
              borderRadius={"10px"}
              mr="10px"
            >
              <Image
                cursor="pointer"
                borderRadius={"10px"}
                src="/banners/Group 20.jpg"
              />
              <Button
                display={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "flex",
                }}
                _hover={{ bg: "white", color: "black" }}
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
              pb={{
                base: "10px",
                sm: "10px",
                md: "10px",
                lg: "10px",
                xl: "0px",
              }}
              justify={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              position="relative"
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "25%",
              }}
              h="600px"
              borderRadius={"10px"}
              mr="10px"
              cursor={"pointer"}
            >
              <Image borderRadius={"10px"} src="/banners/Group 4123213.jpg" />
              <Button
                display={{
                  base: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "flex",
                }}
                _hover={{ bg: "white", color: "black" }}
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
            <Text
              color="black"
              _dark={{ color: "white" }}
              pt="20px"
              fontWeight={"bold"}
            >
              About Me
            </Text>
            <Text pt="20px" color="black" _dark={{ color: "#C9C9C9" }}>
              Hello! I'm a passionate UX Designer with a deep understanding of
              front-end development. I bridge the gap between user needs and
              technical solutions.
            </Text>
          </Flex>
        </Flex>

        {/* Linha */}
        <Flex position="relative" w="100%" justify={"center"} pt="60px">
          <Flex w="100%" h="1px" bg="black" _dark={{ bg: "white" }}></Flex>
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
        <Flex w="100%" justify={"center"} pt="20px" pb="40px">
          <Flex>
            <Image src="banners/Grenn first image.png" />
          </Flex>
        </Flex>

        {/* Botão voltar ao topo */}
        <Button
          _dark={{ color: "black", bg: "white" }}
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

      {/* ~992px //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex
        /* Essa linha mostra o conteúdo para a página */
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "none",
        }}
        align={"center"}
        justify={"start"}
        direction={"column"}
        color={"black"}
        h="auto"
        w="100%"
        bg="white"
        _dark={{ bg: "#1C1A1F", color: "white" }}
      >
        {/* Nav: Barra de navegação */}
        <Flex px="20px" w="920px" justify={"center"}>
          <Flex pt="20px" w="100%" justify={"space-between"} fontSize={"18px"}>
            <Flex>
              <Text
                color="black"
                _dark={{ color: "white" }}
                fontWeight={"bold"}
              >
                Erick Aniello
              </Text>
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
              <ColorModeButton
                _hover={{ bg: "none" }}
                color="black"
                _dark={{ color: "white" }}
              />
            </Flex>
          </Flex>
        </Flex>

        {/* H1 do texto de apresentação */}
        <Flex w="920px" justify={"center"}>
          {/* Flex Container 1 */}
          <Flex pt="20px" w="100%">
            {/* Flex Container 2 */}
            <Flex px="20px" direction={"column"} fontSize={"48px"} w="100%">
              {/* H1 */}
              <Flex h="50px">
                <Text pr="6px" _dark={{ color: "white" }} color="black">
                  Hi! I Am
                </Text>
                <Text color="black" _dark={{ color: "#C9C9C9" }}>
                  UX Designer
                </Text>
              </Flex>
              {/* H1/2 */}
              <Flex>
                <Text color={"black"} _dark={{ color: "white" }}>
                  Erick Aniello.
                </Text>
              </Flex>
              {/* H2/ Button */}
              <Flex direction={"row"} justify={"space-between"}>
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
                    _hover={{ bg: "white", color: "black" }}
                    transition={"0,5s"}
                    py="20px"
                    px="50px"
                    color="white"
                    _dark={{ color: "white", borderColor: "white", bg: "none" }}
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
          <Flex justify={"center"} w="100%">
            {/* Primeira imagem projeto 1/2 */}
            <Flex
              position="relative"
              borderRadius={"10px"}
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
                _hover={{ bg: "black", color: "white" }}
                transition={"0,5s"}
              >
                MORE DETAILS
              </Button>
            </Flex>

            {/* Segunda imagem projeto 2/3 */}
            <Flex position="relative" h="600px" borderRadius={"10px"} mr="10px">
              <Image
                cursor="pointer"
                borderRadius={"10px"}
                src="/banners/Group 20.jpg"
              />
              <Button
                _hover={{ bg: "white", color: "black" }}
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
      </Flex>

      {/* 768px //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Flex
        /* Essa linha mostra o conteúdo para a página */
        display={{
          base: "none",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        }}
      >
        {/* Nav: Barra de navegação */}
        <Flex px="20px" w="420px" justify={"center"}>
          <Flex pt="20px" w="100%" justify={"space-between"} fontSize={"18px"}>
            <Flex>
              <Text
                color="black"
                _dark={{ color: "white" }}
                fontWeight={"bold"}
              >
                Erick Aniello
              </Text>
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
              <ColorModeButton
                _hover={{ bg: "none" }}
                color="black"
                _dark={{ color: "white" }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
