"use client";
import { useGetBlogsQuery } from "@/hooks";
import {
  Avatar,
  Box,
  Button,
  Center,
  GridItem,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";
import { Fragment } from "react";
import { BsArrowRight, BsDot } from "react-icons/bs";
import { v4 } from "uuid";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiAlarm } from "react-icons/bi";
dayjs.extend(relativeTime);
const NewsPage = () => {
  const { data: blogs, isPending: fetchingBlogs } = useGetBlogsQuery();
  if (fetchingBlogs) {
    return (
      <VStack w="full" h="full">
        <SimpleGrid
          columns={{ base: 1, xl: 3 }}
          w="full"
          h="max-content"
          gap={8}
        >
          <GridItem colSpan={{ xl: 2, base: 1 }} w="full">
            <Skeleton w="full" px="8" h="full" borderRadius={"xl"}></Skeleton>
          </GridItem>
          <GridItem colSpan={1} w="full">
            <VStack w="full" gap={4}>
              <HStack w="full" h="36" gap={4}>
                <Skeleton borderRadius={"lg"} h="36" w="36" />
                <VStack h="full" align={"self-start"} gap={0} w="full">
                  <HStack w="full">
                    <SkeletonCircle size={"8"} />
                    <SkeletonText noOfLines={1} />
                  </HStack>
                  <Box h="4" />
                  <SkeletonText noOfLines={1} />
                  <Box h="2" />
                  <SkeletonText noOfLines={3} />
                </VStack>
              </HStack>
              <HStack w="full" h="36" gap={4}>
                <Skeleton borderRadius={"lg"} h="36" w="36" />
                <VStack h="full" align={"self-start"} gap={0} w="full">
                  <HStack w="full">
                    <SkeletonCircle size={"8"} />
                    <SkeletonText noOfLines={1} />
                  </HStack>
                  <Box h="4" />
                  <SkeletonText noOfLines={1} />
                  <Box h="2" />
                  <SkeletonText noOfLines={3} />
                </VStack>
              </HStack>
              <HStack w="full" h="36" gap={4}>
                <Skeleton borderRadius={"lg"} h="36" w="36" />
                <VStack h="full" align={"self-start"} gap={0} w="full">
                  <HStack w="full">
                    <SkeletonCircle size={"8"} />
                    <SkeletonText noOfLines={1} />
                  </HStack>
                  <Box h="4" />
                  <SkeletonText noOfLines={1} />
                  <Box h="2" />
                  <SkeletonText noOfLines={3} />
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
        </SimpleGrid>
        <Box h="4" />
        <HStack w="full" justify={"space-between"}>
          <Box>
            <SkeletonText noOfLines={1} h="6" w="44" />
          </Box>
          <Spacer />
          <Box>
            <SkeletonText noOfLines={1} h="6" w="44" />
          </Box>
        </HStack>
        <Box h="4" />
        <SimpleGrid columns={4} w="full" gap={8}>
          <Stack gap="6" maxW="xs">
            <Skeleton height="200px" />
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
          </Stack>
          <Stack gap="6" maxW="xs">
            <Skeleton height="200px" />
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
          </Stack>
          <Stack gap="6" maxW="xs">
            <Skeleton height="200px" />
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
          </Stack>
          <Stack gap="6" maxW="xs">
            <Skeleton height="200px" />
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
          </Stack>
        </SimpleGrid>
      </VStack>
    );
  }
  return (
    <VStack w="full" h="full">
      <SimpleGrid columns={{ base: 1, xl: 3 }} w="full" h="max-content" gap={8}>
        <GridItem colSpan={{ xl: 2, base: 1 }} w="full">
          <a href={blogs?.at(0)?.url} target="_blank">
            <VStack
              w="full"
              align={"self-start"}
              px="8"
              h="full"
              borderRadius={"xl"}
              backgroundImage={`url('${blogs?.at(0)?.urlToImage}')`}
              justify={"end"}
            >
              <HStack gap={0}>
                <Tag.Root
                  bg={"#E33F0F"}
                  variant={"subtle"}
                  color={"white"}
                  py="1"
                  px="2.5"
                  borderRadius={"2xl"}
                >
                  Basketball
                </Tag.Root>
                <Button variant={"plain"}>
                  <Icon as={BiAlarm} color={"white"} />{" "}
                  <Text color={"white"}>40 Minutes</Text>
                </Button>
              </HStack>
              <Box h="2" />
              <Text color={"white"} fontSize={"2xl"} fontWeight={"semibold"}>
                {blogs?.at(0)?.title}
              </Text>
              <Box h="8" />
            </VStack>
          </a>
        </GridItem>
        <GridItem colSpan={1} w="full">
          <VStack w="full" gap={4}>
            {blogs?.slice(1, 4).map((a) => (
              <a key={v4()} href={a.url} target="_blank">
                <HStack w="full" h="36" gap={4}>
                  <Image
                    borderRadius={"lg"}
                    h="36"
                    w="36"
                    fit={"cover"}
                    src={a.urlToImage}
                    alt="Blog Image"
                  />
                  <VStack h="full" align={"self-start"} gap={0}>
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
                    <Box h="1" />
                    <Text fontWeight={"semibold"} fontSize={"sm"}>
                      {a.title}
                    </Text>
                    <Box h="2" />
                    <Text fontWeight={"medium"} fontSize={"xs"} color={"gray"}>
                      {a.description}
                    </Text>
                  </VStack>
                </HStack>
              </a>
            ))}
          </VStack>
        </GridItem>
      </SimpleGrid>
      <Box h="4" />
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Trendy News
        </Text>
        <Link href={"/news/trending"}>
          <HStack>
            <Text fontSize={"lg"} color={"#FEA67F"}>
              See more
            </Text>
            <Icon as={BsArrowRight} color={"#FEA67F"} fontSize={"lg"} />
          </HStack>
        </Link>
      </HStack>
      <Box h="4" />
      <SimpleGrid columns={4} w="full" gap={8}>
        {blogs?.slice(5, 9).map((a) => (
          <a href={a.url} target="_blank" key={v4()}>
            <VStack h="full" w="full" align={"self-start"} gap={0}>
              <Image
                src={a.urlToImage}
                alt={a.title}
                h="60"
                w="full"
                borderRadius={"xl"}
              />
              <Box h="4" />
              <HStack gap={0}>
                <Avatar.Root size={"2xs"}>
                  <Avatar.Fallback name={a.source.name} />
                </Avatar.Root>
                <Box w="2" />
                <Text fontWeight={"semibold"} fontSize={"sm"}>
                  {a.source.name}
                </Text>
                <Icon as={BsDot} />
                <Text>{dayjs(a.publishedAt).fromNow()}</Text>
              </HStack>
              <Box h="2.5" />
              <Box minH={"20"}>
                <Text fontWeight={"semibold"} fontSize={"md"}>
                  {a.title}
                </Text>
              </Box>
              <Box h="2" />
              <Text fontSize={"sm"}>{a.description}</Text>
            </VStack>
          </a>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
export default NewsPage;
