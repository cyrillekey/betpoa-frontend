"use client";
import { useGetBlogsQuery } from "@/hooks";
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
import { v4 } from "uuid";

const NewsPage = () => {
  const { data: blogs, isPending: fetchingBlogs } = useGetBlogsQuery();
  return (
    <VStack w="full" h="full">
      <SimpleGrid columns={{ base: 1, xl: 3 }} w="full" h="min" gap={8}>
        <GridItem colSpan={{ xl: 2, base: 1 }} w="full">
          <VStack
            w="full"
            align={"self-start"}
            px="8"
            h="full"
            borderRadius={"xl"}
            backgroundImage={`url('${blogs?.at(0)?.urlToImage}')`}
            justify={"end"}
          >
            <Text color={"white"} fontSize={"2xl"} fontWeight={"semibold"}>
              {blogs?.at(0)?.title}
            </Text>
            <Box h="10" />
          </VStack>
        </GridItem>
        <GridItem colSpan={1} w="full">
          <VStack w="full" gap={4}>
            {blogs?.slice(1, 5).map((a) => (
              <HStack w="full" h="36" gap={4} key={v4()}>
                <Image
                  borderRadius={"lg"}
                  h="36"
                  w="36"
                  src={a.urlToImage}
                  alt="Blog Image"
                />
                <VStack h="full" align={"self-start"}>
                  <HStack>
                    <Avatar.Root size={"2xs"}>
                      <Avatar.Fallback name="John Doe"></Avatar.Fallback>
                    </Avatar.Root>
                    <Text
                      color={"black"}
                      fontWeight={"semibold"}
                      fontSize={"sm"}
                    >
                      {a.author}
                    </Text>
                  </HStack>
                  <Text fontWeight={"semibold"} fontSize={"sm"}>
                    {a.title}
                  </Text>
                  <Text fontWeight={"thin"} fontSize={"xs"} color={"black"}>
                    {a.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default NewsPage;
