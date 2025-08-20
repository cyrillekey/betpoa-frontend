import { Fragment } from "react";
import PopularLeagues from "@/components/PopularLeague";
import FeaturedMatch from "@/components/FeaturedMatch";
import FeaturedMatches from "@/components/FeaturedMatches";

export default function Home() {
  return (
    <Fragment>      
      <div className="col-left">
      <FeaturedMatch />
      <PopularLeagues />
      </div>      
      <div className="col-right">
        <FeaturedMatches />
      </div>         
    </Fragment>
  );
}
