"use client";
import { useGetBlogsQuery } from "@/hooks";
import {
  Avatar,
  Box,
  Button,
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
import { BsArrowRight, BsDot } from "react-icons/bs";
import { v4 } from "uuid";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiAlarm } from "react-icons/bi";
dayjs.extend(relativeTime);
const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"];

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length;
  return colorPalette[index];
};
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
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 5 }}
        w="full"
        h="max-content"
        gap={8}
      >
        <GridItem colSpan={{ lg: 3, base: 1 }} w="full">
          <a href={blogs?.at(0)?.url} target="_blank">
            <VStack
              w="full"
              align={"self-start"}
              h="full"
              borderRadius={"xl"}
              justify={"end"}
            >
              <Image
                h="full"
                w="full"
                borderRadius={"xl"}
                alt={blogs?.at(0)?.title}
                src="https://nbcsports.brightspotcdn.com/dims4/default/d9f4e81/2147483647/strip/true/crop/4631x2605+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F4a%2F81%2Fad18016344be84ca45917800b699%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2229628298"
              />
              <div style={{ position: "absolute" }}>
                <VStack align={"self-start"} px="8" w="80%">
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
                  <Text
                    color={"white"}
                    fontSize={"2xl"}
                    fontWeight={"semibold"}
                  >
                    {blogs?.at(0)?.title}
                  </Text>
                  <Box h="8" />
                </VStack>
              </div>
            </VStack>
          </a>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 2 }} w="full">
          <VStack w="full" gap={4} gapY={6}>
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
                      <Avatar.Root
                        size={"2xs"}
                        colorPalette={pickPalette(a.author)}
                      >
                        <Avatar.Fallback name={a.author}></Avatar.Fallback>
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
      <SimpleGrid columns={{ md: 2, base: 1, lg: 4 }} w="full" gap={8}>
        {blogs?.slice(4, 8).map((a) => (
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
                <Avatar.Root
                  size={"2xs"}
                  colorPalette={pickPalette(a.source.name)}
                >
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
      <Box h="4" />
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Latest News
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
      <SimpleGrid columns={{ md: 2, base: 1 }} w="full" gap={8}>
        <Image
          w="full"
          borderRadius={"lg"}
          src={blogs?.at(8)?.urlToImage}
          alt="Basketball news"
        />
        <VStack
          align={"start"}
          justify={"start"}
          gap={0}
          w={{ base: "full", md: "80%" }}
        >
          <HStack>
            <Avatar.Root
              size={"xs"}
              colorPalette={pickPalette(blogs?.at(8)?.author ?? "")}
            >
              <Avatar.Fallback name={blogs?.at(8)?.author} />
            </Avatar.Root>
            <Text fontWeight={"semibold"}>{blogs?.at(8)?.author}</Text>
          </HStack>
          <Box h="4" />
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            {blogs?.at(8)?.title}
          </Text>
          <Box h="4" />
          <Text color={"#AEAEAE"} fontWeight={"light"} fontSize={"md"}>
            {blogs?.at(8)?.description}
          </Text>
        </VStack>
      </SimpleGrid>
      <Box h="4" />
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap={2}>
        {blogs?.slice(9, 13).map((a) => (
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
              <VStack
                h="full"
                align={"self-start"}
                gap={0}
                justify={"space-around"}
              >
                <HStack>
                  <Avatar.Root
                    size={"2xs"}
                    colorPalette={pickPalette(a.author)}
                  >
                    <Avatar.Fallback name={a.author}></Avatar.Fallback>
                  </Avatar.Root>
                  <Text color={"black"} fontWeight={"semibold"} fontSize={"sm"}>
                    {a.author}
                  </Text>
                </HStack>
                <Text fontWeight={"semibold"} fontSize={"sm"}>
                  {a.title}
                </Text>
                <HStack>
                  <Avatar.Root
                    size={"2xs"}
                    colorPalette={pickPalette(a.source.name)}
                  >
                    <Avatar.Fallback name={a.source.name}></Avatar.Fallback>
                  </Avatar.Root>
                  <Text
                    color={"gray.500"}
                    fontWeight={"semibold"}
                    fontSize={"xs"}
                  >
                    {a.source.name}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </a>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
export default NewsPage;
