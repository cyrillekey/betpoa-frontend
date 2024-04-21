"use client"

import { useGetFeaturedMatchQuery } from "@/hooks"
import Image from "next/image"
import { Fragment } from "react"


const FeaturedMatch = () => {
    const {isLoading,data} = useGetFeaturedMatchQuery()
    
    return <section className="featured-live">
    <h2 className="sr-only">
      Featured live match
    </h2>
    {isLoading ? <div className="card shimmer-effect">
      <div className="card__body">
        <div className="featured-live__title">
          <div className="featured-live__stage">
            <h3>
              -
            </h3>
            <small>-</small>
          </div>
          {/* <span className="tag tag--red tag--icon"><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /> </svg>Live</span> */}
        </div>
        <div className="featured-live__score score">
          <p className="score__team score__team--home">
            <Image src={{src:"https://placehold.co/600x400.png",width: 96,height: 96}} alt="Home Logo" /><span>-</span>
          </p>
          <div className="score__info">
            <p className="score__result">
              <span className="score__winner">-</span><span className="score__separator">:</span><span className="score__loser">-</span>
            </p>
            <p className="score__time">
              36
            </p>
          </div>
          <p className="score__team score__team--away">
            <Image src={{src: "https://placehold.co/600x400.png" ,height:96,width:96}} alt="Away Team" /><span>-</span>
          </p>
        </div>
        <div className="featured-live__actions">
          <button className="btn btn--icon"><span className="sr-only">Fave</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /> </svg></button><button  className="btn btn--primary">Bet</button><a className="btn" href="#">Watch</a>
        </div>
      </div>
      <div className="card__footer card__footer--link">
        <a href="#">Match details</a>
      </div>
    </div>: data?.data?.id ? <div className="card">
      <div className="card__body">
        <div className="featured-live__title">
          <div className="featured-live__stage">
            <h3>
              {data?.data?.league?.name}
            </h3>
            <small>{data?.data?.league?.country}</small>
          </div>
          {/* <span className="tag tag--red tag--icon"><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /> </svg>Live</span> */}
        </div>
        <div className="featured-live__score score">
          <p className="score__team score__team--home">
            <Image src={{src:data?.data?.homeTeam?.logo ?? "https://placehold.co/600x400.png",width: 96,height: 96}} alt="Home Logo" /><span>{data?.data?.homeTeam?.name}</span>
          </p>
          <div className="score__info">
            <p className="score__result">
              <span className="score__winner">{data?.data?.result?.homeGoals ?? "-"}</span><span className="score__separator">:</span><span className="score__loser">{data?.data?.result?.awayGoals ?? "-"}</span>
            </p>
            <p className="score__time">
              36
            </p>
          </div>
          <p className="score__team score__team--away">
            <Image src={{src: data?.data?.awayTeam?.logo ?? "https://placehold.co/600x400.png" ,height:96,width:96}} alt="Away Team" /><span>{data?.data?.awayTeam?.name}</span>
          </p>
        </div>
        <div className="featured-live__actions">
          <button className="btn btn--icon"><span className="sr-only">Fave</span><svg width="24" height="24" viewBox="0 0 24 24"> <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /> </svg></button><button  className="btn btn--primary">Bet</button><a className="btn" href="#">Watch</a>
        </div>
      </div>
      <div className="card__footer card__footer--link">
        <a href="#">Match details</a>
      </div>
    </div>: <Fragment></Fragment>}
  </section>
}
export default FeaturedMatch