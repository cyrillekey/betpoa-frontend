import {
  Avatar,
  Box,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <VStack w="full" h="full">
      <SimpleGrid columns={{ base: 1, xl: 3 }} w="full" h="lg" gap={8}>
        <GridItem colSpan={{ xl: 2, base: 1 }} w="full">
          <VStack
            w="full"
            align={"self-start"}
            px="8"
            h="full"
            borderRadius={"xl"}
            backgroundImage={
              "url('https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0804%2Fr1527568_1296x729_16%2D9.jpg')"
            }
            justify={"end"}
          >
            <Text color={"white"} fontSize={"2xl"} fontWeight={"semibold"}>
              More Americans Are Playing Sports—Especially This One
            </Text>
            <Box h="10" />
          </VStack>
        </GridItem>
        <GridItem colSpan={1} w="full">
          <HStack w="full" h="36" gap={4}>
            <Image
              borderRadius={"lg"}
              h="36"
              w="36"
              src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0804%2Fr1527568_1296x729_16%2D9.jpg"
              alt="Blog Image"
            />
            <VStack h="full" align={"self-start"}>
              <HStack>
                <Avatar.Root size={"2xs"}>
                  <Avatar.Fallback name="John Doe"></Avatar.Fallback>
                </Avatar.Root>
                <Text color={"black"} fontWeight={"semibold"} fontSize={"sm"}>
                  John Doe
                </Text>
              </HStack>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Sports Illustrated’s Premier League 2025–26 Predictions
              </Text>
              <Text fontWeight={"thin"} fontSize={"xs"} color={"black"}>
                Liverpool’s clash with Bournemouth at Anfield on Friday night
                will bring to an end the 82-day wait for Premier League action
                to get back underway.
              </Text>
            </VStack>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default NewsPage;
