import { Fragment } from "react";
import PopularLeagues from "@/components/PopularLeague";
import FeaturedMatch from "@/components/FeaturedMatch";
import FeaturedMatches from "@/components/FeaturedMatches";
import { Hide } from "@chakra-ui/react";

export default function Home() {
  return (
    <Fragment>
      <Hide below="md">
      <div className="col-left">
      <FeaturedMatch />
      <PopularLeagues />
      </div>
      </Hide>
      <div className="col-right">
        <FeaturedMatches />
      </div>         
    </Fragment>
  );
}
