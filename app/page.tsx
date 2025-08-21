import { Fragment } from "react";
import PopularLeagues from "@/components/PopularLeague";
import FeaturedMatch from "@/components/FeaturedMatch";
import FeaturedMatches from "@/components/FeaturedMatches";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <SimpleGrid columns={6} gap={10} w="full">
      <GridItem colSpan={2}>
        <FeaturedMatch />
        <PopularLeagues />
      </GridItem>
      <GridItem colSpan={4}>
        <FeaturedMatches />
      </GridItem>
    </SimpleGrid>
  );
}
