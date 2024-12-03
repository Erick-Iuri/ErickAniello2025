// Importações do Chakra UI
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react"

// Aplicação
export default function Home() {
  return (
    // Main: Container 1/2
    <Flex
      align={"center"}
      justify={"start"}
      direction={"column"}
      color={"black"}
      h="100vh"
      w="100%" bg="white">
      {/* Main: Container 2/2 */}
      <Flex direction={"column"} w={{ base: "100%", xl: "1100px" }}>
        {/* Nav: Barra de navegação */}
        <Flex w="100%" justify={"center"}>
          <Flex
            pt="20px"
            w="100%" justify={"space-between"} fontSize={"18px"}>
            <Flex>
              <Text fontWeight={"bold"}>Erick Aniello.</Text>
            </Flex>
            <Flex>
              <Text pr="30px" fontWeight={"bold"}>Home</Text>

              <Text pr="30px">Work</Text>

              <Text>Contact</Text>
            </Flex>
            <Flex>
              <Text>Traduzir</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* H1: Texto e trabalho 1 */}
        <Flex w="100%" h="100%" pt="40px">
          <Flex justify={"space-between"} w="100%">
            {/* Container h1: 1/2 */}
            <Flex direction={"column"} justify={"space-between"} gap={10}>
              {/* Text: 1 */}
              <Flex direction={"column"}>
                <Text
                  h="70px"
                  fontWeight={"extrabold"}
                  fontSize={"60px"}>Hi! I Am</Text>

                <Text
                  fontWeight={"extrabold"}
                  fontSize={"60px"}>ERICK ANIELLO</Text>
              </Flex>
              {/* Text: 2 */}
              <Flex>
                <Text
                  fontWeight={"light"}
                  w="80%"
                  fontSize={"18px"}>5 years of experience in UX design and front-end development.</Text>
              </Flex>
              {/* Botões */}
              <Flex>
                <Button
                  fontSize={"18px"} fontWeight={"bold"}
                  bg="#E94536"
                  borderRadius={"30px"}
                  pr="50px" pl="50px" pt="20px" pb="20px"
                  color={"white"} mr="10px"
                >Hire me</Button>

                <Button
                  fontSize={"18px"}
                  borderRadius={"30px"}
                  pr="50px" pl="50px" pt="20px" pb="20px"
                  color={"black"}
                >Project</Button>
              </Flex>
            </Flex>
            {/* Container h1: 2/2 */}
            <Flex align={"center"}>
              <Flex justify="center" align={"center"} borderRadius={"10px"} bg="red" w="500px" h="300px">
                <Image src="*" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Grid: Trabalhos */}
        <Flex
        direction={"column"}
          w="100%" h="100%" pt="20px">
          {/* Grid: 1/2 */}
          <Grid templateColumns="repeat(3, 1fr)" gap="3" w="100%">
            <GridItem borderRadius={"10px"} bg="black" h="259.17px" />
            <GridItem borderRadius={"10px"} bg="black" h="259.17px"/>
            <GridItem borderRadius={"10px"} bg="black" h="259.17px"/>
          </Grid>

          {/* Grid: 2/2 */}
          <Grid templateColumns="repeat(3, 1fr)" gap="3" w="100%" pt="3">
            <GridItem borderRadius={"10px"} bg="black" h="259.17px" />
            <GridItem borderRadius={"10px"} bg="black" h="259.17px"/>
            <GridItem borderRadius={"10px"} bg="black" h="259.17px"/>
          </Grid>
        </Flex>

      </Flex>
    </Flex>
  );
}
