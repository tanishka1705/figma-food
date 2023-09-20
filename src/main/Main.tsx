import { Image, Box, Text, Button, HStack, Flex } from "@chakra-ui/react";
import "./Main.css";

function Main() {
  return (
    <Box className="desktop-hero-light-1">
      <Image src="/images/Rectangle 48.png" className="main-img"></Image>

      {/* <Text className="food-app">Food app</Text>
      <Box className="h-1">
        <Text id="txt1">
          Why stay hungry when <br></br>
          you can order form Bella Onojie
        </Text>
      </Box>
      <Box className="h-1">
        <Text id="txt2">Download the bella onoje’s food app now on</Text>
      </Box>

      <Flex flexDirection="column" alignItems="center" className="flex-btn">
        <HStack>
          <Button id="btn-1">Playstore</Button>
          <Button colorScheme="white" variant="outline" id="btn-2">
            App Store
          </Button>
        </HStack>
      </Flex> */}



    <Flex flexDirection="column" alignItems="center">
        <Text className="food-app">Food app</Text>
        <Text id="txt1">
          Why stay hungry when <br />
          you can order from Bella Onojie
        </Text>
        <Text id="txt2">Download the Bella Onojie's food app now on</Text>
        <HStack className="button-container">
          <Button id="btn-1">Playstore</Button>
          <Button variant="outline" id="btn-2">
            App Store
          </Button>
        </HStack>
      </Flex>







    </Box>
  );
}
export default Main;
